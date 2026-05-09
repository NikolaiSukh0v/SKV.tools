import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminHeader />
      <AdminSidebar />
      <main className="flex-1 p-6 mt-16 ml-64"> {/* Adjust padding and margin to account for header and sidebar */}
        <Outlet /> {/* This is where the routed content will be rendered */}
      </main>
    </div>
  );
};

export default AdminLayout;