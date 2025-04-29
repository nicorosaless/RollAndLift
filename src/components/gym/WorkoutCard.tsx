
import React from 'react';

interface Exercise {
  id: string;
  name: string;
  sets: { reps: number; weight: number }[];
}

interface Workout {
  id: string;
  date: string;
  exercises: Exercise[];
}

interface WorkoutCardProps {
  workout: Workout;
  onClick: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onClick }) => {
  // Format date to display as "Apr 29, 2025"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div 
      onClick={onClick}
      className="bg-secondary rounded-lg p-4 mb-3 cursor-pointer card-hover animate-slide-up"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{formatDate(workout.date)}</h3>
        <span className="text-trgray-light text-sm">{workout.exercises.length} exercises</span>
      </div>
      
      <div className="space-y-1">
        {workout.exercises.slice(0, 3).map((exercise) => (
          <div key={exercise.id} className="text-sm text-trgray-light flex justify-between">
            <span>{exercise.name}</span>
            <span>
              {exercise.sets.length} {exercise.sets.length === 1 ? 'set' : 'sets'}
            </span>
          </div>
        ))}
        {workout.exercises.length > 3 && (
          <div className="text-xs text-trgray-light">
            +{workout.exercises.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;
