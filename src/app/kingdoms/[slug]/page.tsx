'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Crown, MapPin, Landmark, Droplets, BookOpen, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { KINGDOMS } from '@/data/kingdoms';

export default function KingdomDetailPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const slug = params?.slug as string;

  const kingdom = KINGDOMS.find(k => k.slug === slug) || KINGDOMS[0];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-obsidian-950 text-parchment-100">
      
      {/* Hero Header */}
      <div className="relative h-96 sm:h-[450px] w-full overflow-hidden border-b border-gold-500/20">
        <Image
          src={kingdom.image}
          alt={kingdom.name.en}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        
        <div className="absolute top-6 left-4 sm:left-8 z-10">
          <Link
            href="/kingdoms"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-stone-800 text-stone-300 hover:text-gold-300 text-xs backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Kingdoms Directory</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8 max-w-5xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-bold uppercase tracking-wider">
            <Crown className="w-4 h-4" />
            <span>{t(kingdom.periodName)} • {t(kingdom.dateDisplay)}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {t(kingdom.name)}
          </h1>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Overview & Geography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-5">
            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-gold-400">
                {language === 'si' ? 'ඓතිහාසික පසුබිම' : 'Historical Overview'}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {t(kingdom.overview)}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'භූගෝලීය පිහිටීම සහ සීමාවන්' : 'Geography & Territorial Reach'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                {t(kingdom.geography)}
              </p>
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-xs text-stone-400 italic">
                {t(kingdom.boundariesNote)}
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'පරිහානිය හෝ විතැන්වීම' : 'Transition & Succession'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                {t(kingdom.declineOrTransition)}
              </p>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-obsidian-900 border border-gold-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif font-bold text-base text-parchment-100 border-b border-stone-800 pb-2">
                Realm Profile
              </h3>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Capitals / Centers:
                </span>
                <span className="text-xs font-semibold text-gold-300">
                  {kingdom.capitals.map(c => t(c)).join(', ')}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Major Monuments:
                </span>
                <ul className="text-xs text-stone-300 mt-1 space-y-1">
                  {kingdom.majorMonuments.map((m, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Hydraulic Engineering:
                </span>
                <ul className="text-xs text-stone-300 mt-1 space-y-1">
                  {kingdom.hydraulicWorks.map((hw, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{hw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-800">
                <Link
                  href={`/explore?period=${kingdom.periodId}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? 'සිතියමෙන් ගවේෂණය' : 'Explore on Map'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Monarchs Section */}
        <div className="space-y-6 pt-6 border-t border-stone-800">
          <h2 className="text-2xl font-serif font-bold text-parchment-50">
            {language === 'si' ? 'ප්‍රමුඛ රජවරුන් සහ පාලකයන්' : 'Prominent Monarchs of this Realm'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {kingdom.prominentRulers.map((r, i) => (
              <div key={i} className="p-4 rounded-xl bg-obsidian-900 border border-stone-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-parchment-100 text-sm">{t(r.name)}</h4>
                  <span className="text-xs text-stone-400 font-mono">{r.reign}</span>
                </div>
                {r.slug && (
                  <Link
                    href={`/rulers/${r.slug}`}
                    className="p-2 text-stone-400 hover:text-gold-400 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
