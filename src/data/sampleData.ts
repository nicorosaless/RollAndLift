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

// Sample jiu-jitsu techniques data structure with Gordon Ryan videos
export const sampleTechniques: Technique[] = [
  {
    id: 'back-attacks',
    name: 'Ataques a la Espalda (Back Attacks)',
    children: [
      {
        id: 'back-attack-system',
        name: 'Sistema Completo',
        videoIds: ['back-system']
      },
      {
        id: 'back-attack-details',
        name: 'Detalles',
        videoIds: ['back-details']
      },
      {
        id: 'leglocks-to-back',
        name: 'Leglocks to Back',
        videoIds: ['leglocks-back', 'heel-hook-back']
      },
      {
        id: 'back-take-techniques',
        name: 'Back Takes',
        videoIds: ['back-take-study', 'counter-roll-back', 'ebi-back', 'heel-hook-to-back']
      }
    ]
  },
  {
    id: 'guard-passing',
    name: 'Guard Passing',
    children: [
      {
        id: 'guard-pass-system',
        name: 'Sistema de Passing',
        videoIds: ['unstoppable-pass', 'passing-instructional', 'pass-study']
      },
      {
        id: 'gi-passing',
        name: 'Gi Guard Passing',
        videoIds: ['gi-passing']
      },
      {
        id: 'half-guard-passing',
        name: 'Half Guard Passing',
        videoIds: ['simple-advanced-passing', 'basic-half-passes', 'body-lock-pass', 'forcing-half-guard', 'effective-half-pass']
      },
      {
        id: 'closed-guard-passing',
        name: 'Closed Guard Passing',
        videoIds: ['escaping-closed']
      },
      {
        id: 'passing-to-control',
        name: 'Passing a Control',
        videoIds: ['adcc-2022-pass', 'basic-pass-side', 'toreando-side']
      }
    ]
  },
  {
    id: 'leg-locks',
    name: 'Leg Locks y Heel Hooks',
    children: [
      {
        id: 'leglock-fundamentals',
        name: 'Fundamentos',
        videoIds: ['perfect-leglocks']
      },
      {
        id: 'leglock-defense',
        name: 'Defensas',
        videoIds: ['front-stepping', 'roll-through', 'heel-hook-escape']
      },
      {
        id: 'leglock-offensive',
        name: 'Ofensiva',
        videoIds: ['heel-hook-to-back', 'leglocks-back-attacks', 'saddle-inside-ashi']
      },
      {
        id: 'leglock-escapes',
        name: 'Escapes y Contra-Locks',
        videoIds: ['escapes-counter-locks']
      }
    ]
  },
  {
    id: 'mount-control',
    name: 'Control y Sumisiones desde Mount',
    children: [
      {
        id: 'mount-control',
        name: 'Control de Mount',
        videoIds: ['options-mount', 'control-mount', 'system-mount', 'mount-control-breakdown', 'never-lose-mount']
      },
      {
        id: 'mount-techniques',
        name: 'Técnicas de Mount',
        videoIds: ['rolling-mount', 's-mount-compression', 'mount-crucifix', 'hand-fighting-mount']
      }
    ]
  },
  {
    id: 'half-guard',
    name: 'Half Guard y Sweeps',
    children: [
      {
        id: 'half-guard-basics',
        name: 'Fundamentos',
        videoIds: ['all-about-half-guard']
      },
      {
        id: 'half-guard-passes',
        name: 'Pases',
        videoIds: ['basic-half-passes', 'forcing-half-guard', 'effective-half-pass', 'basic-half-pass']
      },
      {
        id: 'half-guard-sweeps',
        name: 'Sweeps',
        videoIds: ['elbow-sweep']
      },
      {
        id: 'deep-half',
        name: 'Deep Half',
        videoIds: ['back-take-deep-half']
      }
    ]
  },
  {
    id: 'side-control',
    name: 'Side Control y Escapes',
    children: [
      {
        id: 'side-control-escapes',
        name: 'Escapes',
        videoIds: ['side-control-escapes', 'two-pathways', 'perfect-escapes']
      },
      {
        id: 'side-control-passing',
        name: 'Pases a Side Control',
        videoIds: ['basic-pass-side-control', 'escaping-shoulder-sankaku', 'toreando-side']
      }
    ]
  },
  {
    id: 'other-techniques',
    name: 'Otros Conceptos y Técnicas',
    children: [
      {
        id: 'sweeps',
        name: 'Sweeps',
        videoIds: ['tripod-sweep', 'shoulder-crunch-sweep']
      },
      {
        id: 'chokes',
        name: 'Estrangulaciones',
        videoIds: ['darce-choke']
      },
      {
        id: 'triangles',
        name: 'Triángulos',
        videoIds: ['triangle-favorite']
      },
      {
        id: 'back-takes',
        name: 'Back Takes',
        videoIds: ['arm-drag-back']
      },
      {
        id: 'armlocks',
        name: 'Armlocks',
        videoIds: ['wrist-control-armbar']
      },
      {
        id: 'kimuras',
        name: 'Kimuras',
        videoIds: ['butterfly-kimura', 'defending-kimura']
      },
      {
        id: 'butterfly',
        name: 'Butterfly Guard',
        videoIds: ['sumi-gaeshi']
      },
      {
        id: 'escapes',
        name: 'Escapes',
        videoIds: ['kipping-tutorial', 'escape-rubber-guard']
      },
      {
        id: 'setups',
        name: 'Setups',
        videoIds: ['ankle-grab-setups']
      },
      {
        id: 'concepts',
        name: 'Conceptos',
        videoIds: ['study-progress', 'effective-habits']
      }
    ]
  }
];

