'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Plus,
  Edit3,
  Landmark,
  Crown,
  Calendar,
  Layers,
  BookOpen,
  CheckCircle2,
  Clock,
  AlertCircle,
  Database,
  FileCheck,
  Download
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_SITES } from '@/data/sites';
import { HISTORICAL_PERIODS } from '@/data/periods';
import { KINGDOMS } from '@/data/kingdoms';
import { HISTORICAL_RULERS } from '@/data/rulers';
import { HistoricalSite, PublicationStatus } from '@/lib/types';

export default function AdminDashboardPage() {
  const { language, t } = useLanguage();
  const [activeModule, setActiveModule] = useState<'sites' | 'periods' | 'kingdoms' | 'rulers'>('sites');

  // Interactive sample state to demonstrate record creation & status management
  const [sitesList, setSitesList] = useState<HistoricalSite[]>(HISTORICAL_SITES);
  const [isEditing, setIsEditing] = useState(false);
  const [newSiteNameEn, setNewSiteNameEn] = useState('');
  const [newSiteNameSi, setNewSiteNameSi] = useState('');
  const [newSiteLat, setNewSiteLat] = useState('8.000');
  const [newSiteLng, setNewSiteLng] = useState('80.700');
  const [newSiteSignificanceEn, setNewSiteSignificanceEn] = useState('');
  const [publicationStatus, setPublicationStatus] = useState<PublicationStatus>('published');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lanka_admin_sites');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSitesList(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleCreateSite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSiteNameEn || !newSiteNameSi) return;

    const newRecord: HistoricalSite = {
      id: `site-${Date.now()}`,
      slug: newSiteNameEn.toLowerCase().replace(/\s+/g, '-'),
      name: { en: newSiteNameEn, si: newSiteNameSi },
      category: 'religious_shrine',
      coordinates: [parseFloat(newSiteLat) || 8.0, parseFloat(newSiteLng) || 80.7],
      elevation: 75,
      periodIds: ['anuradhapura'],
      significance: { en: newSiteSignificanceEn, si: newSiteSignificanceEn },
      description: { en: newSiteSignificanceEn, si: newSiteSignificanceEn },
      architecturalHighlights: [{ en: 'Surviving stone pillars and plinth', si: 'ශෛලමය කුළුණු සහ ගල් පාදම' }],
      archaeologicalEvidence: { en: 'Excavated pottery and Brahmi inscriptions', si: 'බ්‍රාහ්මී සෙල්ලිපි සාධක' },
      conservationStatus: { en: 'Department of Archaeology Protected Site', si: 'පුරාවිද්‍යා දෙපාර්තමේන්තුව යටතේ ආරක්ෂිතයි' },
      image: '/images/sites/ruwanwelisaya.jpg',
      imageCreator: 'Lankapic / Wikimedia Commons',
      imageLicense: 'CC BY 2.5',
      lastVerifiedAt: new Date().toISOString().split('T')[0],
      publicationStatus: publicationStatus,
      sources: ['Department of Archaeology Record Book']
    };

    const updated = [newRecord, ...sitesList];
    setSitesList(updated);
    try {
      localStorage.setItem('lanka_admin_sites', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setNewSiteNameEn('');
    setNewSiteNameSi('');
    setNewSiteSignificanceEn('');
    setIsEditing(false);
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 4000);
  };

  const handleExportJSON = () => {
    const dataset = {
      sites: sitesList,
      kingdoms: KINGDOMS,
      rulers: HISTORICAL_RULERS,
      periods: HISTORICAL_PERIODS,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(dataset, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lanka-chronicles-knowledge-graph-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-obsidian-900 border border-gold-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-mono">
                  Administrative CMS Studio
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
                  Role: Super Curator
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-50">
                Lanka Chronicles Content Studio
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="px-4 py-2.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 border border-gold-500/30 text-gold-300 font-semibold text-xs tracking-wider transition-colors flex items-center gap-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Export Dataset (JSON)</span>
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Record</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {saveSuccessMsg && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn shadow-lg">
            <CheckCircle2 className="w-4 h-4" />
            <span>Record successfully published to the historical knowledge graph!</span>
          </div>
        )}

        {/* Modal Form for Creating/Editing Historical Records */}
        {isEditing && (
          <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-900 border-2 border-gold-500/60 shadow-2xl animate-fadeIn space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="font-serif font-bold text-lg text-gold-300 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-gold-400" />
                <span>Add Historical Archaeological Site Record</span>
              </h3>
              <button
                onClick={() => setIsEditing(false)}
                className="text-xs text-stone-400 hover:text-stone-200"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleCreateSite} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-stone-300 font-semibold block mb-1">
                    Site Name in English *
                  </label>
                  <input
                    type="text"
                    required
                    value={newSiteNameEn}
                    onChange={(e) => setNewSiteNameEn(e.target.value)}
                    placeholder="e.g. Dimbulagala Forest Monastery"
                    className="w-full bg-obsidian-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-parchment-100 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-300 font-semibold block mb-1">
                    Site Name in Sinhala (සිංහලෙන්) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newSiteNameSi}
                    onChange={(e) => setNewSiteNameSi(e.target.value)}
                    placeholder="උදා: දිඹුලාගල ආරණ්‍ය සේනාසනය"
                    className="w-full bg-obsidian-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-parchment-100 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-stone-300 font-semibold block mb-1">
                    Latitude Coordinates *
                  </label>
                  <input
                    type="text"
                    required
                    value={newSiteLat}
                    onChange={(e) => setNewSiteLat(e.target.value)}
                    className="w-full bg-obsidian-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-parchment-100 font-mono focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-300 font-semibold block mb-1">
                    Longitude Coordinates *
                  </label>
                  <input
                    type="text"
                    required
                    value={newSiteLng}
                    onChange={(e) => setNewSiteLng(e.target.value)}
                    className="w-full bg-obsidian-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-parchment-100 font-mono focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-300 font-semibold block mb-1">
                    Moderation / Publication Status
                  </label>
                  <select
                    value={publicationStatus}
                    onChange={(e) => setPublicationStatus(e.target.value as PublicationStatus)}
                    className="w-full bg-obsidian-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-parchment-100 focus:outline-none focus:border-gold-500"
                  >
                    <option value="draft">Draft (Private)</option>
                    <option value="pending_verification">Pending Archaeological Review</option>
                    <option value="verified">Verified by Curator</option>
                    <option value="published">Approved & Published</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-300 font-semibold block mb-1">
                  Historical Significance & Primary Evidence *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newSiteSignificanceEn}
                  onChange={(e) => setNewSiteSignificanceEn(e.target.value)}
                  placeholder="Detail the documented significance, inscriptions, and chronicle citations..."
                  className="w-full bg-obsidian-950 border border-stone-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-parchment-100 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl border border-stone-700 text-stone-300 hover:text-stone-100 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-xs font-bold uppercase tracking-wider shadow"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Modules Switcher */}
        <div className="flex items-center gap-2 border-b border-stone-800 pb-3 overflow-x-auto scrollbar-none text-xs">
          {[
            { id: 'sites', label: 'Archaeological Sites', count: sitesList.length, icon: Landmark },
            { id: 'kingdoms', label: 'Kingdoms & Realms', count: KINGDOMS.length, icon: Crown },
            { id: 'rulers', label: 'Monarchs & Figures', count: HISTORICAL_RULERS.length, icon: ShieldCheck },
            { id: 'periods', label: 'Historical Periods', count: HISTORICAL_PERIODS.length, icon: Calendar },
          ].map((mod) => {
            const Icon = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id as typeof activeModule)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gold-500 text-obsidian-950 shadow-md'
                    : 'bg-obsidian-900 border border-stone-800 text-stone-400 hover:text-parchment-100 hover:border-gold-500/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{mod.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-obsidian-950 text-gold-400' : 'bg-stone-800 text-stone-300'}`}>
                  {mod.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Data Table */}
        <div className="bg-obsidian-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-obsidian-950/80 border-b border-stone-800 text-gold-400 font-mono uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Name (EN / SI)</th>
                  <th className="py-3.5 px-6">Category / Realm</th>
                  <th className="py-3.5 px-6">Coordinates / Era</th>
                  <th className="py-3.5 px-6">Workflow Status</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80 text-stone-300">
                {activeModule === 'sites' && sitesList.map((site) => (
                  <tr key={site.id} className="hover:bg-obsidian-850/60 transition-colors">
                    <td className="py-4 px-6 font-medium">
                      <div className="font-serif text-parchment-100 text-sm">{site.name.en}</div>
                      <div className="text-[11px] text-stone-400">{site.name.si}</div>
                    </td>
                    <td className="py-4 px-6 capitalize font-mono text-[11px]">
                      {site.category.replace('_', ' ')}
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px] text-stone-400">
                      {site.coordinates[0]}° N, {site.coordinates[1]}° E
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Published
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <Link
                        href={`/sites/${site.slug}`}
                        className="text-gold-400 hover:underline font-semibold"
                      >
                        Preview
                      </Link>
                    </td>
                  </tr>
                ))}

                {activeModule === 'kingdoms' && KINGDOMS.map((k) => (
                  <tr key={k.id} className="hover:bg-obsidian-850/60 transition-colors">
                    <td className="py-4 px-6 font-medium">
                      <div className="font-serif text-parchment-100 text-sm">{k.name.en}</div>
                      <div className="text-[11px] text-stone-400">{k.name.si}</div>
                    </td>
                    <td className="py-4 px-6 capitalize font-mono text-[11px]">
                      {k.periodId}
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px] text-stone-400">
                      {k.dateDisplay.en}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Published
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/kingdoms/${k.slug}`}
                        className="text-gold-400 hover:underline font-semibold"
                      >
                        Preview
                      </Link>
                    </td>
                  </tr>
                ))}

                {activeModule === 'rulers' && HISTORICAL_RULERS.map((r) => (
                  <tr key={r.id} className="hover:bg-obsidian-850/60 transition-colors">
                    <td className="py-4 px-6 font-medium">
                      <div className="font-serif text-parchment-100 text-sm">{r.name.en}</div>
                      <div className="text-[11px] text-stone-400">{r.name.si}</div>
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px]">
                      {r.kingdomName.en}
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px] text-stone-400">
                      {r.reignPeriod.en}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Published
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/rulers/${r.slug}`}
                        className="text-gold-400 hover:underline font-semibold"
                      >
                        Preview
                      </Link>
                    </td>
                  </tr>
                ))}

                {activeModule === 'periods' && HISTORICAL_PERIODS.map((p) => (
                  <tr key={p.id} className="hover:bg-obsidian-850/60 transition-colors">
                    <td className="py-4 px-6 font-medium">
                      <div className="font-serif text-parchment-100 text-sm">{p.name.en}</div>
                      <div className="text-[11px] text-stone-400">{p.name.si}</div>
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px]">
                      <span className="w-2.5 h-2.5 rounded-full inline-block mr-1.5" style={{ backgroundColor: p.color }} />
                      {p.id}
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px] text-stone-400">
                      {p.dateDisplay.en}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Published
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        href={`/periods/${p.slug}`}
                        className="text-gold-400 hover:underline font-semibold"
                      >
                        Preview
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
