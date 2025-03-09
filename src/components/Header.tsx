
import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-end items-center gap-4 p-4">
      <button className="relative">
        <Bell className="text-white" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          3
        </span>
      </button>
      
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/c445fea3-07d5-4f2e-a7c2-3f4812661602.png" 
          alt="Profile" 
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <ChevronDown className="text-white" size={16} />
      </div>
    </div>
  );
};

export default Header;
