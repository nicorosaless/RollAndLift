
import React, { useState } from 'react';

interface Set {
  reps: number;
  weight: number;
}

interface ExerciseEntryProps {
  exerciseName: string;
  sets: Set[];
  onSave: (name: string, sets: Set[]) => void;
  onRemove?: () => void;
  isNew?: boolean;
}

const ExerciseEntry: React.FC<ExerciseEntryProps> = ({ 
  exerciseName, 
  sets = [{reps: 8, weight: 20}], 
  onSave, 
  onRemove,
  isNew = false
}) => {
  const [name, setName] = useState(exerciseName);
  const [exerciseSets, setExerciseSets] = useState<Set[]>(sets);

  const addSet = () => {
    const lastSet = exerciseSets[exerciseSets.length - 1];
    setExerciseSets([...exerciseSets, { reps: lastSet?.reps || 8, weight: lastSet?.weight || 20 }]);
  };

  const updateSet = (index: number, field: keyof Set, value: number) => {
    const updatedSets = [...exerciseSets];
    updatedSets[index][field] = value;
    setExerciseSets(updatedSets);
  };

  const removeSet = (index: number) => {
    if (exerciseSets.length > 1) {
      const updatedSets = [...exerciseSets];
      updatedSets.splice(index, 1);
      setExerciseSets(updatedSets);
    }
  };

  const handleSave = () => {
    if (name.trim()) {
      onSave(name.trim(), exerciseSets);
    }
  };

  return (
    <div className={`mb-4 p-4 rounded-lg ${isNew ? 'border border-traccent bg-secondary/30' : 'bg-secondary'}`}>
      <div className="mb-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Exercise name"
          className="w-full bg-transparent border-b border-trgray-mid pb-1 focus:border-traccent focus:outline-none text-lg"
        />
      </div>
      
      {exerciseSets.map((set, index) => (
        <div key={index} className="flex items-center mb-2 gap-2">
          <div className="w-8 text-trgray-light text-sm">{index + 1}</div>
          <div className="flex-1 flex items-center gap-2">
            <input
              type="number"
              value={set.reps}
              onChange={(e) => updateSet(index, 'reps', parseInt(e.target.value) || 0)}
              className="w-16 input-field text-center"
              min="1"
            />
            <span className="text-xs text-trgray-light">reps</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <input
              type="number"
              value={set.weight}
              onChange={(e) => updateSet(index, 'weight', parseInt(e.target.value) || 0)}
              className="w-16 input-field text-center"
              min="0"
            />
            <span className="text-xs text-trgray-light">kg</span>
          </div>
          <button
            onClick={() => removeSet(index)}
            className="text-trgray-light hover:text-destructive"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
      
      <div className="flex justify-between mt-3">
        <button
          onClick={addSet}
          className="text-traccent flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          Add Set
        </button>
        
        <div className="flex gap-2">
          {onRemove && (
            <button
              onClick={onRemove}
              className="text-destructive"
            >
              Remove
            </button>
          )}
          <button
            onClick={handleSave}
            className="button-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseEntry;
