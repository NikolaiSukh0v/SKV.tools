import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  AddBox as AddBoxIcon,
  Article as ArticleIcon,
  Description as DescriptionIcon,
  FolderOpen as FolderOpenIcon,
} from '@mui/icons-material'; // Using MUI icons for consistency

const AdminSidebar: React.FC = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4 fixed top-0 left-0 pt-20 z-10">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/admin" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
              <HomeIcon className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/create-tool-service" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
              <AddBoxIcon className="mr-3" />
              Create New Tool/Service
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/create-blog-post" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
              <ArticleIcon className="mr-3" />
              Create New Blog Post
            </Link>
          </li>

          <li className="mb-2">
            <Link to="/admin/edit-portfolio" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
              <FolderOpenIcon className="mr-3" />
              Edit Portolio
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;