import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import MembershipPage from './pages/MembershipPage';
import AccountPage from './pages/AccountPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminBookingsPage from './pages/AdminBookingsPage';
import AdminMembersPage from './pages/AdminMembersPage';
import AdminLoyaltyPage from './pages/AdminLoyaltyPage';
import AdminPricingPage from './pages/AdminPricingPage';
import AdminStaffPage from './pages/AdminStaffPage';
import DemoSwitcher from './components/DemoSwitcher';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Customer website */}
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/account" element={<AccountPage />} />
        {/* Back office */}
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/bookings" element={<AdminBookingsPage />} />
        <Route path="/admin/members" element={<AdminMembersPage />} />
        <Route path="/admin/loyalty" element={<AdminLoyaltyPage />} />
        <Route path="/admin/pricing" element={<AdminPricingPage />} />
        <Route path="/admin/staff" element={<AdminStaffPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <DemoSwitcher />
    </HashRouter>
  );
}
