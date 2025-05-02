
import React from 'react';
import { Workout } from '../../types';

interface WorkoutCardProps {
  workout: Workout;
  onClick: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onClick }) => {
  const date = new Date(workout.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
  
  // Get the total number of sets across all exercises
  const totalSets = workout.exercises.reduce(
    (sum, exercise) => sum + exercise.sets.length,
    0
  );
  
  return (
    <div 
      onClick={onClick}
      className="bg-gray-800 rounded-xl p-4 mb-3 cursor-pointer transition-all hover:shadow-lg hover:transform hover:scale-[1.02] animate-fade-in"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-white">{formattedDate}</h3>
        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
          {workout.exercises.length} exercises
        </span>
      </div>
      <div className="mt-2 text-gray-400 text-sm flex gap-3">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          {totalSets} sets
        </span>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {workout.exercises.map(e => e.name).join(', ')}
        </span>
      </div>
    </div>
  );
};

export default WorkoutCard;
