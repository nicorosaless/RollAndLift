
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { sampleTechniques } from '../data/sampleData';
import { Technique } from '../types';

const TechniqueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Function to find the technique by ID in the nested structure
  const findTechnique = (techniques: Technique[], techniqueId: string): Technique | null => {
    for (const technique of techniques) {
      if (technique.id === techniqueId) {
        return technique;
      }
      
      if (technique.children && technique.children.length > 0) {
        const found = findTechnique(technique.children, techniqueId);
        if (found) return found;
      }
    }
    
    return null;
  };
  
  const technique = id ? findTechnique(sampleTechniques, id) : null;
  
  if (!technique) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-bold text-trwhite mb-4">Técnica no encontrada</h2>
        <Link 
          to="/jiujitsu"
          className="inline-flex items-center text-traccent hover:underline"
        >
          <ArrowRight size={16} className="mr-1" />
          Volver a la página de Jiu-Jitsu
        </Link>
      </div>
    );
  }

  // Default video ID (you can change this to any YouTube video ID)
  const defaultVideoId = technique.videoIds && technique.videoIds.length > 0 
    ? "dQw4w9WgXcQ" // Placeholder video ID
    : "dQw4w9WgXcQ"; // Default video if no videos in technique

  return (
    <div className="max-w-4xl mx-auto pt-2 pb-16">
      <div className="mb-6">
        <Link 
          to="/jiujitsu"
          className="inline-flex items-center text-trgray-light hover:text-trwhite mb-4 transition-colors"
        >
          <ArrowRight size={16} className="mr-1 rotate-180" />
          Volver a la página de Jiu-Jitsu
        </Link>
        <h1 className="text-2xl font-bold text-trwhite">{technique.name}</h1>
      </div>
      
      <div className="bg-secondary/30 rounded-lg overflow-hidden mb-6">
        <div className="aspect-video w-full">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${defaultVideoId}`}
            title={`${technique.name} demonstration`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="bg-secondary/30 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Descripción de la Técnica</h2>
        <p className="text-trgray-light mb-4">
          {technique.name} es una técnica fundamental en el Jiu-Jitsu brasileño que permite al practicante
          controlar y someter a su oponente mediante el uso efectivo de la posición y la palanca biomecánica.
          Esta técnica requiere práctica consistente y atención al detalle para lograr la perfección.
        </p>
        <p className="text-trgray-light">
          Los aspectos clave de esta técnica incluyen el control de posición, la presión aplicada
          y el timing correcto para maximizar su efectividad. Gordon Ryan ha perfeccionado esta técnica
          y demuestra variaciones avanzadas en sus instructivos.
        </p>
      </div>

      {technique.children && technique.children.length > 0 && (
        <div className="bg-secondary/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Técnicas relacionadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technique.children.map(childTechnique => (
              <Link 
                key={childTechnique.id}
                to={`/jiujitsu/technique/${childTechnique.id}`}
                className="p-3 bg-trgray-mid/50 rounded-md hover:bg-trgray-mid transition-colors flex justify-between items-center"
              >
                <span>{childTechnique.name}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechniqueDetailPage;
