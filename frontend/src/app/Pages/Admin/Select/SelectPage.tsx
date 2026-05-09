import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '../../../components/application/table/table';

interface Props{
    selectedItem: string
}

export default function SelectPage({selectedItem}:Props){
    return (
        <div className="selectPage-wrapper bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{selectedItem}</h2>
            <div className="dataTable"></div>
            <div className="addNewItemButton"></div>
        </div>
    );
}
