'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={cn(
    'fixed top-0 left-0 h-full transition-all ease-in-out duration-300 sidebar',
    isOpen ? 'translate-x-0' : '-translate-x-full',
    )}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-xl">
          ✕
        </button>
      </div>

      {/* Sidebar content */}
      <div
        className="flex flex-col items-center space-y-6 mt-8 sidebar-icon-width"
      >
        {/* Example sidebar items */}
        <div className="text-white">Home</div>
        <div className="text-white">Explore</div>
        <div className="text-white">Settings</div>
      </div>
  </div>
  );
};

export default Sidebar;
