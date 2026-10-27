'use client';
import { useEffect } from 'react';
export default function AdminSourcesPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
