import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: string;
  children?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition, children, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border placeholder:placeholder-main border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-gray-500 focus-visible:outline-none transition duration-300 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            icon && 'pl-10',
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={cn(
              'absolute left-2 top-1/2 -translate-y-1/2',
              iconPosition,
            )}
          >
            {icon}
          </div>
        )}

        {children && (
          <div className="absolute -translate-y-1/2 right-2 top-1/2">
            {children}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
