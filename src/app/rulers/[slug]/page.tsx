'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Shield, Crown, Landmark, BookOpen, Layers, CheckCircle2, Users } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_RULERS } from '@/data/rulers';

export default function RulerProfilePage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const slug = params?.slug as string;

  const ruler = HISTORICAL_RULERS.find(r => r.slug === slug) || HISTORICAL_RULERS[0];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-obsidian-950 text-parchment-100">
      
      {/* Top Banner */}
      <div className="relative h-80 sm:h-96 w-full overflow-hidden border-b border-gold-500/20">
        <Image
          src={ruler.image}
          alt={ruler.name.en}
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        
        <div className="absolute top-6 left-4 sm:left-8 z-10">
          <Link
            href="/rulers"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-stone-800 text-stone-300 hover:text-gold-300 text-xs backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Rulers Directory</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8 max-w-5xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-bold uppercase tracking-wider">
            <Crown className="w-4 h-4" />
            <span>{t(ruler.kingdomName)} • {t(ruler.reignPeriod)}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {t(ruler.name)}
          </h1>
          {ruler.epithet && (
            <p className="text-sm sm:text-base text-gold-300/90 italic font-serif">
              "{t(ruler.epithet)}"
            </p>
          )}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-gold-400">
                {language === 'si' ? 'චරිතාපදාන සාරාංශය' : 'Documented Biography'}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {t(ruler.biography)}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'ඓතිහාසික ජයග්‍රහණ සහ මෙහෙවර' : 'Historical Achievements & Milestones'}
              </h3>
              <div className="space-y-2.5">
                {ruler.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-obsidian-900 border border-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                      {t(ach)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relationship Connections */}
            {ruler.relatedFigures.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-stone-800">
                <h3 className="text-lg font-serif font-bold text-gold-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{language === 'si' ? 'රාජවංශික සබඳතා' : 'Dynastic & Mentorship Relations'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ruler.relatedFigures.map((rel, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-obsidian-900 border border-stone-800 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-parchment-100">{t(rel.name)}</span>
                      <span className="text-gold-400 font-mono">{t(rel.relation)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-obsidian-900 border border-gold-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif font-bold text-base text-parchment-100 border-b border-stone-800 pb-2">
                Monarch Dossier
              </h3>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Reign Chronology:
                </span>
                <span className="text-xs font-semibold text-gold-300">
                  {t(ruler.reignPeriod)}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Chronicle Precision:
                </span>
                <span className="text-xs text-stone-300 capitalize">
                  {ruler.datePrecision} dating
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Associated Monuments:
                </span>
                <ul className="text-xs text-stone-300 mt-1 space-y-1">
                  {ruler.associatedMonuments.map((m, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400">
                <span className="font-semibold block text-stone-300">Attribution:</span>
                <span>{ruler.imageAttribution}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
