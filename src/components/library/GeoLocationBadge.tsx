'use client';

import React from 'react';
import { MapPin, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GeoLocationData } from '@/types/library';

interface GeoLocationBadgeProps {
  location: GeoLocationData | null;
  isLoading: boolean;
  onRefresh: () => void;
  radiusMeters?: number;
}

export function GeoLocationBadge({
  location,
  isLoading,
  onRefresh,
  radiusMeters = 100,
}: GeoLocationBadgeProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
          <span>Detecting location...</span>
        </div>
      </div>
    );
  }

  if (!location || location.latitude === 0) {
    return (
      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
        <div className="flex items-center gap-1.5 truncate">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
          <span className="truncate">Location off. Please allow GPS.</span>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          className="ml-2 px-2 py-0.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-[10px] transition flex items-center gap-1 flex-shrink-0"
        >
          <RefreshCw className="w-2.5 h-2.5" />
          Retry
        </button>
      </div>
    );
  }

  const isInside = location.isWithinGeofence;

  return (
    <div
      className={`px-3 py-2 rounded-xl border transition flex items-center justify-between gap-2 text-xs ${
        isInside
          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
          : 'bg-amber-50/80 border-amber-200 text-amber-900'
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        {isInside ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        ) : (
          <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
        )}
        <div className="truncate">
          <span className="font-bold">
            {isInside ? 'Location Verified' : 'Outside Library'}
          </span>
          <span className="text-[11px] opacity-75 ml-1.5 font-mono">
            ({location.distanceFromLibraryMeters}m away)
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onRefresh}
        title="Refresh GPS"
        className="p-1 rounded-md hover:bg-black/5 text-slate-500 transition flex-shrink-0"
      >
        <RefreshCw className="w-3 h-3" />
      </button>
    </div>
  );
}
