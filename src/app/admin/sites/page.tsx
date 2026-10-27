'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminSitesPage() {
  useEffect(() => {
    window.location.replace('/admin');
  }, []);
  return null;
}