// Sample videos data with Gordon Ryan videos
export const sampleVideos: Video[] = [
  // Back Attacks
  {
    id: 'back-system',
    videoId: 'WO3ZGcVItRM',
    title: 'Sistema Completo de Back Attacks - Gordon Ryan',
    thumbnail: 'https://img.youtube.com/vi/WO3ZGcVItRM/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-attack-system']
  },
  {
    id: 'back-details',
    videoId: 'BpGikzY3Yx4',
    title: 'Detalles que Hacen Peligrosos los Back Attacks',
    thumbnail: 'https://img.youtube.com/vi/BpGikzY3Yx4/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-attack-details']
  },
  {
    id: 'leglocks-back',
    videoId: 'a4VGiGUQrWU',
    title: 'Leglocks to Back Attacks by Gordon Ryan',
    thumbnail: 'https://img.youtube.com/vi/a4VGiGUQrWU/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglocks-to-back']
  },
  {
    id: 'back-take-study',
    videoId: 'Z43xvGNGvAc',
    title: 'Estudio de Back Takes - Gordon Ryan',
    thumbnail: 'https://img.youtube.com/vi/Z43xvGNGvAc/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-take-techniques']
  },
  {
    id: 'counter-roll-back',
    videoId: 'ey2dEMpqpws',
    title: 'Tomar la Espalda Cuando el Oponente Contrarresta el Roll',
    thumbnail: 'https://img.youtube.com/vi/ey2dEMpqpws/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-take-techniques']
  },
  {
    id: 'ebi-back',
    videoId: 'GoccKA-DlfA',
    title: 'Atacar la Espalda como un Campeón de EBI',
    thumbnail: 'https://img.youtube.com/vi/GoccKA-DlfA/hqdefault.jpg',
    instructor: 'Gordon Ryan/Andrew Tackett',
    techniqueIds: ['back-take-techniques']
  },
  {
    id: 'heel-hook-to-back',
    videoId: 'IYOExcrbzN4',
    title: 'Heel Hook To Back by Gordon Ryan',
    thumbnail: 'https://img.youtube.com/vi/IYOExcrbzN4/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglocks-to-back', 'leglock-offensive']
  },
  
  // Guard Passing
  {
    id: 'unstoppable-pass',
    videoId: '_H1B40WK8ps',
    title: 'Guard Pass Imparable de Gordon Ryan',
    thumbnail: 'https://img.youtube.com/vi/_H1B40WK8ps/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['guard-pass-system']
  },
  {
    id: 'passing-instructional',
    videoId: 'eohQbS_JKyo',
    title: 'Sistema de Guard Passing - Instructional',
    thumbnail: 'https://img.youtube.com/vi/eohQbS_JKyo/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['guard-pass-system']
  },
  {
    id: 'pass-study',
    videoId: 'PLNbZ1gPk7zqzg_uEY8Jc_k-bKFpsBsosz',
    title: 'Estudio de Guard Pass',
    thumbnail: 'https://img.youtube.com/vi/PLNbZ1gPk7zqzg_uEY8Jc_k-bKFpsBsosz/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['guard-pass-system']
  },
  {
    id: 'gi-passing',
    videoId: 'tVmjd6Bi7uw',
    title: 'Guard Passing con Gi',
    thumbnail: 'https://img.youtube.com/vi/tVmjd6Bi7uw/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['gi-passing']
  },
  {
    id: 'simple-advanced-passing',
    videoId: 'XGBHXO-EMk0',
    title: 'Método Simple para Guard Passing Avanzado',
    thumbnail: 'https://img.youtube.com/vi/XGBHXO-EMk0/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passing']
  },
  {
    id: 'basic-half-passes',
    videoId: 'kmsMmojmLNI',
    title: 'Pases de Half Guard Básicos',
    thumbnail: 'https://img.youtube.com/vi/kmsMmojmLNI/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passing', 'half-guard-passes']
  },
  {
    id: 'body-lock-pass',
    videoId: '2cR93buSNr8',
    title: 'Body Lock Guard Pass',
    thumbnail: 'https://img.youtube.com/vi/2cR93buSNr8/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passing']
  },
  {
    id: 'escaping-closed',
    videoId: 'RDrrWZosCMw',
    title: 'Escaping Closed Guard',
    thumbnail: 'https://img.youtube.com/vi/RDrrWZosCMw/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['closed-guard-passing']
  },
  {
    id: 'adcc-2022-pass',
    videoId: '9VdMAXqLXHA',
    title: 'ADCC 2022 Guard Pass',
    thumbnail: 'https://img.youtube.com/vi/9VdMAXqLXHA/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['passing-to-control']
  },
  {
    id: 'forcing-half-guard',
    videoId: 'war-m290Fc0',
    title: 'Forzar Half Guard',
    thumbnail: 'https://img.youtube.com/vi/war-m290Fc0/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passing', 'half-guard-passes']
  },
  {
    id: 'effective-half-pass',
    videoId: 'RQf5WZNLmEA',
    title: 'Pase Efectivo de Half Guard',
    thumbnail: 'https://img.youtube.com/vi/RQf5WZNLmEA/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passing', 'half-guard-passes']
  },
  {
    id: 'basic-pass-side',
    videoId: 'GSWnVK7cJu4',
    title: 'Pase Básico a Side Control',
    thumbnail: 'https://img.youtube.com/vi/GSWnVK7cJu4/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['passing-to-control']
  },
  {
    id: 'toreando-side',
    videoId: 'ukI0nq-Ovek',
    title: 'Toreando a Side Control',
    thumbnail: 'https://img.youtube.com/vi/ukI0nq-Ovek/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['passing-to-control', 'side-control-passing']
  },
  
  // Leg Locks
  {
    id: 'perfect-leglocks',
    videoId: '_IxtobCktAQ',
    title: 'Perfeccionar Leglocks en No Gi',
    thumbnail: 'https://img.youtube.com/vi/_IxtobCktAQ/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-fundamentals']
  },
  {
    id: 'front-stepping',
    videoId: '0vkKdiCT00c',
    title: 'Defensa de Leg Lock - Front Stepping Options',
    thumbnail: 'https://img.youtube.com/vi/0vkKdiCT00c/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-defense']
  },
  {
    id: 'roll-through',
    videoId: 'MqtG9kuVt-Q',
    title: 'Escapes de Leg Lock - Roll Through',
    thumbnail: 'https://img.youtube.com/vi/MqtG9kuVt-Q/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-defense']
  },
  {
    id: 'heel-hook-escape',
    videoId: 'uxCWCwnF6EQ',
    title: 'Escape de Heel Hook',
    thumbnail: 'https://img.youtube.com/vi/uxCWCwnF6EQ/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-defense']
  },
  {
    id: 'leglocks-back-attacks',
    videoId: 'wDoYA_In098',
    title: 'Leglocks to Back Attacks',
    thumbnail: 'https://img.youtube.com/vi/wDoYA_In098/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-offensive']
  },
  {
    id: 'saddle-inside-ashi',
    videoId: 'UQ3gu9Qm5ME',
    title: 'Saddle to Inside Ashi Heel Hook',
    thumbnail: 'https://img.youtube.com/vi/UQ3gu9Qm5ME/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-offensive']
  },
  {
    id: 'escapes-counter-locks',
    videoId: 'bjjfanatics-123',
    title: 'Escapes y Contra-Locks',
    thumbnail: 'https://via.placeholder.com/480x360?text=Escapes+y+Contra-Locks',
    instructor: 'Gordon Ryan',
    techniqueIds: ['leglock-escapes']
  },
  
  // Mount
  {
    id: 'options-mount',
    videoId: 'X3X6PAexmn8',
    title: 'Opciones desde Mount',
    thumbnail: 'https://img.youtube.com/vi/X3X6PAexmn8/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-control']
  },
  {
    id: 'control-mount',
    videoId: 'kft2AkvKhWU',
    title: 'Mejor Forma de Controlar Mount',
    thumbnail: 'https://img.youtube.com/vi/kft2AkvKhWU/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-control']
  },
  {
    id: 'system-mount',
    videoId: 'Y1Ud6fzt5J8',
    title: 'Sistema desde Mount',
    thumbnail: 'https://img.youtube.com/vi/Y1Ud6fzt5J8/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-control']
  },
  {
    id: 'mount-control-breakdown',
    videoId: 'IOoB_Ryg1Ng',
    title: 'Análisis del Control de Mount',
    thumbnail: 'https://img.youtube.com/vi/IOoB_Ryg1Ng/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-control']
  },
  {
    id: 'rolling-mount',
    videoId: 'f9C45paOm-o',
    title: 'Rolling to Mount',
    thumbnail: 'https://img.youtube.com/vi/f9C45paOm-o/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-techniques']
  },
  {
    id: 's-mount-compression',
    videoId: '1e8b3vb-reddit',
    title: 'S Mount Chest Compression',
    thumbnail: 'https://via.placeholder.com/480x360?text=S+Mount+Compression',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-techniques']
  },
  {
    id: 'mount-crucifix',
    videoId: 'BLv_uIiwjws',
    title: 'Cambio de Mount a Mounted Crucifix',
    thumbnail: 'https://img.youtube.com/vi/BLv_uIiwjws/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-techniques']
  },
  {
    id: 'hand-fighting-mount',
    videoId: 'tyI3aszI4qo',
    title: 'Hand Fighting desde Mount',
    thumbnail: 'https://img.youtube.com/vi/tyI3aszI4qo/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-techniques']
  },
  {
    id: 'never-lose-mount',
    videoId: 'X3X6PAexmn8',
    title: 'Nunca Perder la Posición de Mount',
    thumbnail: 'https://img.youtube.com/vi/X3X6PAexmn8/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['mount-control']
  },
  
  // Half Guard
  {
    id: 'all-about-half-guard',
    videoId: 'jbxv4EIcRlE',
    title: 'Todo sobre Half Guard No Gi',
    thumbnail: 'https://img.youtube.com/vi/jbxv4EIcRlE/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-basics']
  },
  {
    id: 'basic-half-pass',
    videoId: '3N4U8cMhe9o',
    title: 'Pase Básico de Half Guard',
    thumbnail: 'https://img.youtube.com/vi/3N4U8cMhe9o/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-passes']
  },
  {
    id: 'elbow-sweep',
    videoId: 'IIB9MEXMbeU',
    title: '2 on 1 Elbow Sweep',
    thumbnail: 'https://img.youtube.com/vi/IIB9MEXMbeU/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['half-guard-sweeps']
  },
  {
    id: 'back-take-deep-half',
    videoId: 'PLNbZ1gPk7zqzg_uEY8Jc_k-bKFpsBsosz',
    title: 'Back Take Against Deep Half Guard',
    thumbnail: 'https://img.youtube.com/vi/PLNbZ1gPk7zqzg_uEY8Jc_k-bKFpsBsosz/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['deep-half']
  },
  
  // Side Control
  {
    id: 'side-control-escapes',
    videoId: '7deK4oDgbDU',
    title: 'Escapes de Side Control',
    thumbnail: 'https://img.youtube.com/vi/7deK4oDgbDU/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['side-control-escapes']
  },
  {
    id: 'two-pathways',
    videoId: 'sKuBvSqC-Y0',
    title: '2 Caminos para Escapar',
    thumbnail: 'https://img.youtube.com/vi/sKuBvSqC-Y0/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['side-control-escapes']
  },
  {
    id: 'perfect-escapes',
    videoId: '0pzF4_ltfJQ',
    title: 'Escapes Perfectos de Mount, Side Control y North South',
    thumbnail: 'https://img.youtube.com/vi/0pzF4_ltfJQ/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['side-control-escapes']
  },
  {
    id: 'basic-pass-side-control',
    videoId: 'R5ErDGF7FQA',
    title: 'Pase Básico a Side Control',
    thumbnail: 'https://img.youtube.com/vi/R5ErDGF7FQA/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['side-control-passing']
  },
  {
    id: 'escaping-shoulder-sankaku',
    videoId: 'nnz893Cnwzk',
    title: 'Escapar de Top Side Shoulder Sankaku',
    thumbnail: 'https://img.youtube.com/vi/nnz893Cnwzk/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['side-control-passing']
  },
  
  // Other Techniques
  {
    id: 'tripod-sweep',
    videoId: 'WL6qRSLnymU',
    title: 'Tripod Sweep',
    thumbnail: 'https://img.youtube.com/vi/WL6qRSLnymU/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['sweeps']
  },
  {
    id: 'darce-choke',
    videoId: 'Gordonlovesjiujitsu',
    title: "Darce (D'arce Choke)",
    thumbnail: 'https://via.placeholder.com/480x360?text=Darce+Choke',
    instructor: 'Gordon Ryan',
    techniqueIds: ['chokes']
  },
  {
    id: 'study-progress',
    videoId: 'yuYPAfuLllc',
    title: 'Estudio y Progreso en Jiujitsu',
    thumbnail: 'https://img.youtube.com/vi/yuYPAfuLllc/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['concepts']
  },
  {
    id: 'triangle-favorite',
    videoId: 'Gordonlovesjiujitsu',
    title: 'Triángulo - Forma favorita',
    thumbnail: 'https://via.placeholder.com/480x360?text=Triangle',
    instructor: 'Gordon Ryan',
    techniqueIds: ['triangles']
  },
  {
    id: 'arm-drag-back',
    videoId: 'BJJ.Fanatics',
    title: 'Arm Drag to Back Take',
    thumbnail: 'https://via.placeholder.com/480x360?text=Arm+Drag+to+Back+Take',
    instructor: 'Gordon Ryan',
    techniqueIds: ['back-takes']
  },
  {
    id: 'wrist-control-armbar',
    videoId: 'BJJ.Fanatics',
    title: 'Wrist Control to Armbar',
    thumbnail: 'https://via.placeholder.com/480x360?text=Wrist+Control+to+Armbar',
    instructor: 'Gordon Ryan',
    techniqueIds: ['armlocks']
  },
  {
    id: 'butterfly-kimura',
    videoId: 'gordon-kimura',
    title: 'Kimura desde Butterfly Guard',
    thumbnail: 'https://via.placeholder.com/480x360?text=Kimura+desde+Butterfly',
    instructor: 'Gordon Ryan',
    techniqueIds: ['kimuras']
  },
  {
    id: 'sumi-gaeshi',
    videoId: 'gordon-sumi',
    title: 'Sumi Gaeshi (Butterfly Sweep)',
    thumbnail: 'https://via.placeholder.com/480x360?text=Sumi+Gaeshi',
    instructor: 'Gordon Ryan',
    techniqueIds: ['butterfly']
  },
  {
    id: 'kipping-tutorial',
    videoId: 'gordon-kipping',
    title: 'Kipping Tutorial',
    thumbnail: 'https://via.placeholder.com/480x360?text=Kipping+Tutorial',
    instructor: 'Gordon Ryan',
    techniqueIds: ['escapes']
  },
  {
    id: 'shoulder-crunch-sweep',
    videoId: 'gordon-shoulder-sweep',
    title: 'Shoulder Crunch Sweep',
    thumbnail: 'https://via.placeholder.com/480x360?text=Shoulder+Crunch+Sweep',
    instructor: 'Gordon Ryan',
    techniqueIds: ['sweeps']
  },
  {
    id: 'escape-rubber-guard',
    videoId: 'jhUFkkF-t94',
    title: 'Escape de Rubber Guard',
    thumbnail: 'https://img.youtube.com/vi/jhUFkkF-t94/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['escapes']
  },
  {
    id: 'defending-kimura',
    videoId: 'XBuC2qumy1Y',
    title: 'Defensa de Kimura',
    thumbnail: 'https://img.youtube.com/vi/XBuC2qumy1Y/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['kimuras']
  },
  {
    id: 'ankle-grab-setups',
    videoId: 'qzae5wyQHw8',
    title: 'Ankle Grab Setups',
    thumbnail: 'https://img.youtube.com/vi/qzae5wyQHw8/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['setups']
  },
  {
    id: 'effective-habits',
    videoId: '8XqIZtf1FPw',
    title: 'Hábitos Efectivos para Mejorar en Jiujitsu',
    thumbnail: 'https://img.youtube.com/vi/8XqIZtf1FPw/hqdefault.jpg',
    instructor: 'Gordon Ryan',
    techniqueIds: ['concepts']
  }
];
