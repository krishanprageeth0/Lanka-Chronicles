'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Map, Clock, Crown, Landmark, BookOpen, Search, Menu, X, Globe, Sparkles, Feather } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import AiHistoryModal from './AiHistoryModal';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/map?v=1', labelEn: 'Salalihini Map', labelSi: 'සැළලිහිණි සිතියම', icon: Sparkles, badge: 'HOT' },
    { href: '/map/verses', labelEn: '111 Verses', labelSi: 'සැළලිහිණි කවි 111', icon: BookOpen, badge: 'NEW' },
    { href: '/explore', labelEn: 'Map Explorer', labelSi: 'සිතියම', icon: Map },
    { href: '/journeys', labelEn: '3D Journeys', labelSi: 'ත්‍රිමාණ ගමන්', icon: Feather, badge: '3D' },
    { href: '/timeline', labelEn: 'Timeline', labelSi: 'කාලරාමුව', icon: Clock },
    { href: '/kingdoms', labelEn: 'Kingdoms', labelSi: 'රාජධානි', icon: Crown },
    { href: '/sites', labelEn: 'Sites', labelSi: 'පුරාවිද්‍යා ස්ථාන', icon: Landmark },
    { href: '/rulers', labelEn: 'Rulers', labelSi: 'රජවරු', icon: Crown },
    { href: '/events', labelEn: 'Events', labelSi: 'සිදුවීම්', icon: Clock },
    { href: '/stories', labelEn: 'Stories', labelSi: 'කතාන්දර', icon: BookOpen },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || pathname !== '/' || mobileMenuOpen
            ? 'bg-obsidian-950/98 border-b border-gold-500/20 backdrop-blur-xl shadow-2xl'
            : 'bg-gradient-to-b from-obsidian-950/90 to-transparent'
        }`}
      >
        <div className="h-16 sm:h-[68px] flex items-center justify-between max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-amber-700 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform border border-gold-300 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-obsidian-950 animate-pulse-subtle" />
            </div>
            <div>
              <span className="font-serif font-black tracking-wider text-sm sm:text-base lg:text-lg bg-gradient-to-r from-parchment-50 via-gold-300 to-parchment-200 bg-clip-text text-transparent block leading-tight">
                LANKA CHRONICLES
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-gold-400 uppercase font-sans font-medium hidden xs:block">
                {language === 'si' ? 'කාලය හරහා ලංකා ගවේෂණය' : 'Discover Sri Lanka Through Time'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 bg-obsidian-900/60 border border-stone-800/80 px-2 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md'
                      : 'text-stone-300 hover:text-gold-300 hover:bg-obsidian-800/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? item.labelSi : item.labelEn}</span>
                  {item.badge && (
                    <span className="text-[9px] bg-gold-400/20 text-gold-300 px-1 rounded uppercase font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons: AI History Assistant, Search, Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* AI Lanka History Guide Button */}
            <button
              onClick={() => setAiModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-gradient-to-r from-gold-600/30 via-gold-500/20 to-amber-600/30 border border-gold-400/50 text-gold-300 text-xs font-medium hover:border-gold-300 transition-all shadow-lg hover:scale-105"
              title="Open Lanka History AI Guide"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow shrink-0" />
              <span className="hidden md:inline">{language === 'si' ? 'ඉතිහාස සහකරු' : 'AI Guide'}</span>
            </button>

            {/* Global Search */}
            <Link
              href="/search"
              className="p-1.5 sm:p-2 text-stone-300 hover:text-gold-400 hover:bg-obsidian-900/80 border border-stone-800 rounded-full transition-colors"
              title="Search History"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-obsidian-900/80 hover:bg-obsidian-850 border border-gold-500/30 text-xs font-semibold text-gold-400 transition-all shadow-md"
              title="Switch Language / භාෂාව මාරු කරන්න"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === 'en' ? 'සිංහල' : 'English'}</span>
              <span className="sm:hidden">{language === 'en' ? 'SI' : 'EN'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-gold-400 xl:hidden rounded-lg hover:bg-obsidian-900 min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-obsidian-950/98 border-t border-gold-500/20 px-4 sm:px-6 py-5 space-y-4 backdrop-blur-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-2xl animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 p-3 rounded-xl text-xs font-medium border transition-all ${
                      isActive
                        ? 'bg-gold-500 text-obsidian-950 font-bold border-gold-400 shadow-md'
                        : 'bg-obsidian-900/70 text-stone-300 border-stone-800 hover:border-gold-500/40 active:scale-95'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="truncate">{language === 'si' ? item.labelSi : item.labelEn}</span>
                    {item.badge && (
                      <span className="text-[8px] px-1 py-0.2 rounded bg-gold-400/20 text-gold-300 font-bold uppercase ml-auto">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-1">
                {language === 'si' ? 'අප ගැන' : 'About Project'}
              </Link>
              <Link href="/sources" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-1">
                {language === 'si' ? 'මූලාශ්‍ර' : 'Sources'}
              </Link>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-400 py-1">
                {language === 'si' ? 'පරිපාලන පුවරුව' : 'CMS Admin'}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* AI Assistant Modal */}
      <AiHistoryModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </>
  );
}
