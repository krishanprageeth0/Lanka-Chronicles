'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, BookOpen, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const pathname = usePathname();

  if (pathname === '/explore' || pathname === '/map') {
    return null;
  }

  return (
    <footer className="bg-obsidian-950 border-t border-gold-500/20 text-stone-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-400">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-parchment-100 text-base">
                LANKA CHRONICLES
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              {language === 'si'
                ? 'ශ්‍රී ලංකාවේ වසර 2,500කට අධික අසිරිමත් ඉතිහාසය, පුරාවිද්‍යාත්මක සාධක, වාරි ශිෂ්ටාචාරය සහ රාජධානි සිතියම්ගත කරමින් ඉදිරිපත් කරන ඩිජිටල් ඉතිහාස වේදිකාව.'
                : 'An immersive digital history atlas of Sri Lanka, exploring 2,500+ years of civilization through GIS overlays, 3D flights, and verified archaeological records.'}
            </p>
            <div className="text-[11px] text-stone-500">
              Primary Tagline: <span className="text-gold-400 italic">Discover Sri Lanka Through Time.</span>
            </div>
          </div>

          {/* Explorations */}
          <div className="space-y-2">
            <h4 className="font-serif font-semibold text-parchment-100 text-sm">
              {language === 'si' ? 'ගවේෂණ අංශ' : 'Historical Exploration'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/explore" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'අන්තර්ක්‍රියාකාරී සිතියම' : 'Interactive Historical Map'}
                </Link>
              </li>
              <li>
                <Link href="/journeys/salalihini-sandeshaya-flight" className="hover:text-gold-400 transition-colors flex items-center gap-1 text-gold-400">
                  <span>{language === 'si' ? 'සැළලිහිණි සන්දේශ ත්‍රිමාණ ගමන' : 'Salalihini 3D Flight Experience'}</span>
                  <span className="text-[9px] bg-gold-400/20 px-1 rounded uppercase font-bold">Featured</span>
                </Link>
              </li>
              <li>
                <Link href="/map/verses" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>{language === 'si' ? 'සැළලිහිණි සම්පූර්ණ කවි 111' : 'Salalihini 111 Classical Verses'}</span>
                  <span className="text-[9px] bg-gold-400/20 text-gold-300 px-1 rounded uppercase font-bold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'කාලරාමුව' : 'Chronological Timeline'}
                </Link>
              </li>
              <li>
                <Link href="/kingdoms" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'රාජධානි ගවේෂකය' : 'Kingdoms Directory'}
                </Link>
              </li>
              <li>
                <Link href="/sites" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'පුරාවිද්‍යා ස්ථාන' : 'Archaeological Sites'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Attribution */}
          <div className="space-y-2">
            <h4 className="font-serif font-semibold text-parchment-100 text-sm">
              {language === 'si' ? 'මූලාශ්‍ර සහ පර්යේෂණ' : 'Research & Standards'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/sources" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'මහාවංශය හා චූලවංශය' : 'Mahavamsa & Culavamsa'}
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'මධ්‍යම සංස්කෘතික අරමුදල' : 'Central Cultural Fund'}
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'පුරාවිද්‍යා දෙපාර්තමේන්තුව' : 'Department of Archaeology'}
                </Link>
              </li>
              <li>
                <Link href="/sources" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'යුනෙස්කෝ ලෝක උරුම' : 'UNESCO World Heritage Dossiers'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'අපගේ පරමාර්ථය' : 'Mission & Editorial Policy'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Portal & CMS */}
          <div className="space-y-2">
            <h4 className="font-serif font-semibold text-parchment-100 text-sm">
              {language === 'si' ? 'පද්ධති ප්‍රවේශය' : 'Portal & Management'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/admin" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>{language === 'si' ? 'පරිපාලන CMS පුවරුව' : 'Admin CMS Portal'}</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'සුරකින ලද ගවේෂණ' : 'User Saved Explorations'}
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-gold-400 transition-colors">
                  {language === 'si' ? 'සර්ව සම්පූර්ණ සෙවුම' : 'Global Historical Search'}
                </Link>
              </li>
              <li>
                <span className="text-stone-500 text-[11px] block mt-3">
                  Map styles powered by MapLibre GL & CARTO / ESRI.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} LANKA CHRONICLES. Dedicated to preserving and sharing the heritage of Sri Lanka.
            </p>
            <span className="hidden sm:inline text-stone-600">•</span>
            <p className="text-gold-300 font-medium">
              {language === 'si' ? 'නිර්මාණය කළේ: ' : 'Crafted by '}<span className="text-gold-400 font-bold tracking-wide">Knexa System (Krishan Prageeth)</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-500">
            <span className="text-gold-400/90">Sinhala & English Bilingual Edition</span>
            <span>•</span>
            <span>Historical GIS & 3D Heritage Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
