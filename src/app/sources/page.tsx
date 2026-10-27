'use client';

import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_SOURCES } from '@/data/sources';

export default function SourcesPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'පුරාවිද්‍යා හා පර්යේෂණ මූලාශ්‍ර' : 'Historical Sources & Attribution'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'විශ්වාසනීය ඓතිහාසික පදනම' : 'The Research Corpus'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'ලංකා ක්‍රොනිකල්ස් හි ඉදිරිපත් කෙරෙන සෑම තොරතුරක්ම, සිතියම් සීමාවක්ම සහ දින වකවානුවක්ම ශාස්ත්‍රීය හා පුරාවිද්‍යාත්මක මූලාශ්‍ර මගින් තහවුරු කර ඇත.'
              : 'Every claim, historical boundary, date range, and translation in Lanka Chronicles is grounded in verified epigraphical, chronicle, and peer-reviewed archaeological publications.'}
          </p>
        </div>

        {/* Academic Standard Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-obsidian-900 border border-stone-800 space-y-2">
            <ShieldCheck className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif font-bold text-parchment-100 text-sm">Primary Chronicles</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Critical Pali Text Society translations of the Mahavamsa, Culavamsa, and medieval messenger poetry (Sandeshaya).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-900 border border-stone-800 space-y-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif font-bold text-parchment-100 text-sm">Epigraphia Zeylanica</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Lithic Brahmi inscriptions, rock decrees, and royal copper plate grants deciphered by Paranavitana and Wickremasinghe.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-900 border border-stone-800 space-y-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <h3 className="font-serif font-bold text-parchment-100 text-sm">UNESCO & CCF Dossiers</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Field excavation monographs and conservation surveys conducted under the UNESCO-Sri Lanka Cultural Triangle project.
            </p>
          </div>
        </div>

        {/* Sources List */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-serif font-bold text-parchment-50">
            {language === 'si' ? 'ප්‍රධාන පර්යේෂණ සහ ලේඛනාගාර ලැයිස්තුව' : 'Principal References & Archives'}
          </h2>

          <div className="space-y-4">
            {HISTORICAL_SOURCES.map((source) => (
              <div
                key={source.id}
                className="p-6 rounded-2xl bg-obsidian-900 border border-stone-800 hover:border-gold-500/40 transition-colors space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-lg font-serif font-bold text-gold-300">
                    {source.title} {source.nativeTitle ? `(${source.nativeTitle})` : ''}
                  </h3>
                  <span className="text-[11px] font-mono text-stone-400 uppercase bg-obsidian-950 px-2.5 py-1 rounded border border-stone-800 self-start sm:self-auto">
                    {source.sourceType.replace('_', ' ')}
                  </span>
                </div>

                <div className="text-xs text-stone-400 font-mono">
                  Author / Tradition: <span className="text-stone-300">{source.authorOrTradition}</span> • Era: <span className="text-stone-300">{source.periodOrEra}</span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                  {source.description}
                </p>

                <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-800/80">
                  Publisher / Repository: {source.institutionOrPublisher}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
