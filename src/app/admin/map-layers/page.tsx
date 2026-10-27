'use client';
import { useEffect } from 'react';
export default function AdminMapLayersPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
