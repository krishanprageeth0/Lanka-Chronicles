'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Clock, User, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_STORIES } from '@/data/stories';

export default function StoryReaderPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const slug = params?.slug as string;

  const story = HISTORICAL_STORIES.find(s => s.slug === slug) || HISTORICAL_STORIES[0];

  return (
    <div className="min-h-screen pt-20 pb-24 bg-obsidian-950 text-parchment-100">
      
      {/* Article Hero */}
      <div className="relative h-96 sm:h-[480px] w-full overflow-hidden border-b border-gold-500/20">
        <Image
          src={story.coverImage}
          alt={story.title.en}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />

        <div className="absolute top-6 left-4 sm:left-8 z-10">
          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-stone-800 text-stone-300 hover:text-gold-300 text-xs backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Stories</span>
          </Link>
        </div>

        <div className="absolute bottom-10 left-4 sm:left-8 right-4 sm:right-8 max-w-4xl space-y-3">
          <div className="flex items-center gap-3 text-xs text-gold-400 font-mono">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {story.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {story.authorOrCurator}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {t(story.title)}
          </h1>
          <p className="text-base sm:text-lg text-gold-300/90 font-serif italic">
            {t(story.subtitle)}
          </p>
        </div>
      </div>

      {/* Editorial Content Column */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        
        {/* Lead Summary */}
        <p className="text-base sm:text-lg text-parchment-200 font-serif leading-relaxed italic border-l-2 border-gold-400 pl-4 py-1">
          {t(story.summary)}
        </p>

        {/* Sections */}
        {story.sections.map((section, idx) => (
          <div key={idx} className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gold-400">
              {t(section.heading)}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              {t(section.body)}
            </p>
          </div>
        ))}

        {/* Linked Map Locations */}
        {story.relatedSites.length > 0 && (
          <div className="p-5 rounded-2xl bg-obsidian-900 border border-gold-500/30 flex items-center justify-between gap-4 mt-8">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gold-400 font-mono font-bold block">
                Related Map Locations
              </span>
              <p className="text-xs text-stone-300">
                Explore the actual sites featured in this chronicle on the interactive map.
              </p>
            </div>
            <Link
              href="/explore"
              className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow flex-shrink-0"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open on Map</span>
            </Link>
          </div>
        )}

        {/* References */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-400 space-y-1">
          <span className="font-semibold text-stone-300 block">Research Sources & Archival Records:</span>
          <ul className="list-disc list-inside space-y-0.5">
            {story.sources.map((src, i) => (
              <li key={i}>{src}</li>
            ))}
          </ul>
        </div>

      </article>
    </div>
  );
}
