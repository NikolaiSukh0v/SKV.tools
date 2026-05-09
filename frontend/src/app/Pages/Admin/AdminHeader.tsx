import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed w-full top-0 z-20">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/admin" className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link to="/" className="hover:text-gray-300">View Site</Link></li>
          {/* Add more header links if needed */}
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;