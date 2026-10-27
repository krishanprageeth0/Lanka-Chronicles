'use client';
import { useEffect } from 'react';
export default function AdminRulersPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
