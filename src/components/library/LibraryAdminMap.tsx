'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  Compass,
  CheckCircle2,
  ExternalLink,
  Users,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { LibraryAttendanceRecord, LibraryConfig, LibraryVisitorSession } from '@/types/library';

interface LibraryAdminMapProps {
  config: LibraryConfig;
  records: LibraryAttendanceRecord[];
  visitorSessions: LibraryVisitorSession[];
}

export function LibraryAdminMap({
  config,
  records,
  visitorSessions,
}: LibraryAdminMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  const geofenceCircleRef = useRef<any>(null);

  const [mapType, setMapType] = useState<'streets' | 'satellite' | 'osm'>('streets');
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  // ONLY include students standing on the coordinates (inside library boundary)
  // Filter out any outside/off-site records as requested: "i dont need outside i need student stand on the coordinates"
  const onSiteStudents = useMemo(() => {
    const points: Array<{
      id: string;
      name: string;
      studentId: string;
      section: string;
      bookTitle?: string;
      photo?: string;
      lat: number;
      lon: number;
      distanceMeters: number;
      timeStr: string;
      type: 'attendance' | 'visitor';
      status?: 'active' | 'completed';
    }> = [];

    // Only add attendance records verified at library coordinates
    records.forEach((r) => {
      const lat = r.locationIn?.latitude;
      const lon = r.locationIn?.longitude;
      const isAtCoordinates = r.locationIn?.isWithinGeofence;

      if (lat && lon && lat !== 0 && lon !== 0 && isAtCoordinates) {
        points.push({
          id: r.id,
          name: r.studentName,
          studentId: r.studentId,
          section: r.gradeSection,
          bookTitle: r.bookTitle,
          photo: r.selfiePhotoBase64,
          lat,
          lon,
          distanceMeters: r.locationIn.distanceFromLibraryMeters || 0,
          timeStr: new Date(r.timeIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'attendance',
          status: r.status,
        });
      }
    });

    // Only add visitor sessions verified at library coordinates
    visitorSessions.forEach((v) => {
      if (v.latitude && v.longitude && v.latitude !== 0 && v.longitude !== 0 && v.isAtLibrary) {
        const alreadyAdded = points.some(
          (p) => p.name === v.studentName && Math.abs(p.lat - v.latitude) < 0.0001
        );
        if (!alreadyAdded) {
          points.push({
            id: v.id,
            name: v.studentName || `Student Visitor (${v.ipAddress})`,
            studentId: v.studentId || '',
            section: '',
            lat: v.latitude,
            lon: v.longitude,
            distanceMeters: v.distanceMeters || 0,
            timeStr: new Date(v.lastActive).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'visitor',
          });
        }
      }
    });

    return points;
  }, [records, visitorSessions]);

  // Initialize Leaflet Map
  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    let isMounted = true;

    async function initMap() {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css' as any);

      if (!isMounted || !mapContainerRef.current) return;

      if (!mapInstanceRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: [config.libraryLatitude, config.libraryLongitude],
          zoom: 19,
          zoomControl: false,
        });

        L.control.zoom({ position: 'bottomright' }).addTo(map);

        mapInstanceRef.current = map;
        markersLayerRef.current = L.layerGroup().addTo(map);
      }

      const map = mapInstanceRef.current;
      const markersLayer = markersLayerRef.current;
      markersLayer.clearLayers();

      // Tile Layer setup
      if ((map as any)._currentTileLayer) {
        map.removeLayer((map as any)._currentTileLayer);
      }

      let tileUrl = 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'; // Google Street Maps
      let maxZoom = 21;
      let attribution = '&copy; Google Maps';

      if (mapType === 'satellite') {
        tileUrl = 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'; // Google Satellite Hybrid
        maxZoom = 21;
      } else if (mapType === 'osm') {
        tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        maxZoom = 19;
        attribution = '&copy; OpenStreetMap contributors';
      }

      const tileLayer = L.tileLayer(tileUrl, { maxZoom, attribution });
      tileLayer.addTo(map);
      (map as any)._currentTileLayer = tileLayer;

      // 1. Library Center Boundary & Pin
      if (geofenceCircleRef.current) {
        map.removeLayer(geofenceCircleRef.current);
      }

      // Translucent green geofence circle around target coordinates
      const geofenceCircle = L.circle([config.libraryLatitude, config.libraryLongitude], {
        radius: config.geofenceRadiusMeters,
        color: '#059669', // Emerald-600
        weight: 2,
        dashArray: '6, 6',
        fillColor: '#10b981', // Emerald-500
        fillOpacity: 0.18,
      }).addTo(map);

      geofenceCircle.bindPopup(
        `<div style="font-family:sans-serif;font-size:12px;padding:4px;">
          <b style="color:#065f46;font-size:13px;">📍 ${config.libraryName} Coordinates</b><br/>
          <span>Coordinates: <b>${config.libraryLatitude}, ${config.libraryLongitude}</b></span><br/>
          <span>Radius: <b>${config.geofenceRadiusMeters} meters</b></span>
        </div>`
      );
      geofenceCircleRef.current = geofenceCircle;

      // Central Library Building Emblem
      const libraryCenterIcon = L.divIcon({
        className: 'library-center-pin',
        html: `
          <div style="
            background: linear-gradient(135deg, #059669, #2563eb);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 16px rgba(5, 150, 105, 0.45);
            border: 2.5px solid white;
            font-size: 18px;
          ">
            🏛️
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([config.libraryLatitude, config.libraryLongitude], { icon: libraryCenterIcon })
        .addTo(markersLayer)
        .bindPopup(
          `<div style="font-family:sans-serif;font-size:12px;padding:4px;">
            <b style="color:#1e3a8a;font-size:13px;">🏛️ ${config.libraryName}</b><br/>
            <span style="color:#475569;">Target On-Site Attendance Coordinate</span><br/>
            <span style="font-family:monospace;font-size:11px;color:#059669;font-weight:bold;">
              Lat: ${config.libraryLatitude}, Lon: ${config.libraryLongitude}
            </span>
          </div>`
        );

      // 2. Plot ONLY Students Standing on the Coordinates
      // When multiple students are on-site, gently spread them within 2-6 meters so each student has a distinct dot
      const totalCount = onSiteStudents.length;

      onSiteStudents.forEach((student, index) => {
        // Micro-distribution around coordinates if multiple students share exact coordinate
        let displayLat = student.lat;
        let displayLon = student.lon;

        if (totalCount > 1) {
          const angle = (index / totalCount) * 2 * Math.PI;
          const radiusMeters = 4 + (index % 3) * 3; // 4m to 10m ring
          const deltaLat = (radiusMeters / 111139) * Math.cos(angle);
          const deltaLon = (radiusMeters / (111139 * Math.cos((student.lat * Math.PI) / 180))) * Math.sin(angle);
          displayLat = student.lat + deltaLat;
          displayLon = student.lon + deltaLon;
        }

        const studentDotIcon = L.divIcon({
          className: 'student-coordinate-dot',
          html: `
            <div style="
              position: relative;
              width: 26px;
              height: 26px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            ">
              <div style="
                position: absolute;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background: rgba(16, 185, 129, 0.4);
                animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
              "></div>
              <div style="
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #10b981;
                border: 2.5px solid #ffffff;
                box-shadow: 0 2px 8px rgba(0,0,0,0.35);
              "></div>
            </div>
          `,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });

        const marker = L.marker([displayLat, displayLon], { icon: studentDotIcon }).addTo(
          markersLayer
        );

        marker.bindTooltip(
          `<b>👤 ${student.name}</b><br/><span style="color:#059669;">✓ Standing on coordinates (${student.distanceMeters}m from center)</span>`,
          { direction: 'top', offset: [0, -12] }
        );

        const popupHtml = `
          <div style="font-family:sans-serif;font-size:12px;min-width:210px;padding:4px;">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <span style="
                display:inline-block;
                width:10px;
                height:10px;
                border-radius:50%;
                background:#10b981;
              "></span>
              <b style="font-size:13px;color:#0f172a;">${student.name}</b>
            </div>

            ${student.studentId ? `<div style="color:#475569;font-size:11px;">ID: <b>${student.studentId}</b> ${student.section ? `• ${student.section}` : ''}</div>` : ''}
            ${student.bookTitle ? `<div style="color:#334155;font-size:11px;margin-top:2px;">📖 ${student.bookTitle}</div>` : ''}

            <div style="margin-top:6px;padding:6px;border-radius:8px;background:#ecfdf5;border:1px solid #a7f3d0;">
              <b style="color:#065f46;font-size:11px;">
                ✓ STUDENT STANDING ON COORDINATES
              </b>
              <div style="font-size:10px;color:#047857;margin-top:2px;">
                Distance: <b>${student.distanceMeters}m</b> from library center
              </div>
            </div>

            <div style="font-family:monospace;font-size:10px;color:#64748b;margin-top:6px;">
              GPS: <b>${student.lat.toFixed(6)}, ${student.lon.toFixed(6)}</b><br/>
              Time: ${student.timeStr}
            </div>

            <div style="margin-top:6px;text-align:right;">
              <a href="https://www.google.com/maps?q=${student.lat},${student.lon}" target="_blank" rel="noreferrer" style="color:#2563eb;text-decoration:none;font-weight:bold;font-size:10px;">
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        `;

        marker.bindPopup(popupHtml);
        marker.on('click', () => setSelectedStudent(student));
      });
    }

    initMap();

    return () => {
      isMounted = false;
    };
  }, [config, onSiteStudents, mapType]);

  const handleCenterCoordinates = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([config.libraryLatitude, config.libraryLongitude], 19, {
        animate: true,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden flex flex-col">
      {/* Map Header & Controls Strip */}
      <div className="p-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-b border-emerald-100 flex flex-wrap items-center justify-between gap-2.5">
        <div>
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Google Map: Students Standing on Library Coordinates
          </h3>
          <p className="text-[10px] text-slate-500">
            Attendance assurance: {onSiteStudents.length} student{onSiteStudents.length === 1 ? '' : 's'} verified on-site at {config.libraryLatitude}, {config.libraryLongitude}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex bg-white/90 rounded-lg p-0.5 border border-slate-200 text-[10px] font-semibold shadow-xs">
            <button
              type="button"
              onClick={() => setMapType('streets')}
              className={`px-2 py-1 rounded transition ${
                mapType === 'streets' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Google Map
            </button>
            <button
              type="button"
              onClick={() => setMapType('satellite')}
              className={`px-2 py-1 rounded transition ${
                mapType === 'satellite' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Satellite
            </button>
            <button
              type="button"
              onClick={() => setMapType('osm')}
              className={`px-2 py-1 rounded transition ${
                mapType === 'osm' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              OSM
            </button>
          </div>

          <button
            type="button"
            onClick={handleCenterCoordinates}
            className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-[10px] font-semibold flex items-center gap-1 shadow-xs"
            title="Recenter on Library Coordinates"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            Recenter Coordinates
          </button>
        </div>
      </div>

      {/* Map Canvas */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
        <div ref={mapContainerRef} className="w-full h-full z-10" />

        {/* Legend Overlay */}
        <div className="absolute top-2.5 left-2.5 z-20 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-emerald-100 shadow-md text-[10px] space-y-1.5">
          <div className="font-bold text-slate-800 text-[11px] flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            Verified On-Site Students:
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
            <span className="text-slate-800 font-bold">
              Standing on Coordinates ({onSiteStudents.length})
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[9px] pt-0.5 border-t border-slate-100">
            <span>Lat: {config.libraryLatitude}, Lon: {config.libraryLongitude}</span>
          </div>
        </div>
      </div>

      {/* Selected Student Details Bar */}
      {selectedStudent && (
        <div className="p-3 bg-emerald-50/60 border-t border-emerald-100 flex items-center justify-between text-xs animate-fade-in">
          <div className="flex items-center gap-2.5">
            {selectedStudent.photo ? (
              <img
                src={selectedStudent.photo}
                alt={selectedStudent.name}
                className="w-9 h-9 rounded-lg object-cover border border-emerald-200"
              />
            ) : (
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                {selectedStudent.name.charAt(0)}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">{selectedStudent.name}</span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  ✓ Standing on Coordinates ({selectedStudent.distanceMeters}m away)
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Lat: {selectedStudent.lat.toFixed(6)}, Lon: {selectedStudent.lon.toFixed(6)} • Time: {selectedStudent.timeStr}
              </p>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps?q=${selectedStudent.lat},${selectedStudent.lon}`}
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition flex items-center gap-1 shadow-xs"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
}

export default LibraryAdminMap;
