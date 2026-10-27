import React from 'react';
import { Metadata } from 'next';
import SalalihiniVersesDirectory from '@/components/SalalihiniVersesDirectory';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Salalihini Sandeshaya 111 Classical Verses | සැළලිහිණි සන්දේශය සම්පූර්ණ කවි 111 | LANKA CHRONICLES',
  description: 'Read all 111 authentic classical verses of Salalihini Sandeshaya composed c. 1450 CE by Ven. Totagamuwe Sri Rahula Thera with authentic stanzas, Sinhala meaning, and English translation.',
};

export default function SalalihiniVersesPage() {
  return (
    <div className="min-h-screen bg-obsidian-950 flex flex-col pt-16 sm:pt-[68px]">
      <Navbar />
      <main className="flex-1">
        <SalalihiniVersesDirectory isModal={false} />
      </main>
      <Footer />
    </div>
  );
}
