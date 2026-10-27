'use client';
import { useEffect } from 'react';
export default function AdminUsersPage() {
  useEffect(() => { window.location.replace('/admin'); }, []);
  return null;
}
