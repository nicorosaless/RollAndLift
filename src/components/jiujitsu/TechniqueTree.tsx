
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, FolderOpen, Folder } from 'lucide-react';

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
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 ${depth > 0 ? 'ml-4' : ''}`}>
        {techniques.map(technique => (
          <div 
            key={technique.id}
            className={`
              p-3 rounded-lg transition-all duration-200
              ${technique.videoIds?.length 
                ? 'bg-gradient-to-br from-secondary/80 to-secondary cursor-pointer hover:from-traccent/30 hover:to-secondary animate-fade-in' 
                : 'bg-secondary/60'
              }
              flex flex-col
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
                <div className="mr-2 text-trwhite">
                  {technique.children?.length ? (
                    expandedItems.includes(technique.id) ? (
                      <FolderOpen size={18} className="text-traccent" />
                    ) : (
                      <Folder size={18} />
                    )
                  ) : null}
                </div>
                <h3 className={`text-sm font-medium ${technique.videoIds?.length ? 'text-traccent' : 'text-trwhite'}`}>
                  {technique.name}
                </h3>
              </div>

              {technique.children?.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(technique.id);
                  }}
                  className="text-trgray-light hover:text-trwhite focus:outline-none"
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
                <span className="bg-traccent text-black text-xs px-2 py-0.5 rounded-full">
                  {technique.videoIds.length}
                </span>
              </div>
            )}

            {technique.children?.length > 0 && expandedItems.includes(technique.id) && (
              <div className="mt-3 animate-fade-in">
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
      <div className="space-y-6">
        {techniques.map(technique => (
          <div key={technique.id} className="mb-6">
            <div 
              className="flex items-center justify-between bg-secondary/80 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleExpand(technique.id)}
            >
              <div className="flex items-center">
                <div className="mr-3 text-trwhite">
                  {expandedItems.includes(technique.id) ? (
                    <FolderOpen size={20} className="text-trwhite" />
                  ) : (
                    <Folder size={20} />
                  )}
                </div>
                <h2 className="text-lg font-bold text-trwhite">{technique.name}</h2>
              </div>
              <ChevronRight 
                size={18}
                className={`transform transition-transform text-traccent ${expandedItems.includes(technique.id) ? 'rotate-90' : ''}`}
              />
            </div>
            
            {expandedItems.includes(technique.id) && technique.children && (
              <div className="mt-3 animate-fade-in">
                {renderChildTechniques(technique.children)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-secondary/30 rounded-lg p-4">
      {renderMainCategories()}
    </div>
  );
};

export default TechniqueTree;
