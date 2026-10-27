'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, Heart, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Project Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            Discover Sri Lanka Through Time
          </h1>
          <p className="text-gold-300/90 font-serif italic text-base sm:text-lg">
            “Every Place Has a Past. Every Story Shapes a Nation.”
          </p>
        </div>

        <div className="bg-obsidian-900 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
          <p>
            {language === 'si'
              ? 'ලංකා ක්‍රොනිකල්ස් (Lanka Chronicles) හි ප්‍රමුඛ දැක්ම වන්නේ ශ්‍රී ලංකාවේ වසර දහස් ගණනක ඓතිහාසික, සංස්කෘතික සහ වාරි ශිෂ්ටාචාරය, සාමාන්‍ය වෙබ් අඩවියකට හෝ පෙළපොතකට සීමා නොවී, නවීන භූගෝලීය තොරතුරු පද්ධති (GIS) සහ ත්‍රිමාණ සිතියම් තාක්ෂණය මගින් ලොව හමුවේ දිගහැරීමයි.'
              : 'Lanka Chronicles was conceived to answer a central question: What if you could travel through Sri Lanka’s history using an interactive map? Instead of reading static textbook paragraphs, users can observe political boundaries shift, follow the flight of classical poetry, inspect colossal stupa architectures in 3D, and explore the gravity-fed canal cascades that powered ancient agriculture.'}
          </p>

          <p>
            {language === 'si'
              ? 'අපගේ අරමුණ වන්නේ ශ්‍රී ලාංකික සිසුන්, ගුරුවරුන්, පුරාවිද්‍යා ලෝලීන්, විදෙස්ගත ප්‍රජාව සහ ලෝක ප්‍රජාව වෙත අසිරිමත් ලක් ඉතිහාසය නිවැරදි මූලාශ්‍ර සහ උසස් ඩිජිටල් අත්දැකීමක් ලෙස පිරිනැමීමයි.'
              : 'Our mission is to serve Sri Lankan students, teachers, heritage enthusiasts, and international travelers with a verified, cinematic, and responsive platform that treats history with scientific rigour and artistic reverence.'}
          </p>

          <div className="p-4 rounded-2xl bg-obsidian-950 border border-gold-500/20 space-y-2">
            <h3 className="font-serif font-bold text-gold-400 text-base">Key Design Tenets</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-300">
              <li>• <strong>No Fabricated Borders:</strong> Kingdom boundaries are represented with dated approximations and visible uncertainty indicators.</li>
              <li>• <strong>Authentic Literature:</strong> Incorporates genuine Sinhala sandeshaya verses and Mahavamsa citations.</li>
              <li>• <strong>Bilingual from the Core:</strong> Seamless native support for both Sinhala (සිංහල) and English.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div>
              <span className="text-gold-400 font-bold block">
                {language === 'si' ? 'පද්ධති නිර්මාණය සහ තාක්ෂණික සංවර්ධනය' : 'System Architecture & Engineering'}
              </span>
              <span className="text-stone-300 font-medium">Knexa System (Krishan Prageeth)</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-400/30 font-mono text-[11px]">
              GIS & 3D Interactive Heritage Engine
            </span>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/explore"
            className="px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-serif font-bold text-sm tracking-wide transition-colors inline-flex items-center gap-2 shadow-xl"
          >
            <span>Start Exploring Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
