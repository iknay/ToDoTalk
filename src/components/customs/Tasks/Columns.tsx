'use client';

import { ColumnDef } from '@tanstack/react-table';
import { priorities, statuses } from '@/lib/lang/tasksLang';
import { DataTableRowActions } from './DataTableRowActions';
import { ITask } from '@/lib/typings/ITodo';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from './DataTableColumnHeader';
import { cn } from '@/lib/utils';
import { getBadgeColor } from '@/lib/helpers/priorityColor';
import { Badge } from '@/components/ui/badge';

export const Columns: ColumnDef<ITask>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  //   {
  //     accessorKey: 'id',
  //     header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title="Task" />
  //     ),
  //     cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
  //     enableSorting: false,
  //     enableHiding: false,
  //   },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      //   const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}

          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('title')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status'),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('priority'),
      );

      const priorityColor = getBadgeColor(priority?.value || '');

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center cursor-default">
          <Badge
            variant="outline"
            className={cn(priorityColor, 'rounded-full')}
          >
            {priority.icon && (
              <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{priority.label}</span>
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
