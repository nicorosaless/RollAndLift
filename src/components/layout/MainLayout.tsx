
import React from 'react';
import Navigation from './Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-trblack text-trwhite">
      <main className="container mx-auto px-4 pb-24 pt-6">
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default MainLayout;
