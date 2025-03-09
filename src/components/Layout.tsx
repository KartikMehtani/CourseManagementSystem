
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-[200px]">
        <Header />
        <main className="p-6">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
