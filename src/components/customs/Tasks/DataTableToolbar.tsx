'use client';

import { Table } from '@tanstack/react-table';
import { Search, X } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTableFacetedFilter } from './DataTableFacetedFilter';
import { priorities, statuses } from '@/lib/lang/tasksLang';
import { DataTableViewOptions } from './DataTableViewOptions';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <DataTableViewOptions table={table} />
        <Input
          placeholder="Search"
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          icon={<Search size={20} className="text-gray-500" />}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
    </div>
  );
}
