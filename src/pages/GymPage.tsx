
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Calendar from '../components/gym/Calendar';
import WorkoutCard from '../components/gym/WorkoutCard';
import ExerciseEntry from '../components/gym/ExerciseEntry';
import { Workout, Exercise } from '../types';
import { sampleWorkouts } from '../data/sampleData';
import { useToast } from '@/hooks/use-toast';
import { dumbbell } from 'lucide-react';

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

  const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  // Function to determine if we should show the start workout CTA
  const shouldShowStartWorkoutCTA = !showNewWorkout && !recentWorkout;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
        Power Track - Gym
      </h1>
      
      {shouldShowStartWorkoutCTA && (
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 text-white text-center shadow-xl transform transition-all hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Ready to crush your workout?</h2>
          <p className="text-lg mb-6">Track your progress and hit your goals!</p>
          <button 
            onClick={startNewWorkout}
            className="bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-lg flex items-center justify-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Workout
          </button>
        </div>
      )}
      
      <Calendar 
        workoutDays={workoutDays} 
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
      />
      
      {!shouldShowStartWorkoutCTA && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">
            {showNewWorkout ? 'New Workout' : recentWorkout ? 'Workout Details' : 'Recent Workouts'}
          </h2>
          
          {!showNewWorkout && (
            <button 
              onClick={startNewWorkout}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-4 py-2 rounded-full hover:shadow-lg transition-all"
            >
              {recentWorkout ? 'New Workout' : 'Start Workout'}
            </button>
          )}
        </div>
      )}
      
      {showNewWorkout && (
        <div className="mb-6 bg-gray-800 rounded-xl p-5 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-white">{formattedDate}</h3>
          
          {newWorkoutExercises.map(exercise => (
            <ExerciseEntry
              key={exercise.id}
              exerciseName={exercise.name}
              sets={exercise.sets}
              onSave={(name, sets) => handleSaveExercise(exercise.id, name, sets)}
              onRemove={() => handleRemoveExercise(exercise.id)}
            />
          ))}
          
          <div className="flex flex-col space-y-3 mt-6">
            <button 
              onClick={addNewExercise}
              className="bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Add Exercise
            </button>
            
            <button 
              onClick={saveWorkout}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Save Workout
            </button>
          </div>
        </div>
      )}
      
      {recentWorkout && (
        <div className="mb-6">
          <div className="bg-gray-800 rounded-xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                {new Date(recentWorkout.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </h3>
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {recentWorkout.exercises.length} exercises
              </span>
            </div>
            
            <div className="space-y-4">
              {recentWorkout.exercises.map((exercise, index) => (
                <div key={exercise.id} className="border-t border-gray-700 pt-3 first:border-t-0 first:pt-0">
                  <h4 className="font-medium text-pink-400">{exercise.name}</h4>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <div className="text-gray-400">Set</div>
                    <div className="text-gray-400">Reps</div>
                    <div className="text-gray-400">Weight</div>
                    
                    {exercise.sets.map((set, setIndex) => (
                      <React.Fragment key={setIndex}>
                        <div className="text-white">{setIndex + 1}</div>
                        <div className="text-white">{set.reps}</div>
                        <div className="text-white">{set.weight} kg</div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {!showNewWorkout && !recentWorkout && (
        <div className="mb-6">
          {workouts.slice(0, 3).map(workout => (
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
