
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 1, 2, 3, 4],
  ];

  const events = {
    10: {
      time: '10:00',
      deadlines: 2,
      classes: [
        { name: 'DBMS', color: 'green' },
        { name: 'Project-2', color: 'blue' }
      ]
    },
    24: {
      time: '10:00',
      deadlines: 1,
      classes: [
        { name: 'M.L.', color: 'green' }
      ]
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Schedule
          </h1>
          <p className="text-gray-400">CSE - 6</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-gray-400">Select the date</div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-1 rounded-md">
            <button className="text-gray-400">
              <ChevronLeft size={18} />
            </button>
            <span className="text-red-500 font-medium">2025</span>
            <button className="text-gray-400">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-lg p-4">
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div key={index} className="text-center py-2 text-gray-400 font-medium">
              {day}
            </div>
          ))}

          {dates.map((week, weekIndex) => (
            React.Children.toArray(
              week.map((date, dateIndex) => {
                const isApril = weekIndex === 4 && dateIndex >= 3;
                const hasEvent = events[date as keyof typeof events];
                const isHighlighted = date === 10;

                return (
                  <div 
                    className={`calendar-day ${isHighlighted ? 'bg-red-500/20' : ''}`}
                  >
                    <div className="calendar-day-number flex justify-between">
                      <span className={isHighlighted ? 'text-red-500' : 'text-white'}>
                        {date}
                      </span>
                      {isApril && <span className="text-sm text-teal-500">April</span>}
                    </div>
                    
                    {hasEvent && (
                      <div className="mt-2">
                        <div className="text-xs text-gray-400">
                          {hasEvent.time}
                        </div>
                        <div className="text-xs text-gray-400">
                          {hasEvent.deadlines} {hasEvent.deadlines === 1 ? 'Deadline' : 'Deadlines'}
                        </div>
                        
                        {hasEvent.classes.map((cls, idx) => (
                          <div 
                            key={idx} 
                            className={`deadline-badge ${cls.color === 'green' ? 'green' : 'blue'}`}
                          >
                            {cls.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
