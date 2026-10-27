'use client';
import { useEffect } from 'react';
export default function AdminSettingsPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
