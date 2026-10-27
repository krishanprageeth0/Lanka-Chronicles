'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { HISTORICAL_JOURNEYS } from '@/data/journeys';
import JourneyFlightPlayer from '@/components/JourneyFlightPlayer';
import SalalihiniInteractiveMap from '@/components/SalalihiniInteractiveMap';

export default function JourneyExperiencePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  if (slug === 'salalihini-sandeshaya-flight') {
    return <SalalihiniInteractiveMap />;
  }

  const journey = HISTORICAL_JOURNEYS.find(j => j.slug === slug) || HISTORICAL_JOURNEYS[0];

  return (
    <div className="relative w-full h-screen bg-obsidian-950 overflow-hidden">
      <JourneyFlightPlayer
        journey={journey}
        onExit={() => router.push('/journeys')}
      />
    </div>
  );
}
