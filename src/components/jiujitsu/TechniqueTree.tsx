
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

  const renderTechnique = (technique: Technique, depth = 0) => {
    const hasChildren = technique.children && technique.children.length > 0;
    const isExpanded = expandedItems.includes(technique.id);
    const hasTechniqueVideos = technique.videoIds && technique.videoIds.length > 0;
    
    return (
      <div key={technique.id} className="mb-1">
        <div 
          className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 ${depth > 0 ? 'ml-6' : ''} 
            ${hasTechniqueVideos ? 'cursor-pointer hover:bg-secondary/80' : ''}`}
          onClick={() => {
            if (hasTechniqueVideos) {
              handleTechniqueClick(technique);
            }
            if (hasChildren) {
              toggleExpand(technique.id);
            }
          }}
        >
          {/* Icon based on technique type */}
          <div className="mr-2 text-trgray-light">
            {hasChildren ? (
              isExpanded ? (
                <FolderOpen size={18} className="text-trwhite" />
              ) : (
                <Folder size={18} />
              )
            ) : (
              <div className="w-[18px]" /> // Empty space for alignment
            )}
          </div>
          
          {/* Expansion arrow for items with children */}
          {hasChildren && (
            <button 
              className="mr-2 text-trgray-light hover:text-trwhite focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(technique.id);
              }}
            >
              <ChevronRight 
                size={16}
                className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}
              />
            </button>
          )}
          
          {/* Technique name */}
          <span 
            className={`${hasTechniqueVideos ? 'text-traccent font-medium' : 'text-trwhite'}`}
          >
            {technique.name}
          </span>
          
          {/* Video count badge */}
          {hasTechniqueVideos && (
            <span className="ml-2 bg-traccent text-black text-xs px-2 py-0.5 rounded-full">
              {technique.videoIds.length}
            </span>
          )}
        </div>
        
        {/* Children techniques */}
        {hasChildren && isExpanded && (
          <div className="border-l-2 border-trgray-mid ml-4 pl-2 animate-fade-in">
            {technique.children!.map(child => renderTechnique(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-secondary/30 rounded-lg p-2">
      {techniques.map(technique => renderTechnique(technique))}
    </div>
  );
};

export default TechniqueTree;
