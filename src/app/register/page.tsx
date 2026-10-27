'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Compass, User, Lock, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function RegisterPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-obsidian-950">
      <div className="w-full max-w-md bg-obsidian-900 border border-gold-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-parchment-50">
            {language === 'si' ? 'නව ගිණුමක් අරඹන්න' : 'Create Explorer Account'}
          </h1>
          <p className="text-xs text-stone-400">
            Join the digital exploration of Sri Lankan heritage
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-xs text-stone-300 font-semibold block mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="absolute left-3 w-4 h-4 text-stone-500" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Heritage Researcher"
                className="w-full bg-obsidian-950 border border-stone-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-parchment-100 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-stone-300 font-semibold block mb-1">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 w-4 h-4 text-stone-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="explorer@lankachronicles.lk"
                className="w-full bg-obsidian-950 border border-stone-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-parchment-100 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-stone-300 font-semibold block mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 w-4 h-4 text-stone-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-obsidian-950 border border-stone-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-parchment-100 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-stone-400">
          Already have an account?{' '}
          <Link href="/login" className="text-gold-400 hover:underline font-semibold">
            Sign in
          </Link>
        </div>

      </div>
    </div>
  );
}
