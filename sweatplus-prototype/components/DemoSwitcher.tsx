import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Prototype-only helper: jump between the customer website and the back office.
export default function DemoSwitcher() {
  const { pathname } = useLocation();
  const inAdmin = pathname.startsWith('/admin');
  return (
    <Link
      to={inAdmin ? '/' : '/admin'}
      style={{
        position: 'fixed', right: 20, bottom: 20, zIndex: 50,
        height: 44, padding: '0 18px', borderRadius: 22,
        display: 'flex', alignItems: 'center',
        background: '#0F172A', color: '#FFFFFF',
        fontWeight: 700, fontSize: 14,
        boxShadow: '0 6px 20px rgba(15, 23, 42, 0.25)',
      }}
    >
      {inAdmin ? 'View customer site' : 'View back office'}
    </Link>
  );
}
