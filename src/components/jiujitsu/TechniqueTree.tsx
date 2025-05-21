
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Video, Users, Shield, GitMerge, GitPullRequest, Zap, Star, Award } from 'lucide-react';

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

  const renderChildTechniques = (techniques: Technique[], depth = 0) => {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ${depth > 0 ? 'ml-6' : ''}`}>
        {techniques.map((technique, idx) => (
          <div 
            key={technique.id}
            className={`
              rounded-lg relative overflow-hidden group aspect-square
              ${technique.videoIds?.length 
                ? 'cursor-pointer transition-all duration-300 transform hover:scale-105' 
                : ''
              }
              ${depth === 0 ? 'border border-pink-500/20' : ''}
              shadow-lg backdrop-blur-sm h-full
            `}
            onClick={() => {
              if (technique.videoIds?.length) {
                handleTechniqueClick(technique);
              } else if (technique.children?.length) {
                toggleExpand(technique.id);
              }
            }}
            style={{
              perspective: '1000px',
              transform: technique.videoIds?.length ? 'translateZ(0)' : 'none'
            }}
          >
            {/* Image background */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-800/40 z-10"></div>
              <img 
                src={getTechniqueImage(technique.name, idx)} 
                alt={technique.name}
                className="w-full h-full object-cover object-center" 
              />
            </div>
            
            {/* Content overlay */}
            <div className="relative z-20 p-5 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="mr-3 bg-gradient-to-br from-purple-800/90 to-pink-700/70 p-2 rounded-lg shadow-inner">
                    {technique.children?.length ? (
                      getTechniqueIcon(technique.name, idx)
                    ) : technique.videoIds?.length ? (
                      <Video size={18} className="text-pink-300" />
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
                      size={16}
                      className={`transform transition-transform duration-300 ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}`}
                    />
                  </button>
                )}
              </div>

              {technique.videoIds?.length > 0 && (
                <div className="mt-3 flex justify-end">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs px-2.5 py-1 rounded-full shadow-lg">
                    {technique.videoIds.length} videos
                  </span>
                </div>
              )}

              {technique.children?.length > 0 && expandedItems.includes(technique.id) && (
                <div className="mt-4 animate-fade-in">
                  {renderChildTechniques(technique.children, depth + 1)}
                </div>
              )}
              
              {/* Decorative elements */}
              {technique.videoIds?.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/70 via-purple-500/70 to-indigo-500/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              )}
            </div>
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
        
        {/* Main content */}
        <div className="relative z-10 space-y-8">
          {techniques.map((technique, index) => (
            <div key={technique.id} className="mb-10 relative">
              {/* Connecting vertical line */}
              {index > 0 && (
                <div className="absolute -top-8 left-1/2 h-8 border-l-2 border-pink-500/40"></div>
              )}
              
              <div className="relative">
                {/* Main category card with image background - now more square */}
                <div 
                  className="flex items-center justify-between p-5 rounded-xl cursor-pointer border-l-4 border-pink-500 shadow-lg backdrop-blur-sm overflow-hidden relative aspect-video md:aspect-[4/3]"
                  onClick={() => toggleExpand(technique.id)}
                >
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/70 z-10"></div>
                    <img 
                      src={getTechniqueImage(technique.name, index)} 
                      alt={technique.name}
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>

                  <div className="flex items-center relative z-20">
                    <div className="mr-4 p-3 bg-gradient-to-br from-purple-700/90 to-pink-700/70 rounded-lg shadow-xl">
                      {getTechniqueIcon(technique.name, index)}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {technique.name}
                      </h2>
                      <p className="text-sm text-purple-200/80">
                        {technique.children?.length || 0} técnicas • {
                          technique.children?.reduce((count, child) => 
                            count + (child.videoIds?.length || 0), 0)
                        } videos
                      </p>
                    </div>
                  </div>
                  <ChevronRight 
                    size={20}
                    className={`transform transition-transform duration-300 text-pink-400 relative z-20 ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}`}
                  />
                </div>
              </div>
              
              {expandedItems.includes(technique.id) && technique.children && (
                <div className="mt-6 animate-fade-in relative">
                  <div className="absolute -top-2 left-10 h-6 border-l-2 border-pink-500/40"></div>
                  <div className="absolute top-4 left-10 w-6 border-t-2 border-pink-500/40"></div>
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
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/30 to-indigo-900/20 rounded-xl p-8 shadow-xl border border-pink-500/20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 h-20 w-20 bg-indigo-500/5 rounded-full blur-2xl"></div>
      
      <h2 className="text-2xl font-bold text-center mb-8">
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
          Sistema de Jiujitsu
        </span>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-2 rounded-full"></div>
      </h2>
      
      {renderMainCategories()}
    </div>
  );
};

export default TechniqueTree;
