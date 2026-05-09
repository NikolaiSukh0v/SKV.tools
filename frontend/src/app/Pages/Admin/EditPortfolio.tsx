import React from 'react';

const EditPortfolio: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Projects</h2>
      <p>Content for editing your projects will go here.</p>
        <Link to="/admin/edit-cv" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
            <DescriptionIcon className="mr-3" />
            Edit CV
        </Link>
    </div>
  );
};

export default EditPortfolio;