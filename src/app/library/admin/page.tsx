'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
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
  CheckCircle2,
  ExternalLink,
  RefreshCw,
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
  fetchLiveAttendanceRecords,
} from '@/utils/libraryStorage';
import { getCurrentGeoLocation } from '@/utils/geolocation';
import { DigitalLibraryCard, toDirectDriveUrl } from '@/components/library/DigitalLibraryCard';

// Dynamically import Leaflet Google Map component with no SSR to prevent window errors
const LibraryAdminMap = dynamic(
  () =>
    import('@/components/library/LibraryAdminMap')
      .then((m) => m.LibraryAdminMap || m.default)
      .catch((err) => {
        console.warn('ChunkLoadError on LibraryAdminMap, fallback active:', err);
        return function FallbackMap() {
          return (
            <div className="h-80 w-full bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-xs text-slate-500 gap-3 border border-slate-200 p-4 text-center">
              <MapPin className="w-8 h-8 text-emerald-600 animate-pulse" />
              <div>
                <p className="font-bold text-slate-700">Map Component Ready</p>
                <p className="text-[11px] text-slate-400">Map chunk was updating. Tap below to reload.</p>
              </div>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold text-xs hover:bg-slate-100 transition shadow-2xs"
              >
                Reload Map
              </button>
            </div>
          );
        };
      }),
  {
    ssr: false,
    loading: () => (
      <div className="h-80 w-full bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-xs text-slate-500 gap-2 border border-slate-200">
        <RefreshCw className="w-5 h-5 animate-spin text-emerald-600" />
        <span>Loading Live Google Map &amp; Student Coordinates...</span>
      </div>
    ),
  }
);

