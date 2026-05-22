import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  emptyState?: React.ReactNode;
  className?: string;
}

export function Table<T>({ columns, data, pagination, emptyState, className }: TableProps<T>) {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Scrollable Container */}
      <div className="w-full overflow-x-auto rounded-[12px] border border-neutral-200/60 bg-white shadow-sm">
        <table className={cn("min-w-full border-collapse text-left text-[14px]", className)}>
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50/50">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={cn(
                    "px-6 py-4 font-semibold text-neutral-500 whitespace-nowrap text-[12px] uppercase tracking-wider",
                    col.className
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-neutral-400">
                  {emptyState || "No items found."}
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-neutral-50/30 transition-colors">
                  {columns.map((col, colIdx) => {
                    const content =
                      typeof col.accessor === "function"
                        ? col.accessor(row)
                        : (row[col.accessor] as React.ReactNode);

                    return (
                      <td key={colIdx} className={cn("px-6 py-4 text-neutral-900 align-middle", col.className)}>
                        {content}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between px-2 mt-1">
          <div className="text-[13px] text-neutral-500">
            Page <span className="font-semibold text-neutral-700">{pagination.currentPage}</span> of{" "}
            <span className="font-semibold text-neutral-700">{pagination.totalPages}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-[34px] px-3 font-medium text-neutral-600 gap-1 rounded-md"
              disabled={pagination.currentPage <= 1}
              onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-[34px] px-3 font-medium text-neutral-600 gap-1 rounded-md"
              disabled={pagination.currentPage >= pagination.totalPages}
              onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
