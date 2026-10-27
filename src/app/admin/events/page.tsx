'use client';
import { useEffect } from 'react';
export default function AdminEventsPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
