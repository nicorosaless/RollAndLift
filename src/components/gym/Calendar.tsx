
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  workoutDays: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ workoutDays, selectedDate, onSelectDate }) => {
  // Get current date info
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Generate days for the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Create an array with the days of the current month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Format a day number to a date string (YYYY-MM-DD)
  const formatDateString = (day: number) => {
    const month = currentMonth + 1;
    return `${currentYear}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  };

  // Check if a day has a workout
  const hasWorkout = (day: number) => {
    const dateStr = formatDateString(day);
    return workoutDays.includes(dateStr);
  };

  // Is the day selected
  const isSelected = (day: number) => {
    const dateStr = formatDateString(day);
    return dateStr === selectedDate;
  };

  // Is today
  const isToday = (day: number) => {
    return day === today.getDate();
  };

  // Get month name
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthName = monthNames[currentMonth];

  return (
    <div className="mb-8 animate-fade-in rounded-xl bg-gradient-to-br from-purple-900 to-blue-900 p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <CalendarIcon className="mr-2" />
          {monthName} {currentYear}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center mb-3">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div key={day} className="text-xs text-gray-300 font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Empty cells for days before the 1st of the month */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="h-9 w-9"></div>
        ))}
        
        {/* Calendar days */}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => onSelectDate(formatDateString(day))}
            className={`h-9 w-9 rounded-full flex items-center justify-center text-sm transition-all duration-300
              ${hasWorkout(day) 
                ? 'bg-gradient-to-br from-pink-500 to-orange-400 text-white font-bold shadow-lg transform hover:scale-110' 
                : ''}
              ${isSelected(day) && !hasWorkout(day) 
                ? 'border-2 border-pink-400 text-white' 
                : ''}
              ${isToday(day) && !hasWorkout(day) && !isSelected(day) 
                ? 'border border-gray-400 text-white' 
                : ''}
              ${!hasWorkout(day) && !isSelected(day) && !isToday(day) 
                ? 'text-gray-300 hover:bg-purple-800 hover:text-white' 
                : ''}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
