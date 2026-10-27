import React, { Suspense } from 'react';
import { Metadata } from 'next';
import SalalihiniInteractiveMap from '@/components/SalalihiniInteractiveMap';

export const metadata: Metadata = {
  title: 'Salalihini Sandeshaya Map | LANKA CHRONICLES',
  description: 'An interactive, 3D map-driven digital journey through the 15th-century flight of the Salalihini bird from Kotte to Kelaniya, featuring all 111 classical verses and authentic landmarks.',
};

export default function SalalihiniMapPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex flex-col items-center justify-center bg-obsidian-950 text-parchment-200">
          <div className="w-12 h-12 border-2 border-gold-400 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="font-serif text-lg tracking-widest text-gold-400">UNFOLDING HISTORICAL MAP...</p>
          <p className="text-xs text-parchment-400 mt-2">සැළලිහිණි සිතියම විවෘත වෙමින් පවතී...</p>
        </div>
      }
    >
      <SalalihiniInteractiveMap />
    </Suspense>
  );
}
