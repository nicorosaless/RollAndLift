
import React, { useState } from 'react';

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

  const toggleExpand = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const renderTechnique = (technique: Technique, depth = 0) => {
    const hasChildren = technique.children && technique.children.length > 0;
    const isExpanded = expandedItems.includes(technique.id);
    
    return (
      <div key={technique.id} className="mb-1">
        <div 
          className={`flex items-center py-2 px-3 rounded-md ${depth > 0 ? 'ml-4' : ''} 
            ${technique.videoIds?.length ? 'cursor-pointer hover:bg-secondary' : ''}`}
          onClick={() => {
            if (technique.videoIds?.length) {
              onSelectTechnique(technique.id);
            }
            if (hasChildren) {
              toggleExpand(technique.id);
            }
          }}
        >
          {hasChildren && (
            <button 
              className="mr-2 text-trgray-light hover:text-trwhite focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(technique.id);
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          <span className={technique.videoIds?.length ? 'text-traccent' : ''}>
            {technique.name}
          </span>
          
          {technique.videoIds && technique.videoIds.length > 0 && (
            <span className="ml-2 bg-traccent text-black text-xs px-2 py-0.5 rounded-full">
              {technique.videoIds.length}
            </span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="border-l border-trgray-mid ml-3 pl-1">
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
