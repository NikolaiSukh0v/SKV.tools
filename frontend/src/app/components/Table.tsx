import { useMemo, useState } from "react";
import { Edit01 } from "@untitledui/icons"; // Keep Edit01 if you want to use it for the icon, otherwise remove
import type { SortDescriptor } from "react-aria-components";
import { PaginationPageMinimalCenter } from "@/components/application/pagination/pagination";
import { Table, TableCard } from "@/components/application/table/table";
// import teamMembers from "@/components/application/table/team-members.json"; // Removed hardcoded data import
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { DropdownIconSimple } from "@/components/base/dropdown/dropdown-icon-simple";

// Define a generic type for table items
interface TableItem {
    [key: string]: any;
}

// Define the structure for a column
interface TableColumn {
    id: string;
    label: string;
    allowsSorting?: boolean;
    isRowHeader?: boolean;
    className?: string;
    render?: (item: TableItem) => React.ReactNode; // Custom render function for cell content
}

// Define the props for the modular table component
interface TableProps {
    data: TableItem[];
    columns: TableColumn[];
    title: string;
    badge?: string;
    onEdit: (item: TableItem) => void;
    // onDelete: (item: TableItem) => void; // Optional delete handler
}

export const Table01DividerLine = ({ data, columns, title, badge, onEdit }: TableProps) => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: columns[0]?.id || "", // Default to the first column if available
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        if (!sortDescriptor.column || !data) return data;

        return [...data].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            // Handle undefined values gracefully
            if (first === undefined || second === undefined) {
                return 0;
            }

            // Compare numbers or booleans
            if ((typeof first === "number" && typeof second === "number") || (typeof first === "boolean" && typeof second === "boolean")) {
                return sortDescriptor.direction === "descending" ? (second as any) - (first as any) : (first as any) - (second as any);
            }

            // Compare strings
            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [data, sortDescriptor]);

    return (
        <TableCard.Root>
            <TableCard.Header
                title={title}
                badge={badge}
                contentTrailing={
                    <div className="absolute top-5 right-4 md:right-6">
                        <DropdownIconSimple />
                    </div>
                }
            />
            <Table aria-label={title} selectionMode="multiple" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <Table.Header>
                    {columns.map((column) => (
                        <Table.Head
                            key={column.id}
                            id={column.id}
                            label={column.label}
                            allowsSorting={column.allowsSorting}
                            isRowHeader={column.isRowHeader}
                            className={column.className}
                        />
                    ))}
                    <Table.Head id="actions" label="Actions" /> {/* Actions column header */}
                </Table.Header>

                <Table.Body items={sortedItems}>
                    {(item) => (
                        <Table.Row id={item.id || item.username || JSON.stringify(item)}> {/* Use a unique ID for the row */}
                            {columns.map((column) => (
                                <Table.Cell key={column.id}>
                                    {column.render ? column.render(item) : item[column.id]}
                                </Table.Cell>
                            ))}
                            <Table.Cell className="px-4">
                                <div className="flex justify-end gap-0.5">
                                    {/* Edit Button */}
                                    <ButtonUtility
                                        size="xs"
                                        color="tertiary"
                                        tooltip="Edit"
                                        onClick={() => onEdit(item)}
                                    >
                                        Edit
                                    </ButtonUtility>
                                    {/* Optional Delete Button
                                    <ButtonUtility
                                        size="xs"
                                        color="tertiary"
                                        tooltip="Delete"
                                        icon={Trash01}
                                        onClick={() => onDelete(item)}
                                    />
                                    */}
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

            {/* Pagination is still hardcoded, consider making it a prop as well */}
            <PaginationPageMinimalCenter page={1} total={10} className="px-4 py-3 md:px-6 md:pt-3 md:pb-4" />
        </TableCard.Root>
    );
};