export default function LibraryAdminPortal() {
  const [config, setConfig] = useState<LibraryConfig>(getLibraryConfig());
  const [records, setRecords] = useState<LibraryAttendanceRecord[]>([]);
  const [visitorSessions, setVisitorSessions] = useState<LibraryVisitorSession[]>([]);
  const [totalPageViews, setTotalPageViews] = useState<number>(0);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  // Active Admin Tab
  const [adminTab, setAdminTab] = useState<'map' | 'visitors' | 'logs'>('map');

  // Search & Modals
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedRecord, setInspectedRecord] = useState<LibraryAttendanceRecord | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCalibratingGps, setIsCalibratingGps] = useState(false);
  const [testWebhookStatus, setTestWebhookStatus] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncedTime, setLastSyncedTime] = useState<string>('');

  const loadData = async () => {
    setIsSyncing(true);
    try {
      const loadedConfig = getLibraryConfig();
      setConfig(loadedConfig);
      // Fetch real-time cross-device records and sessions from Google Sheets & local cache
      const live = await fetchLiveAttendanceRecords(loadedConfig);
      setRecords(live.records);
      setVisitorSessions(live.visitorSessions);
      setTotalPageViews(live.pageViews);
      setLastSyncedTime(new Date().toLocaleTimeString());
    } catch (err) {
      console.warn('Sync error:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    loadData();
    // Auto-refresh active sessions every 10 seconds so admin sees students live
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

  // ONLY students verified standing on the coordinates (at the library)
  const onSiteAttendanceRecords = records.filter((r) => r.locationIn?.isWithinGeofence);
  const onSiteVisitors = visitorSessions.filter((s) => s.isAtLibrary);

  // Filtered On-Site Visitors (Exclusively standing on coordinates)
  const filteredVisitors = onSiteVisitors.filter((s) => {
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

  // Filtered On-Site Attendance Records (Exclusively standing on coordinates)
  const filteredRecords = onSiteAttendanceRecords.filter((r) => {
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
      <div className="flex-1 flex items-center justify-center p-4 min-h-[60vh]">
        <div className="bg-white border border-emerald-100 rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center ring-4 ring-emerald-50 animate-fade-in">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center text-white mx-auto mb-3 shadow-md shadow-emerald-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-base font-extrabold text-slate-900">Library Admin</h2>

          <form onSubmit={handleUnlock} className="space-y-4 mt-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 text-center">
                Admin Passcode
              </label>
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-lg font-mono tracking-widest text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
              {pinError && <p className="text-xs text-rose-500 mt-1.5 text-center font-semibold">{pinError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-1.5 active:scale-[0.99]"
            >
              <Unlock className="w-4 h-4" />
              Unlock
            </button>
          </form>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
            <Link href="/library" className="text-emerald-700 hover:text-emerald-900 font-semibold transition">
              ← Return to Student Attendance
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 w-full space-y-4">
      {/* Top Title & Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <h2 className="text-base font-bold bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent">
              Library GPS Coordinate Radar &amp; Attendance
            </h2>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Coordinate Radar Active" />
          </div>
          <p className="text-xs text-slate-500">
            Attendance assurance: Students standing at {config.libraryLatitude}, {config.libraryLongitude}
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {/* Real-time Google Sheets Cloud Sync Button */}
          <button
            type="button"
            onClick={loadData}
            disabled={isSyncing}
            className="px-2.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold transition flex items-center gap-1.5 shadow-2xs disabled:opacity-50"
            title={lastSyncedTime ? `Last synced: ${lastSyncedTime}` : 'Sync with Google Sheets'}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-emerald-600' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Sync Cloud'}</span>
            {lastSyncedTime && !isSyncing && (
              <span className="text-[10px] text-emerald-600 font-mono hidden md:inline">({lastSyncedTime})</span>
            )}
          </button>
          {/* Direct Link to Google Sheets */}
          <a
            href={(CONFIG as any).librarySheetUrl || 'https://docs.google.com/spreadsheets/d/16ntBPPdctHxaBggT3iK2lZDAVIz63C_hobln0vwkv78/edit'}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-xs"
            title="Open Google Sheets Attendance Database"
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
            className="px-2.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-xs"
            title="Open Google Drive Media Folder"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Google Drive</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition shadow-xs"
            title="Settings & Calibration"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => exportAttendanceToCSV(onSiteAttendanceRecords)}
            disabled={onSiteAttendanceRecords.length === 0}
            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition flex items-center gap-1 disabled:opacity-50 shadow-xs"
            title="Download CSV of On-Site Students"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CSV</span>
          </button>
        </div>
      </div>

      {/* Target Location Alert Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-slate-800 shadow-xs">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <div className="truncate">
            <span className="font-bold text-slate-900">Monitored Library Coordinates:</span>{' '}
            <span className="font-mono text-emerald-800 font-bold">{config.libraryLatitude}, {config.libraryLongitude}</span>
            <span className="text-slate-500 text-[11px] block sm:inline sm:ml-2">
              (Radius: <b>{config.geofenceRadiusMeters}m</b>)
            </span>
          </div>
        </div>

        <a
          href={`https://www.google.com/maps?q=${config.libraryLatitude},${config.libraryLongitude}`}
          target="_blank"
          rel="noreferrer"
          className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold text-[11px] hover:bg-emerald-700 transition flex items-center gap-1 self-start sm:self-auto flex-shrink-0 shadow-xs"
        >
          <ExternalLink className="w-3 h-3" />
          Open on Google Maps
        </a>
      </div>

      {/* 4 Analytics Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-white border border-emerald-100 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            Standing On-Site
          </div>
          <div className="text-xl font-extrabold text-emerald-600 mt-0.5">
            {onSiteVisitors.length}
          </div>
          <div className="text-[10px] text-slate-400">At library coordinates</div>
        </div>

        <div className="bg-white border border-emerald-100 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-teal-600" />
            Active Online
          </div>
          <div className="text-xl font-extrabold text-teal-600 mt-0.5">
            {activeVisitors.filter((s) => s.isAtLibrary).length}
          </div>
          <div className="text-[10px] text-slate-400">Present in last 15m</div>
        </div>

        <div className="bg-white border border-emerald-100 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Verified Passes
          </div>
          <div className="text-xl font-extrabold text-blue-600 mt-0.5">
            {onSiteAttendanceRecords.length}
          </div>
          <div className="text-[10px] text-slate-400">Time In on coordinates</div>
        </div>

        <div className="bg-white border border-emerald-100 p-3 rounded-2xl shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            Total Visits
          </div>
          <div className="text-xl font-extrabold text-slate-900 mt-0.5">{totalPageViews}</div>
          <div className="text-[10px] text-slate-400">Library portal visits</div>
        </div>
      </div>

      {/* PROMINENT GOOGLE MAP: STUDENTS STANDING ON COORDINATES */}
      <LibraryAdminMap
        config={config}
        records={records}
        visitorSessions={visitorSessions}
      />

      {/* Tabs Strip */}
      <div className="flex bg-slate-200/80 p-1 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setAdminTab('map')}
          className={`flex-1 py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${adminTab === 'map'
            ? 'bg-white text-slate-900 shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
            }`}
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          Coordinates Info
        </button>

        <button
          onClick={() => setAdminTab('visitors')}
          className={`flex-1 py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${adminTab === 'visitors'
            ? 'bg-white text-slate-900 shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
            }`}
        >
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          On-Site Students ({filteredVisitors.length})
        </button>

        <button
          onClick={() => setAdminTab('logs')}
          className={`flex-1 py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${adminTab === 'logs'
            ? 'bg-white text-slate-900 shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
            }`}
        >
          <Users className="w-3.5 h-3.5 text-teal-600" />
          Attendance Passes ({filteredRecords.length})
        </button>
      </div>

      {/* Search Input (NO PLACEHOLDER) */}
      <div className="space-y-1">
        <label className="block text-xs font-bold text-slate-700">
          Search On-Site Students (By Name, ID, or IP Address)
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      {/* TAB 1: COORDINATES ASSURANCE INFO */}
      {adminTab === 'map' && (
        <div className="bg-white border border-emerald-100 p-4 rounded-2xl shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Attendance Assurance: On-Site Coordinate Policy
              </h4>
              <p className="text-[11px] text-slate-500">
                Only students who are physically standing within the {config.geofenceRadiusMeters}m library coordinates are plotted.
              </p>
            </div>
            <button
              onClick={loadData}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition"
              title="Refresh Radar"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold">Target Center:</span>
              <span className="font-mono">{config.libraryLatitude}, {config.libraryLongitude}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">Geofence Radius:</span>
              <span>{config.geofenceRadiusMeters} meters</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">Verified Students Plotted:</span>
              <span className="font-bold text-emerald-700">{onSiteAttendanceRecords.length + onSiteVisitors.length} students</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ACTIVE ON-SITE VISITORS */}
      {adminTab === 'visitors' && (
        <div className="space-y-2.5">
          {filteredVisitors.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
              No students currently standing on library coordinates.
            </div>
          ) : (
            filteredVisitors.map((v) => {
              const isRecent = v.lastActive >= activeCutoff;
              return (
                <div
                  key={v.id}
                  className="bg-white border border-emerald-200 rounded-2xl p-3.5 shadow-xs transition flex flex-col gap-2 ring-1 ring-emerald-100"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${isRecent ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'
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

                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      STANDING ON COORDINATES ({v.distanceMeters}m from center)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                    <div>
                      {v.studentName ? (
                        <span className="font-bold text-slate-900">
                          👤 {v.studentName} {v.studentId ? `(${v.studentId})` : ''}
                        </span>
                      ) : (
                        <span className="text-slate-400 italic">Student Device</span>
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

      {/* TAB 3: STUDENT ATTENDANCE CARDS ON COORDINATES */}
      {adminTab === 'logs' && (
        <div className="space-y-3">
          {filteredRecords.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-xs text-slate-500">
              No on-site attendance passes recorded yet.
            </div>
          ) : (
            filteredRecords.map((r) => (
              <div
                key={r.id}
                className="bg-white border border-emerald-100 rounded-2xl p-3.5 shadow-xs flex flex-col justify-between gap-3 ring-1 ring-emerald-50"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInspectedRecord(r)}
                    className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0"
                  >
                    {r.selfiePhotoBase64 ? (
                      <img src={toDirectDriveUrl(r.selfiePhotoBase64)} alt="Selfie" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-6 h-6 m-3 text-slate-400" />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {r.studentName}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        On Coordinates ({r.locationIn?.distanceFromLibraryMeters || 0}m)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11px] text-slate-500 font-mono truncate">
                        ID: {r.studentId} • Section: {r.gradeSection ? r.gradeSection.toUpperCase() : ''}
                      </span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${r.status === 'completed'
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-emerald-50 text-emerald-700'
                          }`}
                      >
                        {r.status === 'completed' ? 'Checked Out' : 'Active Pass'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 truncate mt-0.5">
                      📖 {r.bookTitle}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                      GPS: {r.locationIn.latitude.toFixed(6)}, {r.locationIn.longitude.toFixed(6)}
                    </p>
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

      {/* SETTINGS MODAL (NO PLACEHOLDERS) */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-emerald-600" />
                GPS Coordinates &amp; Calibration
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
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              {/* Exact GPS Center Calibration & Quick Presets */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2.5">
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

                {/* Quick Presets */}
                <div className="flex gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      setConfig({
                        ...config,
                        libraryLatitude: 14.328171,
                        libraryLongitude: 121.090469,
                        geofenceRadiusMeters: 30,
                      });
                    }}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold border bg-emerald-100 text-emerald-800 border-emerald-300"
                  >
                    🏛️ Official Campus Library (14.328171, 121.090469)
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
                    onChange={(e) => setConfig({ ...config, geofenceRadiusMeters: parseInt(e.target.value) || 30 })}
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
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
                <button
                  type="button"
                  onClick={handleTestWebhook}
                  className="mt-1.5 text-emerald-700 hover:text-emerald-800 font-semibold text-[11px]"
                >
                  Test Webhook Connection
                </button>
                {testWebhookStatus && (
                  <p className="text-[11px] text-slate-600 mt-1">{testWebhookStatus}</p>
                )}
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
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
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
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
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
