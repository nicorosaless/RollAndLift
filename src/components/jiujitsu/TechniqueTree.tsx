
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Video, Users, Shield, GitMerge, GitPullRequest, Zap, Star, Award, Play } from 'lucide-react';

interface Technique {
  id: string;
  name: string;
  children?: Technique[];
  videoIds?: string[];
}

interface TechniqueTreeProps {
  techniques: Technique[];
  onSelectTechnique: (techniqueId: string) => void;
}

const TechniqueTree: React.FC<TechniqueTreeProps> = ({ techniques, onSelectTechnique }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [hoveredTechnique, setHoveredTechnique] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleExpand = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const handleTechniqueClick = (technique: Technique) => {
    if (technique.videoIds?.length) {
      onSelectTechnique(technique.id);
      navigate(`/jiujitsu/technique/${technique.id}`);
    }
  };

  // Get appropriate icon for technique category
  const getTechniqueIcon = (name: string, index: number) => {
    if (name.includes('Back') || name.includes('Espalda')) return <GitPullRequest size={20} className="text-pink-400" />;
    if (name.includes('Guard') || name.includes('Guardia')) return <Shield size={20} className="text-purple-400" />;
    if (name.includes('Lock') || name.includes('Hook')) return <GitMerge size={20} className="text-blue-400" />;
    if (name.includes('Mount') || name.includes('Control')) return <Users size={20} className="text-green-400" />;
    if (name.includes('Half')) return <Star size={20} className="text-yellow-400" />;
    if (name.includes('Side') || name.includes('Escape')) return <Zap size={20} className="text-orange-400" />;
    return <Award size={20} className="text-fuchsia-400" />;
  };

  // Get an image URL based on technique name
  const getTechniqueImage = (name: string, index: number) => {
    const imageMapping: {[key: string]: string} = {
      'Back Attacks': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=250&fit=crop',
      'Guard Passing': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop',
      'Leg Locks': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
      'Pin Escapes': 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop',
      'Submission Holds': 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=250&fit=crop',
    };

    // Find partial matches in the technique name
    for (const key in imageMapping) {
      if (name.includes(key)) {
        return imageMapping[key];
      }
    }

    // Default image based on index
    const defaultImages = Object.values(imageMapping);
    return defaultImages[index % defaultImages.length];
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  const renderChildTechniques = (techniques: Technique[], depth = 0) => {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ${depth > 0 ? 'ml-4' : ''}`}>
        {techniques.map((technique, idx) => (
          <div 
            key={technique.id}
            className={`
              rounded-lg relative overflow-hidden group transition-all duration-300
              ${technique.videoIds?.length 
                ? 'cursor-pointer hover:scale-105 shadow-lg transform hover:shadow-xl' 
                : 'shadow-md'
              }
              ${depth === 0 ? 'border border-pink-500/20' : ''}
              backdrop-blur-sm
            `}
            onMouseEnter={() => technique.videoIds?.length && setHoveredTechnique(technique.id)}
            onMouseLeave={() => setHoveredTechnique(null)}
            onClick={() => {
              if (technique.videoIds?.length) {
                handleTechniqueClick(technique);
              } else if (technique.children?.length) {
                toggleExpand(technique.id);
              }
            }}
          >
            {/* Image background */}
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-800/40 z-10"></div>
              <img 
                src={getTechniqueImage(technique.name, idx)} 
                alt={technique.name}
                className="w-full h-full object-cover object-center" 
              />
              
              {/* Content overlay */}
              <div className="relative z-20 p-3 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="mr-2 bg-gradient-to-br from-purple-800/90 to-pink-700/70 p-1.5 rounded-lg shadow-inner">
                      {technique.children?.length ? (
                        getTechniqueIcon(technique.name, idx)
                      ) : technique.videoIds?.length ? (
                        <Video size={16} className="text-pink-300" />
                      ) : null}
                    </div>
                    <h3 className={`text-sm font-medium ${technique.videoIds?.length ? 'text-pink-300' : 'text-white'}`}>
                      {technique.name}
                    </h3>
                  </div>

                  {technique.children?.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(technique.id);
                      }}
                      className="text-purple-300 hover:text-white focus:outline-none transform transition-transform duration-300"
                    >
                      <ChevronRight
                        size={14}
                        className={`transform transition-transform duration-300 ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {technique.videoIds?.length > 0 && (
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center">
                      <Play size={12} className="text-pink-300 mr-1" />
                      <span className="text-xs text-pink-200">
                        {technique.videoIds.length} {technique.videoIds.length === 1 ? 'video' : 'videos'}
                      </span>
                    </div>
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs px-2 py-0.5 rounded-full shadow-lg">
                      Ver
                    </span>
                  </div>
                )}
              </div>
              
              {/* Video thumbnail preview on hover */}
              {hoveredTechnique === technique.id && technique.videoIds && technique.videoIds.length > 0 && (
                <div className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center animate-fade-in">
                  <div className="w-full p-2">
                    <img 
                      src={getYouTubeThumbnail(technique.videoIds[0])}
                      alt="Video preview"
                      className="w-full rounded-md shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-pink-600/80 rounded-full p-3 text-white">
                        <Play className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {technique.children?.length > 0 && expandedItems.includes(technique.id) && (
              <div className="mt-2 animate-fade-in p-3 bg-purple-900/50 border-t border-pink-500/20">
                {renderChildTechniques(technique.children, depth + 1)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderMainCategories = () => {
    return (
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 rounded-full blur-3xl"></div>
        
        {/* Main content - tabbed layout for main categories */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {techniques.map((technique, index) => (
              <button
                key={technique.id}
                onClick={() => toggleExpand(technique.id)}
                className={`
                  px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2
                  ${expandedItems.includes(technique.id) 
                    ? 'bg-gradient-to-r from-purple-700 to-pink-700 shadow-lg' 
                    : 'bg-purple-900/30 hover:bg-purple-800/40'
                  }
                `}
              >
                <div className={`p-1.5 rounded-md ${expandedItems.includes(technique.id) ? 'bg-white/10' : 'bg-purple-700/50'}`}>
                  {getTechniqueIcon(technique.name, index)}
                </div>
                <span className="text-sm font-medium">{technique.name}</span>
                <ChevronRight 
                  size={14}
                  className={`transform transition-transform duration-300 opacity-70
                    ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}
                  `}
                />
              </button>
            ))}
          </div>
          
          {/* Display expanded categories */}
          {techniques.map((technique) => (
            <div key={`content-${technique.id}`} className="mb-8">
              {expandedItems.includes(technique.id) && technique.children && (
                <div className="animate-fade-in">
                  <h3 className="text-lg font-medium mb-4 text-white bg-gradient-to-r from-purple-700/50 to-transparent pl-3 py-2 rounded-l-md">
                    {technique.name}
                  </h3>
                  {renderChildTechniques(technique.children)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-indigo-900/20 rounded-xl p-4 shadow-xl border border-pink-500/20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 h-20 w-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
      
      <h2 className="text-xl font-bold text-center mb-6">
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
          Sistema de Jiujitsu
        </span>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-2 rounded-full"></div>
      </h2>
      
      {renderMainCategories()}
    </div>
  );
};

export default TechniqueTree;
