import React from 'react';
import AddNewTool from '../../components/AdminLayouts/AddNewTool'
const CreateToolService: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Tool/Service</h2>
      <p>Form to create a new tool or service will go here.</p>
        <AddNewTool/>
    </div>
  );
};

export default CreateToolService;