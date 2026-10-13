'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BookOpen, Camera, Upload, Check, X, RefreshCw, AlertCircle } from 'lucide-react';

interface BookPhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: { photoBase64: string; bookTitle: string; callNo?: string }) => void;
  initialTitle?: string;
}

export function BookPhotoUploadModal({
  isOpen,
  onClose,
  onConfirm,
  initialTitle = '',
}: BookPhotoUploadModalProps) {
  const [activeTab, setActiveTab] = useState<'camera' | 'upload'>('camera');
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [bookTitle, setBookTitle] = useState(initialTitle);
  const [callNo, setCallNo] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const startStream = useCallback(async () => {
    stopStream();
    setErrorMsg(null);
    setIsInitializing(true);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access not supported by browser.');
      }

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1080 },
          height: { ideal: 1080 },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch((e) => console.warn('Video play error:', e));
      }
    } catch (err) {
      console.error('Camera start error:', err);
      setErrorMsg('Live viewfinder requires HTTPS. Tap below to capture directly with your camera.');
    } finally {
      setIsInitializing(false);
    }
  }, [stopStream]);

  useEffect(() => {
    if (isOpen) {
      setBookTitle(initialTitle);
      if (activeTab === 'camera' && !photoDataUrl) {
        startStream();
      }
    }
    return () => {
      stopStream();
    };
  }, [isOpen, activeTab, photoDataUrl, initialTitle, startStream, stopStream]);

  const handleTakeShutter = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 640;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
    setPhotoDataUrl(dataUrl);
    stopStream();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoDataUrl(result);
        stopStream();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRetake = () => {
    setPhotoDataUrl(null);
    if (activeTab === 'camera') {
      startStream();
    }
  };

  const handleSave = () => {
    if (!photoDataUrl) {
      alert('Please take or upload a photo of the book.');
      return;
    }
    if (!bookTitle.trim()) {
      alert('Please enter the book title.');
      return;
    }

    onConfirm({
      photoBase64: photoDataUrl,
      bookTitle: bookTitle.trim(),
      callNo: callNo.trim(),
    });
    handleClose();
  };

  const handleClose = () => {
    stopStream();
    setPhotoDataUrl(null);
    setErrorMsg(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Book Photo &amp; Details
            </h3>
            <p className="text-[11px] text-slate-500">Capture book cover or barcode</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector */}
        {!photoDataUrl && (
          <div className="flex border-b border-slate-100 bg-slate-50 p-1 gap-1">
            <button
              onClick={() => {
                setActiveTab('camera');
                startStream();
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition ${
                activeTab === 'camera'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              Camera
            </button>
            <button
              onClick={() => {
                setActiveTab('upload');
                stopStream();
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition ${
                activeTab === 'upload'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              Upload
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="overflow-y-auto p-3 space-y-3">
          <div className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
            {photoDataUrl ? (
              <img
                src={photoDataUrl}
                alt="Book preview"
                className="w-full h-full object-contain bg-slate-900"
              />
            ) : activeTab === 'camera' ? (
              errorMsg ? (
                <div className="p-4 text-center">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <p className="text-xs text-slate-600 mb-2">{errorMsg}</p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-semibold shadow transition"
                  >
                    📷 Take Photo / Select Image
                  </button>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    playsInline
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                  {isInitializing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xs">
                      <RefreshCw className="w-4 h-4 animate-spin mr-1.5" />
                      Loading camera...
                    </div>
                  )}
                </>
              )
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-full flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:bg-slate-50 transition border-2 border-dashed border-slate-200 rounded-xl"
              >
                <Upload className="w-8 h-8 text-emerald-600 mb-1.5" />
                <p className="text-xs font-semibold text-slate-700">Tap to browse book image</p>
                <p className="text-[10px] text-slate-400 mt-0.5">JPG, PNG from phone gallery</p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="space-y-2.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Book Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="e.g. Clean Code / Algorithms"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Call Number / Barcode (Optional)
              </label>
              <input
                type="text"
                value={callNo}
                onChange={(e) => setCallNo(e.target.value)}
                placeholder="e.g. QA 76.73 or ACC-102"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
          {photoDataUrl ? (
            <>
              <button
                onClick={handleRetake}
                className="flex-1 py-2 px-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs transition flex items-center justify-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retake
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-xs flex items-center justify-center gap-1"
              >
                <Check className="w-3.5 h-3.5" />
                Done
              </button>
            </>
          ) : activeTab === 'camera' ? (
            <button
              onClick={handleTakeShutter}
              disabled={Boolean(errorMsg) || isInitializing}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              <Camera className="w-4 h-4" />
              Take Book Photo
            </button>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-1.5"
            >
              <Upload className="w-4 h-4" />
              Choose File
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
