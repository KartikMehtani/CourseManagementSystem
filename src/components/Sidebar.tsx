
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, BookOpen, Calendar, Home, LogOut, MessageSquare, Settings, UserCircle, Users } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <Home size={20} />, text: 'Dashboard', path: '/' },
    { icon: <BookOpen size={20} />, text: 'Courses', path: '/courses' },
    { icon: <UserCircle size={20} />, text: 'Assignments', path: '/assignments' },
    { icon: <Users size={20} />, text: 'Attendance', path: '/attendance' },
    { icon: <BarChart3 size={20} />, text: 'Marks', path: '/marks' },
    { icon: <Calendar size={20} />, text: 'Schedule', path: '/schedule' },
    { icon: <MessageSquare size={20} />, text: 'Connect', path: '/connect' },
    { icon: <Settings size={20} />, text: 'Settings', path: '/settings' },
    { icon: <Home size={20} />, text: 'Archived', path: '/archived' }
  ];

  return (
    <div className="fixed h-full w-[200px] bg-slate-900/95 flex flex-col border-r border-slate-700/50">
      <div className="p-4">
        <img 
          src="/lovable-uploads/616b0cfc-6d74-42ac-a41f-25bc51438500.png" 
          alt="BMU Logo" 
          className="w-full"
        />
      </div>

      <div className="flex-1 py-6">
        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item, idx) => (
            <NavLink 
              key={idx} 
              to={item.path} 
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : 'text-gray-300'}`
              }
            >
              {item.icon}
              <span>{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-700/50">
        <NavLink to="/signout" className="nav-item text-gray-300">
          <LogOut size={20} />
          <span>Signout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
