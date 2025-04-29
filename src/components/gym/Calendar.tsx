
import React from 'react';

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

  return (
    <div className="mb-6 animate-fade-in">
      <h2 className="text-lg font-semibold mb-2">Calendar</h2>
      <div className="bg-secondary rounded-lg p-4">
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div key={day} className="text-xs text-trgray-light">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {/* Empty cells for days before the 1st of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="h-8 w-8"></div>
          ))}
          
          {/* Calendar days */}
          {days.map((day) => (
            <button
              key={day}
              onClick={() => onSelectDate(formatDateString(day))}
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all
                ${hasWorkout(day) ? 'bg-traccent text-black font-medium' : ''}
                ${isSelected(day) && !hasWorkout(day) ? 'border-2 border-traccent' : ''}
                ${isToday(day) && !hasWorkout(day) && !isSelected(day) ? 'border border-trgray-light' : ''}
                ${!hasWorkout(day) && !isSelected(day) && !isToday(day) ? 'hover:bg-trgray-mid' : ''}
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
