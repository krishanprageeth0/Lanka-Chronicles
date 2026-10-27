'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function JourneysRedirect() {
  useEffect(() => {
    window.location.replace('/journeys');
  }, []);
  return null;
}
