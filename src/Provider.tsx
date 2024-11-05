import React from 'react';
import QueryClientProvider from './providers/QueryClientProvider';
import { ThemeProvider } from './providers/ThemeProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Provider;
