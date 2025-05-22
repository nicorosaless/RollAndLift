
import React from 'react';
import { BookOpen, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onNavigateToTab: (tab: string) => void;
}

const HeroSection = ({ onNavigateToTab }: HeroSectionProps) => {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-900/80 to-pink-900/60 rounded-xl shadow-lg border border-pink-500/20 relative overflow-hidden flex flex-col justify-center">
      {/* Simple decorative element */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
        Bienvenido a la Plataforma de Jiu-Jitsu
      </h2>
      <p className="text-white/90 mb-4 max-w-2xl text-sm">
        Explora el mundo del Jiu-Jitsu a través del sistema de Gordon Ryan y John Danaher.
      </p>
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={() => onNavigateToTab('Roadmap')}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:from-purple-500 hover:to-pink-500 transition-colors shadow-md flex items-center text-sm"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Explorar Roadmap
        </button>
        <button 
          onClick={() => onNavigateToTab('Danaher')}
          className="px-4 py-2 bg-gradient-to-br from-purple-700/60 to-pink-700/40 text-white rounded-lg font-medium border border-white/10 hover:border-white/20 transition-all shadow-md flex items-center backdrop-blur-sm text-sm"
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Consultar a Danaher
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
