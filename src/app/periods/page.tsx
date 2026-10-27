'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function PeriodsIndexPage() {
  useEffect(() => {
    window.location.replace('/timeline');
  }, []);

  return null;
}
