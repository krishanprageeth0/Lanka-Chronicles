'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Compass,
  Map,
  Clock,
  Sparkles,
  ArrowRight,
  Crown,
  Landmark,
  Droplets,
  Calendar,
  BookOpen,
  Feather,
  ChevronRight,
  Shield,
  Layers,
  Flame
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_PERIODS } from '@/data/periods';
import { HISTORICAL_SITES } from '@/data/sites';
import { HISTORICAL_EVENTS } from '@/data/events';
import { HISTORICAL_JOURNEYS } from '@/data/journeys';
import { HISTORICAL_STORIES } from '@/data/stories';
import AudioAmbience from '@/components/AudioAmbience';

export default function HomePage() {
  const { language, t } = useLanguage();
  const [selectedPreviewSite, setSelectedPreviewSite] = useState(HISTORICAL_SITES[1]); // Sigiriya by default

  // Deterministic "This Day in History" event selector
  const featuredEvent = HISTORICAL_EVENTS[3]; // Composition of Salalihini Sandeshaya
  const featuredJourney = HISTORICAL_JOURNEYS[0]; // Salalihini flight
  const featuredStory = HISTORICAL_STORIES[0];

  return (
    <div className="relative min-h-screen">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Atmospheric Layers */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sites/sigiriya.jpg"
            alt="Ancient Sri Lanka Historic Landscape - Sigiriya Citadel"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-40 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/80 via-transparent to-obsidian-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Audio Ambience & Historical Tag */}
          <div className="inline-flex items-center gap-3 bg-obsidian-900/90 border border-gold-500/40 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-2xl animate-fadeIn">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold font-mono">
              {language === 'si' ? 'අන්තර්ක්‍රියාකාරී ඓතිහාසික සිතියම' : 'Interactive Historical Digital Atlas'}
            </span>
            <div className="h-3 w-[1px] bg-stone-700 hidden sm:block" />
            <div className="hidden sm:block">
              <AudioAmbience compact />
            </div>
          </div>

          {/* Main Cinematic Title */}
          <div className="space-y-3">
            <h1 className="font-serif font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-parchment-50 leading-none">
              <span className="block">{language === 'si' ? 'කාලය හරහා' : 'TRAVEL THROUGH'}</span>
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">
                {language === 'si' ? 'සංචාරය කරන්න.' : 'TIME.'}
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed">
              {language === 'si'
                ? 'ශ්‍රී ලංකාවේ වසර 2,500කට අධික අසිරිමත් රාජධානි, සුවිශේෂී මිනිසුන්, විශ්මිත වාරි ශිෂ්ටාචාරය සහ ඓතිහාසික සන්ධිස්ථාන සිතියම ඔස්සේ ගවේෂණය කරන්න.'
                : 'Discover the kingdoms, people, sacred places, hydraulic engineering, and monumental events that shaped Sri Lanka across millennia.'}
            </p>
          </div>

          {/* Primary Action Call-to-Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/explore"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-serif font-bold text-sm tracking-wide shadow-2xl shadow-gold-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              <span>{language === 'si' ? 'ඓතිහාසික සිතියමට පිවිසෙන්න' : 'Enter the Historical Map'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/journeys/salalihini-sandeshaya-flight"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-obsidian-900/90 hover:bg-obsidian-850 border border-gold-500/50 text-gold-300 font-serif font-semibold text-sm backdrop-blur-xl transition-all flex items-center justify-center gap-2 hover:border-gold-400"
            >
              <Feather className="w-4 h-4 text-gold-400" />
              <span>{language === 'si' ? 'සැළලිහිණි 3D ගුවන් ගමන' : 'Salalihini 3D Flight Experience'}</span>
            </Link>
          </div>

          {/* Era Quick Jump Strip */}
          <div className="pt-8 border-t border-stone-800/80 max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-none text-xs text-stone-400">
            <span className="text-stone-500 font-mono uppercase text-[10px] tracking-wider flex-shrink-0">
              {language === 'si' ? 'යුගයන්:' : 'Key Epochs:'}
            </span>
            {['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Kotte', 'Kandy', 'Colonial Era'].map((era, i) => (
              <Link
                key={i}
                href="/timeline"
                className="hover:text-gold-400 transition-colors whitespace-nowrap bg-obsidian-900/40 px-3 py-1 rounded-full border border-stone-800/60"
              >
                {era}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL ESSAY: "AN ISLAND SHAPED BY CENTURIES" */}
      <section className="py-20 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-y border-gold-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
                <Crown className="w-4 h-4" />
                <span>{language === 'si' ? 'සම්භාව්‍ය ශිෂ්ටාචාරයේ තොටිල්ල' : 'Editorial Perspective'}</span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-parchment-50 leading-tight">
                {language === 'si' ? 'ශතවර්ෂ ගණනාවකින් හැඩගැසුණු දිවයින.' : 'An Island Shaped by Centuries.'}
              </h2>
              <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  {language === 'si'
                    ? 'ශ්‍රී ලංකාවේ ඉතිහාසය යනු පෙළපොතක සටහන් වූ දින වකවානු ලැයිස්තුවක් පමණක් නොවේ. එය සැබෑ කඳු මුදුන්, මහා වැව්, ගල් පියගැටපෙළ, ගඩොල් දාගැබ් සහ සදාතනික පූජා භූමි තුළ කාවැදී ඇති සජීවී ආඛ්‍යානයකි.'
                    : 'Sri Lankan history is not a static list of dates in a textbook. It is a continuous, living story etched into gravity-fed reservoir cascades, mountain rock fortresses, colossal brick stupas, and centuries-old messenger poems.'}
                </p>
                <p>
                  {language === 'si'
                    ? 'ලංකා ක්‍රොනිකල්ස් හරහා ඔබ කාල තරණයේ යෙදෙන්නේ සිතියමක පිහිටීම අනුවය. අනුරාධපුරයේ සිට සීගිරිය දක්වාත්, පොළොන්නරුවේ පරාක්‍රම සමුද්‍රයේ සිට කෝට්ටේ සැළලිහිණි ගුවන් මග සහ මහනුවර කඳුකර රාජධානිය දක්වාත් අසිරිමත් ගවේෂණයක නිරත වන්න.'
                    : 'Through Lanka Chronicles, you travel geographically through time. Watch boundaries expand and contract, trace the flight of the messenger starling from Kotte to Kelaniya, and inspect the archaeological evidence that anchors every historical claim.'}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6 text-xs text-stone-400">
                <div className="border-l-2 border-gold-400 pl-3">
                  <div className="font-bold text-lg text-gold-400 font-serif">2,500+</div>
                  <div>Years Recorded History</div>
                </div>
                <div className="border-l-2 border-gold-400 pl-3">
                  <div className="font-bold text-lg text-gold-400 font-serif">8</div>
                  <div>UNESCO World Heritage Sites</div>
                </div>
                <div className="border-l-2 border-gold-400 pl-3">
                  <div className="font-bold text-lg text-gold-400 font-serif">100%</div>
                  <div>Bilingual Sinhala & English</div>
                </div>
              </div>
            </div>

            {/* Editorial Showcase Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl">
                <Image
                  src="/images/sites/temple-of-the-tooth.jpg"
                  alt="Temple of the Tooth Relic Kandy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-md">
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-mono">
                    Living Heritage
                  </span>
                  <h4 className="text-base font-serif font-bold text-parchment-100">
                    {language === 'si' ? 'ශ්‍රී දළදා මාලිගාව සහ සෙංකඩගල උරුමය' : 'Sacred City of Senkadagala (Kandy)'}
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {language === 'si'
                      ? 'වසර දෙසියයකට අධික කාලයක් විදේශ ආක්‍රමණ හමුවේ ස්වෛරීත්වය සහ දන්ත ධාතූන් වහන්සේ ආරක්ෂා කළ කඳුකර අභයභූමිය.'
                      : 'The unconquered mountain kingdom that safeguarded the palladium of sovereignty for centuries.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SALALIHINI 3D FLIGHT SHOWCASE (Direct Reference Highlight) */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-obsidian-950 via-forest-900/30 to-obsidian-950 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-forest-900/40 border-2 border-gold-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Background Decorative Motif */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold">
                  <Feather className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
                  <span>{language === 'si' ? 'විශේෂාංග ත්‍රිමාණ සංචාරය' : 'Signature 3D Flight Experience'}</span>
                </div>

                <h3 className="font-serif font-black text-2xl sm:text-4xl text-parchment-50 leading-tight">
                  {language === 'si'
                    ? 'සැළලිහිණි සන්දේශය ඔස්සේ ත්‍රිමාණ ගුවන් ගමනක යෙදෙන්න'
                    : 'Fly the Starling’s Messenger Route in 3D: Salalihini Sandeshaya'}
                </h3>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {language === 'si'
                    ? '15 වන සියවසේ තොටගමුවේ ශ්‍රී රාහුල හිමියන් රචනා කළ විශිෂ්ට කාව්‍යය ඔස්සේ සැළලිහිණියකු සේ අහසින් පියාඹන්න. කෝට්ටේ රාජ මාලිගයෙන් නික්ම දියවන්නා දිය අගල්, කොන්තගංතොට සහ කැලණි නදී තෙර හරහා විභීෂණ දෙව් මැදුර දක්වා කැමරාව මෙහෙයවමින් සැබෑ ඓතිහාසික කවි හා විවරණ රසවිඳින්න.'
                    : 'Inspired by the 15th-century masterpiece of Venerable Totagamuwe Sri Rahula Thera, take flight as the messenger starling carrying King Parakramabahu VI’s prayer from the fortified citadel of Kotte to the riverside temple of Kelaniya. Experience 3D camera flight, terrain elevation, classical Sinhala stanzas, and ambient temple acoustics.'}
                </p>

                {/* Stanza Teaser */}
                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-gold-500/30 text-gold-200 font-serif text-xs sm:text-sm">
                  <div className="font-bold text-gold-300 mb-1">
                    “සැරදෙ සුලකළකුරු – මියුරු තෙපලෙන් රඳනා<br />
                    රජකුල රහසැ මැතිනිය – සියනිහි සැළලිහිණි සඳ”
                  </div>
                  <span className="block text-[11px] text-stone-400 not-italic mt-1 font-sans">
                    — සැළලිහිණි සන්දේශය (1 වන කවිය) • තොටගමුවේ ශ්‍රී රාහුල සංඝරාජ හිමි (ක්‍රි.ව. 1450)
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/map?v=1"
                    className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:shadow-gold-500/25"
                  >
                    <span>{language === 'si' ? 'ත්‍රිමාණ සිතියම් ගමන' : 'Launch 3D Flight Map'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/map/verses"
                    className="px-6 py-3.5 rounded-xl bg-obsidian-900/90 hover:bg-obsidian-850 border border-gold-500/50 hover:border-gold-400 text-gold-300 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-gold-400" />
                    <span>{language === 'si' ? 'සම්පූර්ණ කවි 111 බලන්න' : 'Explore All 111 Verses'}</span>
                  </Link>

                  <Link
                    href="/journeys"
                    className="px-5 py-3.5 rounded-xl bg-obsidian-900 border border-stone-700 hover:border-gold-500 text-stone-300 hover:text-parchment-100 text-xs font-semibold transition-all flex items-center gap-2"
                  >
                    <span>{language === 'si' ? 'සියලු ගමන්' : 'All Journeys'}</span>
                  </Link>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl">
                  <Image
                    src="/images/sites/kelaniya.jpg"
                    alt="Salalihini Sandeshaya destination - Kelaniya Raja Maha Vihara"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian-950/90 rounded-xl border border-gold-500/30 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-gold-400 font-bold block">6 Verified Waypoints</span>
                      <span className="text-stone-400 text-[10px]">Kotte Citadel → Kelaniya Vihara</span>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 font-mono text-[10px] px-2 py-0.5 rounded">
                      3D Tilt: 60°
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED DISCOVERY MAP PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
              <Map className="w-4 h-4" />
              <span>{language === 'si' ? 'සිතියම් පෙරදැක්ම' : 'Interactive Map Discovery'}</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-parchment-50 mt-1">
              {language === 'si' ? 'ඓතිහාසික ස්ථාන ගවේෂණය' : 'Explore Sri Lanka Through Places'}
            </h2>
          </div>

          <Link
            href="/explore"
            className="flex items-center gap-1.5 text-xs text-gold-400 font-semibold hover:text-gold-300 transition-colors self-start md:self-auto"
          >
            <span>{language === 'si' ? 'සම්පූර්ණ සිතියම විවෘත කරන්න' : 'Open Fullscreen GIS Map'}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Site Selector Tabs & Mini-Map Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List of Sites */}
          <div className="lg:col-span-5 space-y-2">
            {HISTORICAL_SITES.slice(0, 5).map((site) => {
              const isSelected = selectedPreviewSite.id === site.id;
              return (
                <button
                  key={site.id}
                  onClick={() => setSelectedPreviewSite(site)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-obsidian-900 border-gold-500 shadow-xl'
                      : 'bg-obsidian-950/60 border-stone-800/80 hover:border-gold-500/40 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif text-sm font-bold ${
                        isSelected ? 'bg-gold-500 text-obsidian-950' : 'bg-obsidian-800 text-gold-400'
                      }`}
                    >
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-serif font-bold ${isSelected ? 'text-parchment-50' : 'text-stone-300'}`}>
                        {t(site.name)}
                      </h4>
                      <span className="text-[11px] text-stone-400 capitalize">
                        {site.category.replace('_', ' ')} • {site.elevation}m Elev.
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-stone-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Site Spotlight Detail Card */}
          <div className="lg:col-span-7 bg-obsidian-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src={selectedPreviewSite.image}
                alt={selectedPreviewSite.name.en}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-gold-400 font-mono border border-gold-500/30">
                Lat: {selectedPreviewSite.coordinates[0]}° N, Lng: {selectedPreviewSite.coordinates[1]}° E
              </div>

              {selectedPreviewSite.threeDModelAvailable && (
                <div className="absolute top-4 right-4 bg-emerald-500/90 text-obsidian-950 px-2.5 py-1 rounded-md text-xs font-bold shadow-lg">
                  3D Model Available
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs text-gold-400 uppercase tracking-wider font-semibold font-mono">
                  {language === 'si' ? 'ඓතිහාසික සන්ධිස්ථානය' : 'Archaeological Monument'}
                </span>
                <h3 className="text-2xl font-serif font-bold text-parchment-50 mt-0.5">
                  {t(selectedPreviewSite.name)}
                </h3>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed font-light">
                {t(selectedPreviewSite.significance)}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                  {language === 'si' ? 'වාස්තු විද්‍යාත්මක විශේෂතා:' : 'Architectural Highlights:'}
                </span>
                <ul className="text-xs text-stone-300 space-y-1">
                  {selectedPreviewSite.architecturalHighlights.map((hl, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      <span>{t(hl)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-stone-800">
                <Link
                  href={`/sites/${selectedPreviewSite.slug}`}
                  className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>{language === 'si' ? 'සම්පූර්ණ විස්තරය' : 'View Full Site Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/explore?site=${selectedPreviewSite.id}`}
                  className="text-xs text-stone-400 hover:text-gold-400 transition-colors flex items-center gap-1"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? 'සිතියමෙන් බලන්න' : 'Locate on Map'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THIS DAY IN HISTORY */}
      <section className="py-16 bg-obsidian-900/60 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-obsidian-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-mono">
                    {language === 'si' ? 'අද දවසේ ඓතිහාසික සන්ධිස්ථානය' : 'This Era in Sri Lankan History'}
                  </span>
                  <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">
                    {t(featuredEvent.dateDisplay)}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-parchment-50">
                  {t(featuredEvent.title)}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-2xl font-light">
                  {t(featuredEvent.overview)}
                </p>
              </div>
            </div>

            <Link
              href={`/events/${featuredEvent.slug}`}
              className="px-5 py-3 rounded-xl bg-obsidian-900 border border-gold-500/40 hover:border-gold-400 text-gold-300 text-xs font-semibold transition-all whitespace-nowrap self-end md:self-auto flex items-center gap-1.5"
            >
              <span>{language === 'si' ? 'සිදුවීම අධ්‍යයනය කරන්න' : 'Inspect Event Record'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. EXPLORE BY HISTORICAL CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="text-xs uppercase tracking-widest text-gold-400 font-mono font-semibold">
            {language === 'si' ? 'ප්‍රවර්ග අනුව ගවේෂණය' : 'Structured Knowledge'}
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-parchment-50">
            {language === 'si' ? 'විෂය ක්ෂේත්‍ර අනුව ඉතිහාසය' : 'Explore by Category'}
          </h2>
          <p className="text-stone-400 text-sm font-light">
            {language === 'si'
              ? 'රාජධානි, පාලකයන්, වාරි ඉංජිනේරු විද්‍යාව, යුධ සටන් සහ සංස්කෘතික උරුමයන් ඔස්සේ පිවිසෙන්න.'
              : 'Enter deep historical archives categorized by monarchies, civil engineering, religion, and decisive milestones.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              href: '/kingdoms',
              titleEn: 'Kingdoms',
              titleSi: 'රාජධානි',
              descEn: 'From Anuradhapura to Senkadagala',
              descSi: 'අනුරාධපුරයේ සිට සෙංකඩගල දක්වා',
              icon: Crown,
              color: 'text-amber-400'
            },
            {
              href: '/rulers',
              titleEn: 'Rulers & Figures',
              titleSi: 'රජවරු සහ චරිත',
              descEn: 'Chronicles of monarchs & scholars',
              descSi: 'නිරිඳුන් හා විද්වතුන්ගේ චරිතාපදාන',
              icon: Shield,
              color: 'text-gold-400'
            },
            {
              href: '/sites',
              titleEn: 'Archaeological Sites',
              titleSi: 'පුරාවිද්‍යා ස්ථාන',
              descEn: 'Stupas, rock citadels & ruins',
              descSi: 'දාගැබ්, ගිරිදුර්ග සහ මාලිගා',
              icon: Landmark,
              color: 'text-emerald-400'
            },
            {
              href: '/journeys/hydraulic-cascades-trail',
              titleEn: 'Hydraulic Marvels',
              titleSi: 'වාරි තාක්ෂණය',
              descEn: 'Yoda Ela, Kalawewa & Bisokotuwa',
              descSi: 'යෝධ ඇළ, කලා වැව හා බිසෝකොටු',
              icon: Droplets,
              color: 'text-cyan-400'
            },
            {
              href: '/events',
              titleEn: 'Battles & Treaties',
              titleSi: 'සටන් සහ ගිවිසුම්',
              descEn: 'Mulleriyawa, Danture & 1815',
              descSi: 'මුල්ලේරියාව, දන්තුරේ හා උඩරට ගිවිසුම',
              icon: Flame,
              color: 'text-rose-400'
            },
            {
              href: '/journeys',
              titleEn: '3D Journey Flights',
              titleSi: 'ත්‍රිමාණ ගමන්',
              descEn: 'Salalihini, Tooth Relic & Citadels',
              descSi: 'සැළලිහිණි හා දළදා වහන්සේගේ මග',
              icon: Feather,
              color: 'text-yellow-400'
            },
            {
              href: '/stories',
              titleEn: 'Historical Stories',
              titleSi: 'ඓතිහාසික කතාන්දර',
              descEn: 'Mirror Wall graffiti & ancient scrolls',
              descSi: 'කුරුටු ගී හා පුස්කොළ ලේඛන',
              icon: BookOpen,
              color: 'text-purple-400'
            },
            {
              href: '/sources',
              titleEn: 'Sources & Citations',
              titleSi: 'මූලාශ්‍ර හා පර්යේෂණ',
              descEn: 'Mahavamsa, CCF & UNESCO records',
              descSi: 'මහාවංශය, මධ්‍යම සංස්කෘතික අරමුදල',
              icon: Layers,
              color: 'text-stone-400'
            }
          ].map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={i}
                href={cat.href}
                className="group p-5 rounded-2xl bg-obsidian-900 border border-stone-800 hover:border-gold-500/50 hover:bg-obsidian-850 transition-all flex flex-col justify-between space-y-4 shadow-lg hover:scale-102"
              >
                <div className={`w-10 h-10 rounded-xl bg-obsidian-950 flex items-center justify-center ${cat.color} border border-stone-800 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-parchment-100 text-base group-hover:text-gold-300 transition-colors">
                    {language === 'si' ? cat.titleSi : cat.titleEn}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">
                    {language === 'si' ? cat.descSi : cat.descEn}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 7. FEATURED HISTORICAL STORY */}
      <section className="py-20 bg-gradient-to-t from-obsidian-950 to-obsidian-900 border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-obsidian-950 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl">
              <Image
                src={featuredStory.coverImage}
                alt={featuredStory.title.en}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-obsidian-950/80 backdrop-blur-md px-3 py-1 rounded text-xs text-gold-400 font-mono">
                {featuredStory.readTime}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
                <BookOpen className="w-4 h-4" />
                <span>{language === 'si' ? 'විශේෂාංග ඓතිහාසික කතාව' : 'Curated Historical Story'}</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-parchment-50 leading-tight">
                {t(featuredStory.title)}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                {t(featuredStory.summary)}
              </p>
              <div className="text-xs text-stone-400">
                Curated by: <span className="text-stone-300 font-medium">{featuredStory.authorOrCurator}</span>
              </div>
              <div className="pt-2">
                <Link
                  href={`/stories/${featuredStory.slug}`}
                  className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-serif font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow"
                >
                  <span>{language === 'si' ? 'කතාව කියවන්න' : 'Read Full Chronicle'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
