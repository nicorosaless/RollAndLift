
import { Workout, Technique, Video } from '../types';

// Sample workout data
export const sampleWorkouts: Workout[] = [
  {
    id: '1',
    date: '2025-04-29',
    exercises: [
      {
        id: '1',
        name: 'Bench Press',
        sets: [
          { reps: 8, weight: 60 },
          { reps: 8, weight: 65 },
          { reps: 6, weight: 70 }
        ]
      },
      {
        id: '2',
        name: 'Incline Dumbbell Press',
        sets: [
          { reps: 10, weight: 22 },
          { reps: 10, weight: 22 },
          { reps: 8, weight: 24 }
        ]
      },
      {
        id: '3',
        name: 'Cable Flyes',
        sets: [
          { reps: 12, weight: 15 },
          { reps: 12, weight: 15 },
          { reps: 12, weight: 15 }
        ]
      }
    ]
  },
  {
    id: '2',
    date: '2025-04-27',
    exercises: [
      {
        id: '4',
        name: 'Squat',
        sets: [
          { reps: 8, weight: 100 },
          { reps: 8, weight: 100 },
          { reps: 6, weight: 110 }
        ]
      },
      {
        id: '5',
        name: 'Romanian Deadlift',
        sets: [
          { reps: 10, weight: 80 },
          { reps: 10, weight: 80 },
          { reps: 10, weight: 80 }
        ]
      },
      {
        id: '6',
        name: 'Leg Extension',
        sets: [
          { reps: 12, weight: 40 },
          { reps: 12, weight: 40 },
          { reps: 12, weight: 40 }
        ]
      }
    ]
  },
  {
    id: '3',
    date: '2025-04-25',
    exercises: [
      {
        id: '7',
        name: 'Pull-ups',
        sets: [
          { reps: 8, weight: 0 },
          { reps: 8, weight: 0 },
          { reps: 6, weight: 0 }
        ]
      },
      {
        id: '8',
        name: 'Barbell Row',
        sets: [
          { reps: 10, weight: 60 },
          { reps: 10, weight: 60 },
          { reps: 10, weight: 60 }
        ]
      },
      {
        id: '9',
        name: 'Lat Pulldown',
        sets: [
          { reps: 12, weight: 50 },
          { reps: 12, weight: 50 },
          { reps: 12, weight: 50 }
        ]
      },
      {
        id: '10',
        name: 'Face Pull',
        sets: [
          { reps: 15, weight: 15 },
          { reps: 15, weight: 15 },
          { reps: 15, weight: 15 }
        ]
      }
    ]
  }
];

// Sample jiu-jitsu techniques data structure
export const sampleTechniques: Technique[] = [
  {
    id: 'guard',
    name: 'Guard',
    children: [
      {
        id: 'closed-guard',
        name: 'Closed Guard',
        videoIds: ['video1', 'video2'],
        children: [
          {
            id: 'submissions-from-closed-guard',
            name: 'Submissions',
            videoIds: ['video3'],
            children: [
              {
                id: 'triangle-from-closed-guard',
                name: 'Triangle',
                videoIds: ['video4', 'video5']
              },
              {
                id: 'armbar-from-closed-guard',
                name: 'Armbar',
                videoIds: ['video6']
              }
            ]
          },
          {
            id: 'sweeps-from-closed-guard',
            name: 'Sweeps',
            videoIds: ['video7', 'video8']
          }
        ]
      },
      {
        id: 'half-guard',
        name: 'Half Guard',
        videoIds: ['video9'],
        children: [
          {
            id: 'knee-shield',
            name: 'Knee Shield',
            videoIds: ['video10']
          },
          {
            id: 'deep-half',
            name: 'Deep Half',
            videoIds: ['video11', 'video12']
          }
        ]
      },
      {
        id: 'open-guard',
        name: 'Open Guard',
        children: [
          {
            id: 'butterfly-guard',
            name: 'Butterfly Guard',
            videoIds: ['video13', 'video14']
          },
          {
            id: 'de-la-riva',
            name: 'De La Riva',
            videoIds: ['video15']
          },
          {
            id: 'spider-guard',
            name: 'Spider Guard',
            videoIds: ['video16']
          }
        ]
      }
    ]
  },
  {
    id: 'passing',
    name: 'Passing',
    children: [
      {
        id: 'closed-guard-passing',
        name: 'Closed Guard Passing',
        videoIds: ['video17', 'video18']
      },
      {
        id: 'open-guard-passing',
        name: 'Open Guard Passing',
        videoIds: ['video19']
      },
      {
        id: 'half-guard-passing',
        name: 'Half Guard Passing',
        videoIds: ['video20', 'video21']
      }
    ]
  },
  {
    id: 'top-positions',
    name: 'Top Positions',
    children: [
      {
        id: 'mount',
        name: 'Mount',
        videoIds: ['video22']
      },
      {
        id: 'side-control',
        name: 'Side Control',
        videoIds: ['video23', 'video24']
      },
      {
        id: 'north-south',
        name: 'North-South',
        videoIds: ['video25']
      },
      {
        id: 'back-control',
        name: 'Back Control',
        videoIds: ['video26', 'video27', 'video28']
      }
    ]
  }
];

// Sample videos data
export const sampleVideos: Video[] = [
  {
    id: 'video1',
    videoId: 'dQw4w9WgXcQ', // This is a placeholder YouTube video ID
    title: 'Closed Guard Overview and Control',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['closed-guard']
  },
  {
    id: 'video4',
    videoId: 'dQw4w9WgXcQ',
    title: 'Triangle Choke Setup from Closed Guard',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['triangle-from-closed-guard']
  },
  {
    id: 'video6',
    videoId: 'dQw4w9WgXcQ',
    title: 'Armbar from Closed Guard',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['armbar-from-closed-guard']
  },
  {
    id: 'video9',
    videoId: 'dQw4w9WgXcQ',
    title: 'Half Guard Fundamentals',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard']
  },
  {
    id: 'video13',
    videoId: 'dQw4w9WgXcQ',
    title: 'Butterfly Guard Sweeps',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['butterfly-guard']
  },
  {
    id: 'video20',
    videoId: 'dQw4w9WgXcQ',
    title: 'Half Guard Passing: Knee Cut',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passing']
  },
  {
    id: 'video26',
    videoId: 'dQw4w9WgXcQ',
    title: 'Back Control Finishing Sequences',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-control']
  },
  {
    id: 'video27',
    videoId: 'dQw4w9WgXcQ',
    title: 'Rear Naked Choke Mechanics',
    thumbnail: 'https://via.placeholder.com/480x360',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-control']
  }
];
