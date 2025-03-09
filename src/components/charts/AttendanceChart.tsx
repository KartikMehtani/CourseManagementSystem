
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', attendance: 20 },
  { month: 'Feb', attendance: 30 },
  { month: 'Mar', attendance: 40 },
  { month: 'Apr', attendance: 80 },
  { month: 'May', attendance: 60 },
  { month: 'Jun', attendance: 90 },
  { month: 'Jul', attendance: 70 },
  { month: 'Aug', attendance: 90 },
  { month: 'Sep', attendance: 80 },
  { month: 'Oct', attendance: 95 },
  { month: 'Nov', attendance: 75 },
  { month: 'Dec', attendance: 85 },
];

const AttendanceChart = () => {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#444' }} />
          <Area 
            type="monotone" 
            dataKey="attendance" 
            stroke="#82ca9d" 
            fillOpacity={1} 
            fill="url(#colorAttendance)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
