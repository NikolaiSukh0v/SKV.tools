import React from 'react';
import { Table01DividerLine } from './Table';
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import type { BadgeColor, BadgeTypes } from "@/components/base/badges/badge-types";

// Dummy data for demonstration
const dummyTeamMembers = [
    {
        id: "1",
        name: "Phoenix Baker",
        username: "@phoenix",
        avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        status: "active",
        role: "Software Engineer",
        email: "phoenix@example.com",
        teams: [{ name: "Product", color: "primary" }, { name: "Engineering", color: "secondary" }],
    },
    {
        id: "2",
        name: "Lana Steiner",
        username: "@lana",
        avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        status: "inactive",
        role: "UX Designer",
        email: "lana@example.com",
        teams: [{ name: "Design", color: "warning" }],
    },
    {
        id: "3",
        name: "Demi Wilkinson",
        username: "@demi",
        avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        status: "active",
        role: "Project Manager",
        email: "demi@example.com",
        teams: [{ name: "Product", color: "primary" }, { name: "Marketing", color: "info" }, { name: "Sales", color: "success" }],
    },
];

const ExampleTableUsage: React.FC = () => {
    const handleEdit = (item: any) => {
        alert(`Editing item: ${item.name}`);
        console.log("Edit item:", item);
    };

    const columns = [
        {
            id: "name",
            label: "Name",
            isRowHeader: true,
            allowsSorting: true,
            className: "w-full max-w-1/4",
            render: (item: any) => (
                <div className="flex items-center gap-3">
                    <Avatar src={item.avatarUrl} alt={item.name} size="md" />
                    <div className="whitespace-nowrap">
                        <p className="text-sm font-medium text-primary">{item.name}</p>
                        <p className="text-sm text-tertiary">{item.username}</p>
                    </div>
                </div>
            ),
        },
        {
            id: "status",
            label: "Status",
            allowsSorting: true,
            render: (item: any) => (
                <BadgeWithDot size="sm" color={item.status === "active" ? "success" : "gray"} type="modern">
                    {item.status === "active" ? "Active" : "Inactive"}
                </BadgeWithDot>
            ),
        },
        { id: "role", label: "Role", allowsSorting: true, className: "whitespace-nowrap" },
        { id: "email", label: "Email address", allowsSorting: true, className: "md:hidden xl:table-cell" },
        {
            id: "teams",
            label: "Teams",
            render: (item: any) => (
                <div className="flex gap-1">
                    {item.teams.slice(0, 3).map((team: any) => (
                        <Badge key={team.name} color={team.color as BadgeColor<BadgeTypes>} size="sm">
                            {team.name}
                        </Badge>
                    ))}
                    {item.teams.length > 3 && (
                        <Badge color="gray" size="sm">
                            +{item.teams.length - 3}
                        </Badge>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Example Table Usage</h1>
            <Table01DividerLine
                data={dummyTeamMembers}
                columns={columns}
                title="Team Members Overview"
                badge={`${dummyTeamMembers.length} users`}
                onEdit={handleEdit}
            />
        </div>
    );
};

export default ExampleTableUsage;
