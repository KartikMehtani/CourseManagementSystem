
import React from 'react';
import { ChevronRight } from 'lucide-react';
import AttendanceChart from '../components/charts/AttendanceChart';

const Attendance = () => {
  const attendanceData = [
    { code: 'CSE2709', name: 'COA', count: '36/50', percentage: '74%', capping: '0.0' },
    { code: 'CSE3005', name: 'SE', count: '68/80', percentage: '85%', capping: '0.0' },
    { code: 'CSE3709', name: 'MAD', count: '51/56', percentage: '91.07%', capping: '0.0' },
    { code: 'PSP2709', name: 'Design Thinking', count: '58/60', percentage: '96.66%', capping: '0.0' },
    { code: 'CSE2032', name: 'Machine Learning', count: '65/78', percentage: '83.3%', capping: '0.0' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Attendance
            <ChevronRight size={20} />
          </h1>
          <p className="text-gray-400">List</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2">
          <span className="text-white">Filter</span>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-lg mb-6">
        <AttendanceChart />
      </div>

      <div className="bg-slate-800/50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/80 text-gray-400">
                <th className="px-6 py-3 text-left font-medium">Code</th>
                <th className="px-6 py-3 text-left font-medium">Course Name</th>
                <th className="px-6 py-3 text-left font-medium">Attendance Count</th>
                <th className="px-6 py-3 text-left font-medium">Percentage</th>
                <th className="px-6 py-3 text-left font-medium">% After Capping</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {attendanceData.map((course, index) => (
                <tr key={index} className="text-white hover:bg-slate-700/30">
                  <td className="px-6 py-4">{course.code}</td>
                  <td className="px-6 py-4">{course.name}</td>
                  <td className="px-6 py-4">{course.count}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[100px] bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            parseFloat(course.percentage) >= 90 ? 'bg-green-500' : 
                            parseFloat(course.percentage) >= 75 ? 'bg-blue-500' : 
                            'bg-yellow-500'
                          }`} 
                          style={{ width: course.percentage }}
                        ></div>
                      </div>
                      <span>{course.percentage}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-yellow-500">{course.capping}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
