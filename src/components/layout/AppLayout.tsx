import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50 text-gray-900 dark:bg-gray-950 dark:bg-gradient-to-br dark:from-gray-950 dark:via-emerald-950/15 dark:to-gray-950 dark:text-gray-100">
      {children}
    </div>
  );
};
