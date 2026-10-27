'use client';
import { useEffect } from 'react';
export default function AdminStoriesPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
