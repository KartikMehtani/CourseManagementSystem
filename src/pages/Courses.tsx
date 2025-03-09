
import React, { useState } from 'react';
import { ChevronRight, Plus, Search } from 'lucide-react';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const coursesList = [
    { id: 'CSE2020', name: 'Database Management', sessions: 35, credits: 2, selected: true },
    { id: 'CSE2016', name: 'Operating System', sessions: 50, credits: 3, selected: true },
    { id: 'CSE1798', name: 'Software Engineering', sessions: 60, credits: 4, selected: true },
    { id: 'CSE1324', name: 'Project - 2', sessions: 60, credits: 4, selected: true },
    { id: 'CSE1567', name: 'Practice School - 2', sessions: 20, credits: 1, selected: true },
    { id: 'CSE7823', name: 'Machine Learning', sessions: 60, credits: 4, selected: true },
    { id: 'CSE6435', name: 'Mobile Application Develop', sessions: 35, credits: 2, selected: true },
    { id: 'CSE7COA', name: 'Comp. Org & Architecture', sessions: 50, credits: 3, selected: true }
  ];

  const filteredCourses = coursesList.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Course Registration
            <ChevronRight size={20} />
          </h1>
          <p className="text-gray-400">List</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Courses"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-800/80 border border-slate-700 rounded-md px-10 py-2 text-white w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200">
          <Plus size={18} />
          <span>Add New Item</span>
        </button>
      </div>

      <div className="bg-slate-800/50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/80 text-gray-400">
                <th className="px-6 py-3 text-left font-medium">Courses</th>
                <th className="px-6 py-3 text-left font-medium">Course ID</th>
                <th className="px-6 py-3 text-left font-medium">Sessions</th>
                <th className="px-6 py-3 text-left font-medium">Credits</th>
                <th className="px-6 py-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {filteredCourses.map((course, index) => (
                <tr key={index} className="text-white hover:bg-slate-700/30">
                  <td className="px-6 py-4">{course.name}</td>
                  <td className="px-6 py-4">{course.id}</td>
                  <td className="px-6 py-4">{course.sessions}</td>
                  <td className="px-6 py-4">{course.credits}</td>
                  <td className="px-6 py-4">
                    <span className="text-teal-500 font-medium">SELECTED</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center p-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-700 text-white">
              &lt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-700 text-white">
              &gt;
            </button>
          </div>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-2 rounded-md transition duration-200">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
