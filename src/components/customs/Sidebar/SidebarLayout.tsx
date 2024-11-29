import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { AppSidebar } from './AppSidebar';

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="relative">
        <AppSidebar />
        <span className="absolute right-0 translate-x-3 top-10 z-10">
          <SidebarTrigger />
        </span>
      </div>

      <main className="p-6 pb-0 bg-[#f8f8f8] w-screen overflow-hidden">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default SidebarLayout;
