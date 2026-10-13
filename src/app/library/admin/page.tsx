'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  Unlock,
  ShieldCheck,
  Search,
  Download,
  Trash2,
  Settings,
  Eye,
  MapPin,
  Users,
  Activity,
  Globe,
  Smartphone,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ArrowLeft,
  RefreshCw,
  Filter,
  FileText,
  FolderOpen,
} from 'lucide-react';

import { CONFIG } from '@/config';
import { LibraryAttendanceRecord, LibraryConfig, LibraryVisitorSession } from '@/types/library';
import {
  getLibraryConfig,
  saveLibraryConfig,
  getAttendanceRecords,
  deleteAttendanceRecord,
  exportAttendanceToCSV,
  getTotalPageViews,
  getVisitorSessions,
} from '@/utils/libraryStorage';
import { getCurrentGeoLocation } from '@/utils/geolocation';
import { DigitalLibraryCard } from '@/components/library/DigitalLibraryCard';

export default function LibraryAdminPortal() {
  const [config, setConfig] = useState<LibraryConfig>(getLibraryConfig());
  const [records, setRecords] = useState<LibraryAttendanceRecord[]>([]);
  const [visitorSessions, setVisitorSessions] = useState<LibraryVisitorSession[]>([]);
  const [totalPageViews, setTotalPageViews] = useState<number>(0);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // Active Admin Tab
  const [adminTab, setAdminTab] = useState<'visitors' | 'logs'>('visitors');

  // Exact Location Filter: Only show students who are at 14.328227, 121.090423
  const [onlyExactLocation, setOnlyExactLocation] = useState(false);

  // Search & Modals
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedRecord, setInspectedRecord] = useState<LibraryAttendanceRecord | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCalibratingGps, setIsCalibratingGps] = useState(false);
  const [testWebhookStatus, setTestWebhookStatus] = useState<string | null>(null);

  const loadData = () => {
    const loadedConfig = getLibraryConfig();
    setConfig(loadedConfig);
    setRecords(getAttendanceRecords());
    setVisitorSessions(getVisitorSessions());
    setTotalPageViews(getTotalPageViews());
  };

  useEffect(() => {
    loadData();
    // Auto-refresh active sessions every 10 seconds
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === config.adminPin || pinInput === 'admin123') {
      setIsAuthorized(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Default is admin123');
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete attendance record for ${name}?`)) {
      const updated = deleteAttendanceRecord(id);
      setRecords(updated);
    }
  };

  const handleCalibrateCurrentGps = async () => {
    setIsCalibratingGps(true);
    const loc = await getCurrentGeoLocation(config);
    if (loc.latitude !== 0) {
      const updatedConfig: LibraryConfig = {
        ...config,
        libraryLatitude: Number(loc.latitude.toFixed(6)),
        libraryLongitude: Number(loc.longitude.toFixed(6)),
      };
      setConfig(updatedConfig);
      saveLibraryConfig(updatedConfig);
      alert(
        `Calibrated! Library center set to Lat: ${updatedConfig.libraryLatitude}, Lon: ${updatedConfig.libraryLongitude}`
      );
    } else {
      alert(loc.errorMessage || 'Unable to retrieve location.');
    }
    setIsCalibratingGps(false);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveLibraryConfig(config);
    setIsSettingsOpen(false);
    alert('Settings saved!');
  };

  const handleTestWebhook = async () => {
    if (!config.webhookUrl) {
      setTestWebhookStatus('Please provide a Webhook URL.');
      return;
    }
    setTestWebhookStatus('Testing connection to Webhook...');
    try {
      await fetch(config.webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'test_ping', timestamp: Date.now() }),
      });
      setTestWebhookStatus('✓ Test packet sent! Check your Google Sheet to confirm.');
    } catch (err: any) {
      setTestWebhookStatus(`Error: ${err?.message || 'Failed to connect.'}`);
    }
  };

  // Active visitors within last 15 minutes
  const activeCutoff = Date.now() - 15 * 60 * 1000;
  const activeVisitors = visitorSessions.filter((s) => s.lastActive >= activeCutoff);
  const studentsAtExactLocationCount = activeVisitors.filter((s) => s.isAtLibrary).length;

  // Filtered Visitors
  const filteredVisitors = visitorSessions.filter((s) => {
    if (onlyExactLocation && !s.isAtLibrary) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        s.ipAddress.toLowerCase().includes(q) ||
        (s.studentName && s.studentName.toLowerCase().includes(q)) ||
        (s.studentId && s.studentId.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Filtered Attendance Records
  const filteredRecords = records.filter((r) => {
    if (onlyExactLocation && !r.locationIn.isWithinGeofence) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        r.studentName.toLowerCase().includes(q) ||
        r.studentId.toLowerCase().includes(q) ||
        r.bookTitle.toLowerCase().includes(q) ||
        (r.ipAddress && r.ipAddress.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Render PIN Unlock screen if not authenticated
  if (!isAuthorized) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-sm w-full shadow-lg text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Library Admin Portal</h2>
          <p className="text-xs text-slate-500 mt-0.5 mb-5">
            Monitor page visits, IP addresses, and GPS on-site presence.
          </p>

          <form onSubmit={handleUnlock} className="space-y-3">
            <div>
              <input
                type="password"
                autoFocus
                placeholder="PIN (Default: admin123)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-base font-mono tracking-widest text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              {pinError && <p className="text-xs text-rose-500 mt-1">{pinError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition flex items-center justify-center gap-1.5"
            >
              <Unlock className="w-4 h-4" />
              Unlock Admin Portal
            </button>
          </form>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
            <Link href="/library" className="text-slate-500 hover:text-blue-600 font-medium transition">
              ← Return to Student Attendance
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 w-full space-y-4">
      {/* Top Title & Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h2 className="text-base font-bold text-slate-900">
              Library Monitoring &amp; IP Tracking
            </h2>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live Monitoring" />
          </div>
          <p className="text-xs text-slate-500">
            Real-time tracking for {config.libraryName}
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {/* Direct Link to Google Sheets */}
          <a
            href={(CONFIG as any).librarySheetUrl || 'https://docs.google.com/spreadsheets/d/16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78/edit'}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-xs"
            title="Open Live Google Sheets Attendance Log"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Google Sheet</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Direct Link to Google Drive Media Folder */}
          <a
            href={(CONFIG as any).libraryDriveFolderUrl || 'https://drive.google.com/drive/folders/1qgy2Dyr_yUFTdNoqzXAsFPQIqXUznUr7'}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-xs"
            title="Open Google Drive Media Folder (Selfies, Books, Signatures)"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Google Drive</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => exportAttendanceToCSV(records)}
            disabled={records.length === 0}
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition flex items-center gap-1 disabled:opacity-50 shadow-xs"
            title="Download CSV Backup"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CSV</span>
          </button>
        </div>
      </div>

      {/* Target Location Alert Banner */}
      <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-blue-900">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <div className="truncate">
            <span className="font-bold">Monitored Library Location:</span>{' '}
            <span className="font-mono">{config.libraryLatitude}, {config.libraryLongitude}</span>
            <span className="text-blue-700/80 text-[11px] block sm:inline sm:ml-2">
              (Allowed radius: {config.geofenceRadiusMeters}m)
            </span>
          </div>
        </div>

        <a
          href={`https://www.google.com/maps?q=${config.libraryLatitude},${config.libraryLongitude}`}
          target="_blank"
          rel="noreferrer"
          className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-semibold text-[11px] hover:bg-blue-700 transition flex items-center gap-1 self-start sm:self-auto flex-shrink-0"
        >
          <ExternalLink className="w-3 h-3" />
          View on Map
        </a>
      </div>

      {/* 4 Analytics Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-blue-600" />
            Page Visits
          </div>
          <div className="text-xl font-extrabold text-slate-900 mt-0.5">{totalPageViews}</div>
          <div className="text-[10px] text-slate-400">Total visits logged</div>
        </div>

        <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            Active Online
          </div>
          <div className="text-xl font-extrabold text-emerald-600 mt-0.5">{activeVisitors.length}</div>
          <div className="text-[10px] text-slate-400">In last 15 mins</div>
        </div>

        <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-purple-600" />
            At Library
          </div>
          <div className="text-xl font-extrabold text-purple-600 mt-0.5">
            {studentsAtExactLocationCount}
          </div>
          <div className="text-[10px] text-slate-400">On-site GPS match</div>
        </div>

        <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            Cards Issued
          </div>
          <div className="text-xl font-extrabold text-indigo-600 mt-0.5">{records.length}</div>
          <div className="text-[10px] text-slate-400">Touch signed</div>
        </div>
      </div>

      {/* Strict Exact Location Filter Button */}
      <div className="flex items-center justify-between bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xs">
        <button
          type="button"
          onClick={() => setOnlyExactLocation(!onlyExactLocation)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            onlyExactLocation
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          {onlyExactLocation
            ? '✓ Only Showing Students at Library (14.328227, 121.090423)'
            : 'Filter: Only Show Students at Exact Library Location'}
        </button>

        <button
          onClick={loadData}
          className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition"
          title="Refresh Data"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setAdminTab('visitors')}
          className={`flex-1 py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
            adminTab === 'visitors'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          Active IP &amp; Location Monitor ({filteredVisitors.length})
        </button>

        <button
          onClick={() => setAdminTab('logs')}
          className={`flex-1 py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
            adminTab === 'logs'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Users className="w-3.5 h-3.5 text-blue-600" />
          Student Attendance Cards ({filteredRecords.length})
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
        <input
          type="text"
          placeholder="Search by IP address, student name, ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* TAB 1: ACTIVE IP & LOCATION MONITOR */}
      {adminTab === 'visitors' && (
        <div className="space-y-2.5">
          {filteredVisitors.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
              {onlyExactLocation
                ? 'No active students currently detected inside the exact library location.'
                : 'No visitor sessions recorded yet.'}
            </div>
          ) : (
            filteredVisitors.map((v) => {
              const isRecent = v.lastActive >= activeCutoff;
              return (
                <div
                  key={v.id}
                  className={`bg-white border rounded-2xl p-3.5 shadow-xs transition flex flex-col gap-2 ${
                    v.isAtLibrary
                      ? 'border-emerald-300 ring-1 ring-emerald-200'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          isRecent ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'
                        }`}
                        title={isRecent ? 'Online Now' : 'Idle'}
                      />
                      <span className="font-mono font-bold text-xs text-slate-900">
                        {v.ipAddress}
                      </span>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        {v.deviceType}
                      </span>
                    </div>

                    {/* Exact Location Status */}
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        v.isAtLibrary
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {v.isAtLibrary ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          AT LIBRARY ({v.distanceMeters}m away)
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3 text-rose-600" />
                          OFF-SITE ({v.distanceMeters > 1000 ? `${(v.distanceMeters / 1000).toFixed(1)}km` : `${v.distanceMeters}m`} away)
                        </>
                      )}
                    </span>
                  </div>

                  {/* Student Details if available */}
                  <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                    <div>
                      {v.studentName ? (
                        <span className="font-bold text-slate-900">
                          👤 {v.studentName} {v.studentId ? `(${v.studentId})` : ''}
                        </span>
                      ) : (
                        <span className="text-slate-400 italic">Browsing Portal (Not submitted yet)</span>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">
                      Last seen: {new Date(v.lastActive).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* TAB 2: STUDENT ATTENDANCE CARDS */}
      {adminTab === 'logs' && (
        <div className="space-y-3">
          {filteredRecords.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
              No student records found matching filter.
            </div>
          ) : (
            filteredRecords.map((r) => (
              <div
                key={r.id}
                className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xs flex flex-col justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInspectedRecord(r)}
                    className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0"
                  >
                    {r.selfiePhotoBase64 ? (
                      <img src={r.selfiePhotoBase64} alt="Selfie" className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-6 h-6 m-3 text-slate-400" />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {r.studentName}
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          r.locationIn.isWithinGeofence
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {r.locationIn.isWithinGeofence ? '✓ At Library' : 'Off-Site'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11px] text-slate-500 font-mono truncate">
                        ID: {r.studentId} • Section: {r.gradeSection}
                      </span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                          r.status === 'completed'
                            ? 'bg-slate-100 text-slate-600'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {r.status === 'completed' ? 'Checked Out' : 'Active Pass'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 truncate mt-0.5">
                      📖 {r.bookTitle}
                    </p>
                    {r.ipAddress && (
                      <p className="text-[10px] text-blue-600 font-mono mt-0.5">
                        IP: {r.ipAddress}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom strip: Date & Actions */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 truncate">
                    <span>{new Date(r.timeIn).toLocaleDateString()}</span>
                    <span>•</span>
                    <span className="font-mono text-[10px]">
                      In: {new Date(r.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {r.timeOut && r.status === 'completed'
                        ? ` → Out: ${new Date(r.timeOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (${r.durationMinutes || 0}m)`
                        : ' (Active Inside)'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setInspectedRecord(r)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Card
                    </button>

                    <button
                      onClick={() => handleDelete(r.id, r.studentName)}
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* SETTINGS MODAL */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-blue-600" />
                GPS Location &amp; System Settings
              </h3>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="p-4 space-y-3.5 overflow-y-auto text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  School / Library Name
                </label>
                <input
                  type="text"
                  value={config.libraryName}
                  onChange={(e) => setConfig({ ...config, libraryName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              {/* Exact GPS Center Calibration */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Target Library Coordinates</span>
                  <button
                    type="button"
                    onClick={handleCalibrateCurrentGps}
                    disabled={isCalibratingGps}
                    className="px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-semibold transition"
                  >
                    {isCalibratingGps ? 'Reading...' : 'Calibrate GPS'}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-slate-500 text-[10px] block">Latitude</label>
                    <input
                      type="number"
                      step="any"
                      value={config.libraryLatitude}
                      onChange={(e) => setConfig({ ...config, libraryLatitude: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2 py-1 bg-white border border-slate-200 rounded font-mono text-[11px]"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 text-[10px] block">Longitude</label>
                    <input
                      type="number"
                      step="any"
                      value={config.libraryLongitude}
                      onChange={(e) => setConfig({ ...config, libraryLongitude: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2 py-1 bg-white border border-slate-200 rounded font-mono text-[11px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-500 text-[10px] block">Geofence Radius (Meters)</label>
                  <input
                    type="number"
                    value={config.geofenceRadiusMeters}
                    onChange={(e) => setConfig({ ...config, geofenceRadiusMeters: parseInt(e.target.value) || 60 })}
                    className="w-full px-2 py-1 bg-white border border-slate-200 rounded font-mono text-[11px]"
                  />
                </div>
              </div>

              {/* Webhook URL */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Google Apps Script Webhook URL
                </label>
                <input
                  type="url"
                  value={config.webhookUrl}
                  onChange={(e) => setConfig({ ...config, webhookUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={handleTestWebhook}
                  className="mt-1.5 text-blue-600 hover:text-blue-700 font-semibold text-[11px]"
                >
                  Test Webhook Connection
                </button>
                {testWebhookStatus && (
                  <p className="text-[11px] text-slate-600 mt-1">{testWebhookStatus}</p>
                )}
              </div>

              {/* Connected Cloud Storage Info */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block text-[11px]">Connected Cloud Storage</span>
                
                <div className="flex items-center justify-between gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 font-semibold block">Google Sheet Log</span>
                    <span className="text-[10px] font-mono text-slate-700 truncate block">16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78</span>
                  </div>
                  <a
                    href={(CONFIG as any).librarySheetUrl || 'https://docs.google.com/spreadsheets/d/16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78/edit'}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-[10px] flex items-center gap-1 shrink-0"
                  >
                    Open <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <div className="flex items-center justify-between gap-2 p-2 bg-white rounded-lg border border-slate-200">
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 font-semibold block">Google Drive Media Folder</span>
                    <span className="text-[10px] font-mono text-slate-700 truncate block">1qgy2Dyr_yUFTdNoqzXAsFPQIqXUznUr7</span>
                  </div>
                  <a
                    href={(CONFIG as any).libraryDriveFolderUrl || 'https://drive.google.com/drive/folders/1qgy2Dyr_yUFTdNoqzXAsFPQIqXUznUr7'}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-[10px] flex items-center gap-1 shrink-0"
                  >
                    Open <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Admin Pin */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Admin Passcode PIN
                </label>
                <input
                  type="text"
                  value={config.adminPin}
                  onChange={(e) => setConfig({ ...config, adminPin: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Card Inspection Modal */}
      {inspectedRecord && (
        <DigitalLibraryCard
          isModal
          record={inspectedRecord}
          onClose={() => setInspectedRecord(null)}
        />
      )}
    </div>
  );
}
