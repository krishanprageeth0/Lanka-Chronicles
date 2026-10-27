'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Landmark, MapPin, Sparkles, Split, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_SITES } from '@/data/sites';
import Monument3DViewer from '@/components/Monument3DViewer';
import PastPresentSlider from '@/components/PastPresentSlider';

export default function SiteDetailPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const slug = params?.slug as string;

  const site = HISTORICAL_SITES.find(s => s.slug === slug) || HISTORICAL_SITES[0];
  const [activeMediaTab, setActiveMediaTab] = useState<'3d' | 'comparison' | 'gallery'>('3d');

  return (
    <div className="min-h-screen pt-20 pb-20 bg-obsidian-950 text-parchment-100">
      
      {/* Top Banner */}
      <div className="relative h-80 sm:h-[420px] w-full overflow-hidden border-b border-gold-500/20">
        <Image
          src={site.image}
          alt={site.name.en}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        
        <div className="absolute top-6 left-4 sm:left-8 z-10">
          <Link
            href="/sites"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-stone-800 text-stone-300 hover:text-gold-300 text-xs backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sites Directory</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8 max-w-5xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-bold uppercase tracking-wider">
            <Landmark className="w-4 h-4" />
            <span>{site.category.replace('_', ' ')} • Lat: {site.coordinates[0]}° N, Lng: {site.coordinates[1]}° E</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {t(site.name)}
          </h1>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Interactive Media Showcase: 3D or Past/Present */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              {site.threeDModelAvailable && (
                <button
                  onClick={() => setActiveMediaTab('3d')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeMediaTab === '3d'
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-lg'
                      : 'bg-obsidian-900 border border-stone-800 text-stone-300 hover:border-gold-500/50'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? 'ත්‍රිමාණ ගෘහ නිර්මාණය' : 'Interactive 3D Model'}</span>
                </button>
              )}

              {site.pastImage && (
                <button
                  onClick={() => setActiveMediaTab('comparison')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    activeMediaTab === 'comparison'
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-lg'
                      : 'bg-obsidian-900 border border-stone-800 text-stone-300 hover:border-gold-500/50'
                  }`}
                >
                  <Split className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? 'අතීතය සහ වර්තමානය' : 'Past & Present Comparison'}</span>
                </button>
              )}
            </div>

            <Link
              href={`/explore?site=${site.id}`}
              className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1 font-mono"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Locate on Map</span>
            </Link>
          </div>

          {activeMediaTab === '3d' && (
            <Monument3DViewer
              modelType={site.threeDType || 'stupa'}
              monumentTitle={t(site.name)}
            />
          )}

          {activeMediaTab === 'comparison' && site.pastImage && (
            <PastPresentSlider
              pastImage={site.pastImage}
              presentImage={site.image}
              pastDate={site.pastImageDate}
              pastCredit={site.pastImageCredit}
              presentCredit={site.presentImageCredit}
              title={t(site.name)}
            />
          )}
        </div>

        {/* Narrative & Archaeological Findings */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-gold-400">
                {language === 'si' ? 'ඓතිහාසික වැදගත්කම' : 'Historical Significance'}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {t(site.significance)}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'පුරාවිද්‍යා විස්තරය' : 'Archaeological Context & Description'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                {t(site.description)}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'වාස්තු විද්‍යාත්මක විශේෂතා' : 'Key Architectural Highlights'}
              </h3>
              <div className="space-y-2">
                {site.architecturalHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">{t(hl)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-emerald-400">
                {language === 'si' ? 'සංරක්ෂණ තත්ත්වය' : 'Conservation & Protective Status'}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                {t(site.conservationStatus)}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-obsidian-900 border border-gold-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif font-bold text-base text-parchment-100 border-b border-stone-800 pb-2">
                Site Specifications
              </h3>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Coordinates:
                </span>
                <span className="text-xs font-mono font-semibold text-gold-300">
                  {site.coordinates[0]}° N, {site.coordinates[1]}° E
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Elevation above sea level:
                </span>
                <span className="text-xs text-stone-300 font-mono">
                  {site.elevation} meters
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Archaeological Evidence:
                </span>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed font-light">
                  {t(site.archaeologicalEvidence)}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800">
                <Link
                  href={`/explore?site=${site.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? 'සිතියමෙන් ගවේෂණය' : 'Explore on Map'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
