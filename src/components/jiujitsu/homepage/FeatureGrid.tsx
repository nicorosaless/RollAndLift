
import React from 'react';
import { BookOpen, MessageSquare } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface FeatureGridProps {
  onNavigateToTab: (tab: string) => void;
}

const FeatureGrid = ({ onNavigateToTab }: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <FeatureCard 
        icon={BookOpen} 
        title="Roadmap" 
        description="Mapa de técnicas organizadas."
        onClick={() => onNavigateToTab('Roadmap')}
      />
      <FeatureCard 
        icon={MessageSquare} 
        title="Chatbot" 
        description="Consultas sobre técnicas."
        onClick={() => onNavigateToTab('Danaher')}
      />
    </div>
  );
};

export default FeatureGrid;
