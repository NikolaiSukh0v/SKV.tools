import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// Import custom admin components
import AdminLayout from './Admin/AdminLayout';
import CreateToolService from './Admin/CreateToolService';
import EditToolService from './Admin/EditToolService'; // New import
import CreateBlogPost from './Admin/CreateBlogPost';
import EditBlogPost from './Admin/EditBlogPost'; // New import
import EditCV from './Admin/EditCV';
import CreateProject from './Admin/CreateProject'; // New import
import EditPersonalPortfolio from './Admin/EditPersonalPortfolio'; // Renamed import

// Placeholder for the Admin Dashboard (default route for /admin)
const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p>Welcome to the custom admin panel!</p>
    </div>
  );
};

const AdminPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Default route for /admin */}
        <Route index element={<AdminDashboard />} />
        <Route path="create-tool-service" element={<CreateToolService />} />
        <Route path="edit-tool-service" element={<EditToolService />} /> {/* New route */}
        <Route path="create-blog-post" element={<CreateBlogPost />} />
        <Route path="edit-blog-post" element={<EditBlogPost />} /> {/* New route */}
        <Route path="edit-cv" element={<EditCV />} />
        <Route path="add-project" element={<CreateProject />} /> {/* New route */}
        <Route path="edit-portfolio" element={<EditPersonalPortfolio />} /> {/* Renamed route */}
        {/* Add more admin routes here */}
      </Route>
    </Routes>
  );
};

export default AdminPage;