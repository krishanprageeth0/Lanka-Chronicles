'use client';
import { useEffect } from 'react';
export default function AdminKingdomsPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
