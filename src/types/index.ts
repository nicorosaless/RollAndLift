
export interface Set {
  reps: number;
  weight: number;
}

export interface Exercise {
  id: string;
  name: string;
  sets: Set[];
}

export interface Workout {
  id: string;
  date: string;
  exercises: Exercise[];
}

export interface Video {
  id: string;
  videoId: string;
  title: string;
  thumbnail: string;
  instructor: string;
  techniqueIds: string[];
}

export interface Technique {
  id: string;
  name: string;
  children?: Technique[];
  videoIds?: string[];
}
