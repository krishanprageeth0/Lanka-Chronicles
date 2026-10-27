'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function BookmarksRedirect() {
  useEffect(() => {
    window.location.replace('/dashboard');
  }, []);
  return null;
}
