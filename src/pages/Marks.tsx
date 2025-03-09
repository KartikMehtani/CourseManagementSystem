
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Marks = () => {
  const marksData = [
    { code: 'CSE2032', name: 'COA', marks: '40/48', weightage: '83.3%', total: '0.0' },
    { code: 'CSE2024', name: 'Software Engineering', marks: '65/78', weightage: '83.3%', total: '0.0' },
    { code: 'PSP2709', name: 'Design Thinking', marks: '58/60', weightage: '96.66%', total: '0.0' },
    { code: 'PSP3601', name: 'Project - 2', marks: '58/60', weightage: '96.66%', total: '0.0' },
    { code: 'PSP2005', name: 'Seminar CSE', marks: '50/100', weightage: '50.00%', total: '0.0' },
    { code: 'CSE2032', name: 'Machine Learning', marks: '65/78', weightage: '83.3%', total: '0.0' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Marks
            <ChevronRight size={20} />
          </h1>
          <p className="text-gray-400">List</p>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/80 text-gray-400">
                <th className="px-6 py-3 text-left font-medium">Code</th>
                <th className="px-6 py-3 text-left font-medium">Course Name</th>
                <th className="px-6 py-3 text-left font-medium">Marks</th>
                <th className="px-6 py-3 text-left font-medium">Weightage</th>
                <th className="px-6 py-3 text-left font-medium">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {marksData.map((course, index) => (
                <tr key={index} className="text-white hover:bg-slate-700/30">
                  <td className="px-6 py-4">{course.code}</td>
                  <td className="px-6 py-4">{course.name}</td>
                  <td className="px-6 py-4">{course.marks}</td>
                  <td className="px-6 py-4">{course.weightage}</td>
                  <td className="px-6 py-4 text-yellow-500">{course.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Marks;
