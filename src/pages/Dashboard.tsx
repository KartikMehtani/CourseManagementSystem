
import React from 'react';
import { ChevronRight, Clipboard, Clock, Users } from 'lucide-react';
import CircleProgress from '../components/charts/CircleProgress';
import BarChart from '../components/charts/BarChart';

const chartData = [
  { name: 'OS', value: 70, color: '#66BB6A' },
  { name: 'M.L.', value: 83, color: '#42A5F5' },
  { name: 'DBMS', value: 90, color: '#7E57C2' },
  { name: 'Prj-2', value: 65, color: '#FFB74D' },
  { name: 'M.A.D.', value: 75, color: '#EC407A' },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Statistics
            <ChevronRight size={20} />
          </h1>
          <p className="text-gray-400">Syna's Summary</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bmu-stat-card text-white">
          <Users className="text-yellow-500 mb-2" size={24} />
          <h3 className="text-xl font-bold">Attendance</h3>
          <p className="text-gray-400 text-sm mb-1">Total</p>
          <p className="text-red-400 text-xs">-5% from last month</p>
        </div>

        <div className="bmu-stat-card text-white">
          <Clipboard className="text-blue-500 mb-2" size={24} />
          <h3 className="text-xl font-bold">Courses</h3>
          <p className="text-gray-400 text-sm">+4 from last sem</p>
        </div>

        <div className="bmu-stat-card text-white">
          <Clipboard className="text-green-500 mb-2" size={24} />
          <h3 className="text-xl font-bold">Assignments</h3>
          <p className="text-gray-400 text-sm mb-1">2 submitted</p>
          <p className="text-yellow-500 text-xs">4 pending</p>
        </div>

        <div className="bmu-stat-card text-white">
          <Users className="text-purple-500 mb-2" size={24} />
          <h3 className="text-xl font-bold">Feedback</h3>
          <p className="text-gray-400 text-sm mb-1">2 submitted</p>
          <p className="text-yellow-500 text-xs">2 pending</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">Assignments</h2>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="overflow-x-auto">
              <table className="bmu-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Group</th>
                    <th>Submissions</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td>01</td>
                    <td>DBMS Lab Assignment</td>
                    <td>60</td>
                    <td>N/A</td>
                    <td>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full" style={{ width: '75%' }}></div>
                      </div>
                    </td>
                    <td>
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-md text-xs">TODAY</span>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Operating System</td>
                    <td>80</td>
                    <td>N/A</td>
                    <td>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full" style={{ width: '65%' }}></div>
                      </div>
                    </td>
                    <td>
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-md text-xs">TODAY</span>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Machine Learning</td>
                    <td>100</td>
                    <td>Yes</td>
                    <td>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{ width: '50%' }}></div>
                      </div>
                    </td>
                    <td>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs">27th Feb '25</span>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Project-2 Report</td>
                    <td>60</td>
                    <td>N/A</td>
                    <td>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full" style={{ width: '30%' }}></div>
                      </div>
                    </td>
                    <td>
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-md text-xs">1st March '25</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Attendance</h2>
            <p className="text-gray-400 text-sm">40/48</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 flex justify-center">
            <CircleProgress percentage={83} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Schedule</h2>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <table className="bmu-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Name</th>
                  <th>Faculty</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td>9:15</td>
                  <td>Database Management</td>
                  <td>Dr. Niantha Phutela</td>
                  <td>NB 208</td>
                </tr>
                <tr>
                  <td>10:15</td>
                  <td>Software Engineering</td>
                  <td>Dr. Niantha Phutela</td>
                  <td>NB 208</td>
                </tr>
                <tr>
                  <td>12:15</td>
                  <td>Project-2</td>
                  <td>Dr. Manisha Saini</td>
                  <td>NB 211</td>
                </tr>
                <tr>
                  <td>2:15</td>
                  <td>Machine Learning</td>
                  <td>Prof. Anantha Rao</td>
                  <td>GAU 211</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Attendance</h2>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-gray-400 text-sm">Submitted</span>
              <span className="w-3 h-3 rounded-full bg-red-500 ml-4"></span>
              <span className="text-gray-400 text-sm">Failed</span>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <BarChart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
