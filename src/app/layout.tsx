import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lanka Chronicles — Immersive Digital History Explorer of Sri Lanka',
  description: 'Discover Sri Lanka through time. An interactive, map-driven historical atlas exploring 2,500+ years of kingdoms, hydraulic engineering, archaeological wonders, and 3D journeys.',
  keywords: ['Sri Lanka History', 'Lanka Chronicles', 'Salalihini Sandeshaya', 'Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Historical Map Sri Lanka', 'Mahavamsa'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-obsidian-950 text-parchment-100 antialiased selection:bg-gold-500/30 selection:text-gold-300">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
