import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Table } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const generatePaginationNumbers = () => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();
    const delta = 1; // Number of pages to show before and after current page

    let pages: (number | string)[] = [];

    // Always include first page
    pages.push(1);

    // Calculate range of pages to show
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    // Add dots after 1 if needed
    if (rangeStart > 2) {
      pages.push('...');
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add dots before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('...');
    }

    // Add last page if there is more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 text-sm text-muted-foreground">
        Showing{' '}
        {table.getState().pagination.pageIndex *
          table.getState().pagination.pageSize +
          1}{' '}
        to{' '}
        {Math.min(
          (table.getState().pagination.pageIndex + 1) *
            table.getState().pagination.pageSize,
          table.getFilteredRowModel().rows.length,
        )}{' '}
        of {table.getFilteredRowModel().rows.length} entries
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="hidden items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="hidden w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {generatePaginationNumbers().map((pageNum, idx) =>
            pageNum === '...' ? (
              <span key={`ellipsis-${idx}`} className="px-2">
                ...
              </span>
            ) : (
              <Button
                key={`page-${pageNum}`}
                variant={
                  table.getState().pagination.pageIndex + 1 === pageNum
                    ? 'default'
                    : 'outline'
                }
                className="h-8 w-8 p-0"
                onClick={() => table.setPageIndex(Number(pageNum) - 1)}
              >
                {pageNum}
              </Button>
            ),
          )}

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
