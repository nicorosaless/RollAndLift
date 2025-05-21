
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, FolderOpen, Folder, Video } from 'lucide-react';

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
      // Navigate to the technique detail page
      navigate(`/jiujitsu/technique/${technique.id}`);
    }
  };

  const renderChildTechniques = (techniques: Technique[], depth = 0) => {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 ${depth > 0 ? 'ml-4' : ''}`}>
        {techniques.map(technique => (
          <div 
            key={technique.id}
            className={`
              p-3 rounded-lg transition-all duration-200 relative
              ${technique.videoIds?.length 
                ? 'bg-gradient-to-br from-purple-600/80 to-pink-500/60 cursor-pointer hover:from-pink-500/80 hover:to-purple-600/80 animate-fade-in' 
                : 'bg-purple-900/50'
              }
              flex flex-col
              ${depth === 0 ? 'border-2 border-pink-500/30' : ''}
            `}
            onClick={() => {
              if (technique.videoIds?.length) {
                handleTechniqueClick(technique);
              } else if (technique.children?.length) {
                toggleExpand(technique.id);
              }
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-2 text-white">
                  {technique.children?.length ? (
                    expandedItems.includes(technique.id) ? (
                      <FolderOpen size={18} className="text-pink-400" />
                    ) : (
                      <Folder size={18} className="text-purple-300" />
                    )
                  ) : technique.videoIds?.length ? (
                    <Video size={18} className="text-pink-400" />
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
                  className="text-purple-300 hover:text-white focus:outline-none"
                >
                  <ChevronRight
                    size={16}
                    className={`transform transition-transform ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}`}
                  />
                </button>
              )}
            </div>

            {technique.videoIds?.length > 0 && (
              <div className="mt-1.5 flex justify-end">
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {technique.videoIds.length}
                </span>
              </div>
            )}

            {technique.children?.length > 0 && expandedItems.includes(technique.id) && (
              <div className="mt-3 animate-fade-in">
                {renderChildTechniques(technique.children, depth + 1)}
              </div>
            )}
            
            {/* Add connecting lines for graph-like appearance */}
            {depth > 0 && (
              <div className="absolute -left-4 top-1/2 w-4 border-t border-pink-500/50"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderMainCategories = () => {
    return (
      <div className="space-y-6">
        {techniques.map((technique, index) => (
          <div key={technique.id} className="mb-8 relative">
            {index > 0 && (
              <div className="absolute -top-4 left-1/2 h-4 border-l border-pink-500/50"></div>
            )}
            
            <div 
              className="flex items-center justify-between bg-gradient-to-r from-purple-900/90 to-purple-700/80 p-4 rounded-lg cursor-pointer border-l-4 border-pink-500"
              onClick={() => toggleExpand(technique.id)}
            >
              <div className="flex items-center">
                <div className="mr-3 text-white">
                  {expandedItems.includes(technique.id) ? (
                    <FolderOpen size={20} className="text-pink-400" />
                  ) : (
                    <Folder size={20} className="text-purple-300" />
                  )}
                </div>
                <h2 className="text-lg font-bold text-white">{technique.name}</h2>
              </div>
              <ChevronRight 
                size={18}
                className={`transform transition-transform text-pink-400 ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}`}
              />
            </div>
            
            {expandedItems.includes(technique.id) && technique.children && (
              <div className="mt-4 animate-fade-in relative">
                <div className="absolute -top-px left-6 h-4 border-l border-pink-500/50"></div>
                {renderChildTechniques(technique.children)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-purple-900/30 rounded-lg p-6 shadow-lg border border-pink-500/20">
      <h2 className="text-xl font-bold text-center mb-6 text-white">
        Sistema de Técnicas de <span className="text-pink-400">Jiu-Jitsu</span>
      </h2>
      {renderMainCategories()}
    </div>
  );
};

export default TechniqueTree;
