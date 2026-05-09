import React from 'react';
import axios from 'axios'; // Import axios

interface AdminAddButtonProps {
  toolData: any; // The data to be sent
  axiosString: string; // The endpoint path (e.g., 'tool')
  onSuccess?: () => void; // Optional callback for success
  onError?: (error: any) => void; // Optional callback for error
}

export default function AdminAddButton({ toolData, axiosString, onSuccess, onError }: AdminAddButtonProps) {

  const handleButtonClick = async () => {
    if (!toolData || !axiosString) {
      console.error('AdminAddButton: Missing toolData or axiosString props.');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/${axiosString}`, toolData);
      console.log('API call successful:', response.data);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error during API call:', error);
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <button
      type="button"
      className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-base text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      onClick={handleButtonClick}
    >
      Add new tool
    </button>
  );
}
