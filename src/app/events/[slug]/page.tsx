'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, BookOpen, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_EVENTS } from '@/data/events';

export default function EventDetailPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const slug = params?.slug as string;

  const event = HISTORICAL_EVENTS.find(e => e.slug === slug) || HISTORICAL_EVENTS[0];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-900 border border-stone-800 text-stone-300 hover:text-gold-300 text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Events Chronology</span>
        </Link>

        <div className="bg-obsidian-900 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-gold-500 text-obsidian-950 px-3 py-1 rounded font-bold font-mono">
              {t(event.dateDisplay)}
            </span>
            <span className="text-xs text-stone-400 capitalize font-mono">
              Category: {event.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black text-parchment-50 leading-tight">
            {t(event.title)}
          </h1>

          <div className="flex items-center gap-2 text-xs text-gold-400 font-mono">
            <MapPin className="w-4 h-4" />
            <span>Location: {t(event.location)}</span>
          </div>

          <div className="space-y-4 pt-4 border-t border-stone-800 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            <p>{t(event.overview)}</p>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-gold-500/30 space-y-2">
            <h3 className="text-xs uppercase tracking-wider text-gold-400 font-bold font-mono">
              Historical Consequences & Legacy:
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              {t(event.consequences)}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              <span className="font-semibold text-stone-300 block">Supporting Sources:</span>
              <span>{event.sources.join('; ')}</span>
            </div>

            {event.coordinates && (
              <Link
                href={`/explore?event=${event.id}`}
                className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 self-start sm:self-auto shadow"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Locate on Map</span>
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
