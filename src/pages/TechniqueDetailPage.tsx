
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Video, Play, Link2 } from 'lucide-react';
import { sampleTechniques, sampleVideos } from '../data/sampleData';
import { Technique, Video as VideoType } from '../types';

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
  
  // Get videos related to this technique
  const relatedVideos = technique?.videoIds?.map(videoId => 
    sampleVideos.find(video => video.id === videoId)
  ).filter(Boolean) as VideoType[];
  
  // Find parent technique
  const findParentTechnique = (techniques: Technique[], techniqueId: string, parent?: Technique): Technique | null => {
    for (const technique of techniques) {
      if (technique.id === techniqueId) {
        return parent || null;
      }
      
      if (technique.children && technique.children.length > 0) {
        const found = findParentTechnique(technique.children, techniqueId, technique);
        if (found) return found;
      }
    }
    
    return null;
  };
  
  const parentTechnique = id ? findParentTechnique(sampleTechniques, id) : null;
  
  // Find related techniques (siblings)
  const getSiblingTechniques = (): Technique[] => {
    if (!parentTechnique || !parentTechnique.children) return [];
    return parentTechnique.children.filter(child => child.id !== id);
  };
  
  const siblingTechniques = getSiblingTechniques();

  if (!technique) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-bold text-white mb-4">Técnica no encontrada</h2>
        <Link 
          to="/jiujitsu"
          className="inline-flex items-center text-pink-400 hover:underline"
        >
          <ArrowRight size={16} className="mr-1 rotate-180" />
          Volver a la página de Jiu-Jitsu
        </Link>
      </div>
    );
  }

  // Default video ID from the first video
  const defaultVideoId = relatedVideos && relatedVideos.length > 0 
    ? relatedVideos[0].videoId
    : "dQw4w9WgXcQ"; // Default video if no videos in technique

  return (
    <div className="max-w-4xl mx-auto pt-2 pb-16">
      <div className="mb-6">
        <Link 
          to="/jiujitsu"
          className="inline-flex items-center text-purple-300 hover:text-pink-400 mb-4 transition-colors"
        >
          <ArrowRight size={16} className="mr-1 rotate-180" />
          Volver a la página de Jiu-Jitsu
        </Link>
        
        {parentTechnique && (
          <div className="flex items-center gap-2 text-sm text-purple-300 mb-2">
            <Link to={`/jiujitsu/technique/${parentTechnique.id}`} className="hover:text-pink-400">
              {parentTechnique.name}
            </Link>
            <ArrowRight size={12} />
            <span className="text-white">{technique.name}</span>
          </div>
        )}
        
        <h1 className="text-2xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-500 inline-block text-transparent bg-clip-text">
          {technique.name}
        </h1>
      </div>
      
      <div className="bg-purple-900/30 rounded-lg overflow-hidden mb-6 shadow-xl border border-pink-500/20">
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

      {relatedVideos && relatedVideos.length > 1 && (
        <div className="bg-purple-900/30 rounded-lg p-6 mb-6 shadow-lg border border-pink-500/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Video size={20} className="text-pink-400 mr-2" />
            <span>Videos Relacionados</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedVideos.map(video => (
              <a 
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-800/30 hover:bg-purple-800/50 rounded-md transition-colors flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all">
                    <Play size={16} className="text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium text-white group-hover:text-pink-300 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-purple-300 mt-1">{video.instructor}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {siblingTechniques.length > 0 && (
        <div className="bg-purple-900/30 rounded-lg p-6 shadow-lg border border-pink-500/20">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Link2 size={20} className="text-pink-400 mr-2" />
            <span>Técnicas relacionadas</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {siblingTechniques.map(tech => (
              <Link 
                key={tech.id}
                to={`/jiujitsu/technique/${tech.id}`}
                className="p-3 bg-gradient-to-br from-purple-800/50 to-purple-700/30 hover:from-pink-500/30 hover:to-purple-700/30 rounded-md transition-colors flex justify-between items-center"
              >
                <span className="text-white">{tech.name}</span>
                <ArrowRight size={14} className="text-pink-400" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechniqueDetailPage;
