'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, Clock, Feather } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_STORIES } from '@/data/stories';

export default function StoriesPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'ඓතිහාසික කතාන්දර සංග්‍රහය' : 'Editorial Historical Stories'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'අතීතයේ කතා සහ රහස්' : 'Chronicles & Legends'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'සැළලිහිණි සන්දේශයේ කාව්‍යමය පියාසැරිය, සීගිරි කැඩපත් පවුරේ කුරුටු ගී සහ නොකියැවුණු ඓතිහාසික කතාන්දර ගැඹුරින් කියවන්න.'
              : 'Immerse yourself in carefully researched editorial features exploring medieval literature, ancient engineering feats, and voices carved on stone.'}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HISTORICAL_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-obsidian-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-gold-400 transition-all hover:scale-101 group"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-gold-400 font-mono border border-gold-500/30">
                    {story.readTime}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-parchment-50 group-hover:text-gold-300 transition-colors leading-snug">
                    {t(story.title)}
                  </h3>
                  <p className="text-xs text-gold-400 italic font-serif">
                    {t(story.subtitle)}
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {t(story.summary)}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                <span className="text-xs text-stone-400">
                  By {story.authorOrCurator}
                </span>

                <Link
                  href={`/stories/${story.slug}`}
                  className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>{language === 'si' ? 'කියවන්න' : 'Read Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
