import React, { useState } from 'react';
import AdminAddButton from "@/app/components/AdminActions/AdminAddButton";

export default function AddNewTool() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [icon, setIcon] = useState<string>('');
    const [gradient, setGradient] = useState<string>('');
    const [website, setWebsite] = useState<string>('');
    const [status, setStatus] = useState<string>('Ready');
    const [size, setSize] = useState<string>('large');

    // This function now only prepares and returns the data
    const getToolData = () => {
        return {
            title,
            desc: description,
            createdBy: 'Admin', // This should probably come from user context
            icon,
            gradient,
            status,
            website,
            size,
        };
    };

    const handleSuccess = () => {
        alert('Tool added successfully!');
        // Clear form fields on success
        setTitle('');
        setDescription('');
        setIcon('');
        setGradient('');
        setWebsite('');
        setStatus('Ready');
        setSize('large');
    };

    const handleError = (error: any) => {
        console.error('Error adding tool:', error);
        alert('Failed to add tool. Check console for details.');
    };

    // The form itself doesn't need an onSubmit handler if the button handles the action
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Removed <form onSubmit={handleSubmit}> as the button handles the action */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="title" className="block mb-2.5 text-sm font-medium text-heading"> Title</label>
                    <input
                        type="text"
                        id="title"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="Service / Tool title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2.5 text-sm font-medium text-heading">Description</label>
                    <input
                        type="text"
                        id="description"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="Description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="icon" className="block mb-2.5 text-sm font-medium text-heading">Icon</label>
                    <input
                        type="text"
                        id="icon"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="Icon"
                        required
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="gradient" className="block mb-2.5 text-sm font-medium text-heading">Gradient</label>
                    <input
                        type="text"
                        id="gradient"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="rgba(0, 242, 255, 0.15), rgba(100, 50, 200, 0.2), rgba(20, 150, 70, 0.3)"
                        required
                        value={gradient}
                        onChange={(e) => setGradient(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="website" className="block mb-2.5 text-sm font-medium text-heading">Website URL</label>
                    <input
                        type="url"
                        id="website"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="flowbite.com"
                        required
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="status" className="block mb-2.5 text-sm font-medium text-heading">Status</label>
                    <select
                        id="status"
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
                        required
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Ready">Ready</option>
                        <option value="Coming Soon">Coming Soon</option>
                        <option value="Beta">Beta</option>
                    </select>
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="size" className="block mb-2.5 text-sm font-medium text-heading">Size</label>
                <select
                    id="size"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs"
                    required
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                >
                    <option value="large">Large</option>
                    <option value="small">Small</option>
                </select>
            </div>

            {/* Pass the prepared data and endpoint string as props */}
            <AdminAddButton
                toolData={getToolData()}
                axiosString="tool"
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    );
}
