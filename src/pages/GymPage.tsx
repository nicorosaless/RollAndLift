
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Calendar from '../components/gym/Calendar';
import WorkoutCard from '../components/gym/WorkoutCard';
import ExerciseEntry from '../components/gym/ExerciseEntry';
import { Workout, Exercise } from '../types';
import { sampleWorkouts } from '../data/sampleData';
import { useToast } from '@/hooks/use-toast';

const GymPage = () => {
  const [workouts, setWorkouts] = useState<Workout[]>(sampleWorkouts);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [showNewWorkout, setShowNewWorkout] = useState(false);
  const [newWorkoutExercises, setNewWorkoutExercises] = useState<Exercise[]>([]);
  const [recentWorkout, setRecentWorkout] = useState<Workout | null>(null);
  const { toast } = useToast();

  // Get all dates with workouts
  const workoutDays = workouts.map(workout => workout.date);

  // Handle date selection
  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    // Check if there's a workout for this date
    const workout = workouts.find(w => w.date === date);
    setRecentWorkout(workout || null);
    setShowNewWorkout(false);
  };

  // Start a new workout
  const startNewWorkout = () => {
    setRecentWorkout(null);
    setShowNewWorkout(true);
    setNewWorkoutExercises([]);
  };

  // Add a new exercise to the workout being created
  const addNewExercise = () => {
    setNewWorkoutExercises([
      ...newWorkoutExercises,
      {
        id: uuidv4(),
        name: '',
        sets: [{ reps: 8, weight: 20 }]
      }
    ]);
  };

  // Handle saving an exercise in the workout creation form
  const handleSaveExercise = (id: string, name: string, sets: { reps: number; weight: number }[]) => {
    setNewWorkoutExercises(
      newWorkoutExercises.map(exercise =>
        exercise.id === id ? { ...exercise, name, sets } : exercise
      )
    );
  };

  // Remove an exercise from the workout creation form
  const handleRemoveExercise = (id: string) => {
    setNewWorkoutExercises(newWorkoutExercises.filter(exercise => exercise.id !== id));
  };

  // Save the entire workout
  const saveWorkout = () => {
    if (newWorkoutExercises.length === 0) {
      toast({
        title: "Can't save empty workout",
        description: "Add at least one exercise to your workout.",
        variant: "destructive",
      });
      return;
    }

    if (newWorkoutExercises.some(ex => !ex.name.trim())) {
      toast({
        title: "Missing exercise name",
        description: "Please name all exercises before saving.",
        variant: "destructive",
      });
      return;
    }

    const newWorkout: Workout = {
      id: uuidv4(),
      date: selectedDate,
      exercises: newWorkoutExercises
    };

    // Check if there's already a workout for this date
    const existingWorkoutIndex = workouts.findIndex(w => w.date === selectedDate);

    if (existingWorkoutIndex >= 0) {
      // Replace the existing workout
      const updatedWorkouts = [...workouts];
      updatedWorkouts[existingWorkoutIndex] = newWorkout;
      setWorkouts(updatedWorkouts);
    } else {
      // Add a new workout
      setWorkouts([newWorkout, ...workouts]);
    }

    setShowNewWorkout(false);
    setRecentWorkout(newWorkout);
    
    toast({
      title: "Workout saved",
      description: `Workout for ${selectedDate} has been saved successfully.`,
    });
  };

  // View a specific workout
  const viewWorkout = (workout: Workout) => {
    setSelectedDate(workout.date);
    setRecentWorkout(workout);
    setShowNewWorkout(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Lift & Roll - Gym</h1>
      
      <Calendar 
        workoutDays={workoutDays} 
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
      />
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {showNewWorkout ? 'New Workout' : recentWorkout ? 'Workout Details' : 'Recent Workouts'}
        </h2>
        
        {!showNewWorkout && (
          <button 
            onClick={startNewWorkout}
            className="button-primary"
          >
            {recentWorkout ? 'New Workout' : 'Start Workout'}
          </button>
        )}
      </div>
      
      {showNewWorkout ? (
        <div className="mb-6">
          {newWorkoutExercises.map(exercise => (
            <ExerciseEntry
              key={exercise.id}
              exerciseName={exercise.name}
              sets={exercise.sets}
              onSave={(name, sets) => handleSaveExercise(exercise.id, name, sets)}
              onRemove={() => handleRemoveExercise(exercise.id)}
            />
          ))}
          
          <div className="flex flex-col space-y-3 mt-4">
            <button 
              onClick={addNewExercise}
              className="button-secondary flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Add Exercise
            </button>
            
            <button 
              onClick={saveWorkout}
              className="button-primary"
            >
              Save Workout
            </button>
          </div>
        </div>
      ) : recentWorkout ? (
        <div className="mb-6">
          <div className="bg-secondary rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">
                {new Date(recentWorkout.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </h3>
              <span className="text-trgray-light">{recentWorkout.exercises.length} exercises</span>
            </div>
            
            <div className="space-y-4">
              {recentWorkout.exercises.map((exercise, index) => (
                <div key={exercise.id} className="border-t border-trgray-mid pt-3 first:border-t-0 first:pt-0">
                  <h4 className="font-medium text-traccent">{exercise.name}</h4>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <div className="text-trgray-light">Set</div>
                    <div className="text-trgray-light">Reps</div>
                    <div className="text-trgray-light">Weight</div>
                    
                    {exercise.sets.map((set, setIndex) => (
                      <React.Fragment key={setIndex}>
                        <div>{setIndex + 1}</div>
                        <div>{set.reps}</div>
                        <div>{set.weight} kg</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6">
          {workouts.slice(0, 5).map(workout => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onClick={() => viewWorkout(workout)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GymPage;
