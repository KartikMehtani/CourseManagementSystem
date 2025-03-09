
import React from 'react';
import { ChevronRight, Plus } from 'lucide-react';

const Assignments = () => {
  const assignments = [
    { id: '01', name: 'DBMS Lab Assignment', points: 60, group: 'N/A', deadline: 'TODAY', status: 'Uploaded' },
    { id: '02', name: 'Operating System', points: 80, group: 'N/A', deadline: 'TODAY', status: 'Uploaded' },
    { id: '03', name: 'Machine Learning', points: 100, group: 'Yes', deadline: '27th Feb \'25', status: 'Uploaded' },
    { id: '04', name: 'Project-2 Report', points: 60, group: 'N/A', deadline: '1st March \'25', status: 'Pending' },
    { id: '05', name: 'DBMS Lab Assignment', points: 60, group: 'N/A', deadline: '2nd March \'25', status: 'Pending' },
    { id: '06', name: 'COA Lab Assignment', points: 80, group: 'N/A', deadline: '28th Feb \'25', status: 'Pending' },
    { id: '07', name: 'FDL Assignment', points: 100, group: 'Yes', deadline: '28th Feb \'25', status: 'Pending' },
    { id: '08', name: 'FeedBack M.L.', points: 60, group: 'N/A', deadline: '7th March \'25', status: 'Pending' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Assignments
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
                <th className="px-6 py-3 text-left font-medium">#</th>
                <th className="px-6 py-3 text-left font-medium">Name</th>
                <th className="px-6 py-3 text-left font-medium">Points</th>
                <th className="px-6 py-3 text-left font-medium">Group</th>
                <th className="px-6 py-3 text-left font-medium">Deadline</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {assignments.map((assignment, index) => (
                <tr key={index} className="text-white hover:bg-slate-700/30">
                  <td className="px-6 py-4">{assignment.id}</td>
                  <td className="px-6 py-4">{assignment.name}</td>
                  <td className="px-6 py-4">{assignment.points}</td>
                  <td className="px-6 py-4">{assignment.group}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-md text-xs inline-block ${
                      assignment.deadline === 'TODAY' 
                        ? 'bg-yellow-600 text-white' 
                        : assignment.deadline.includes('Feb') 
                          ? 'bg-blue-600 text-white'
                          : 'bg-purple-600 text-white'
                    }`}>
                      {assignment.deadline}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {assignment.status === 'Uploaded' ? (
                      <span className="text-white">Uploaded</span>
                    ) : (
                      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 text-white">
                        <Plus size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
