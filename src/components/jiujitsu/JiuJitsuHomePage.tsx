
import React from 'react';
import { BookOpen, MessageSquare, Video, Link, Award, Shield, GitMerge, Users } from 'lucide-react';

const JiuJitsuHomePage = () => {
  const handleNavigateToTab = (tab: string) => {
    // Find the parent JiuJitsuPage component's tab buttons
    const buttons = document.querySelectorAll('.tabs-container button');
    // Find the button for the requested tab and click it
    buttons.forEach((button) => {
      if (button.textContent?.includes(tab)) {
        (button as HTMLButtonElement).click();
      }
    });
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Simplified Hero Section */}
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
            onClick={() => handleNavigateToTab('Roadmap')}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:from-purple-500 hover:to-pink-500 transition-colors shadow-md flex items-center text-sm"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Explorar Roadmap
          </button>
          <button 
            onClick={() => handleNavigateToTab('Danaher')}
            className="px-4 py-2 bg-gradient-to-br from-purple-700/60 to-pink-700/40 text-white rounded-lg font-medium border border-white/10 hover:border-white/20 transition-all shadow-md flex items-center backdrop-blur-sm text-sm"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Consultar a Danaher
          </button>
        </div>
      </div>

      {/* Simplified Features Grid */}
      <div className="grid grid-cols-2 gap-3">
        <FeatureCard 
          icon={BookOpen} 
          title="Roadmap" 
          description="Mapa de técnicas organizadas."
          onClick={() => handleNavigateToTab('Roadmap')}
        />
        <FeatureCard 
          icon={MessageSquare} 
          title="Chatbot" 
          description="Consultas sobre técnicas."
          onClick={() => handleNavigateToTab('Danaher')}
        />
      </div>

      {/* Technique Categories - Simplified 2x2 grid */}
      <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-4 rounded-xl border border-purple-500/20 shadow-lg">
        <h3 className="text-base font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Categorías Principales</h3>
        <div className="grid grid-cols-2 gap-3">
          <CategoryCard 
            icon={GitMerge} 
            title="Ataques a la Espalda" 
            color="from-red-700/50 to-orange-700/30"
          />
          <CategoryCard 
            icon={Shield} 
            title="Guard Passing" 
            color="from-blue-700/50 to-indigo-700/30"
          />
          <CategoryCard 
            icon={GitMerge} 
            title="Leg Locks" 
            color="from-amber-700/50 to-yellow-700/30"
          />
          <CategoryCard 
            icon={Users} 
            title="Mount" 
            color="from-emerald-700/50 to-green-700/30"
          />
        </div>
      </div>

      {/* Simplified Featured Videos */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-4 rounded-xl shadow-lg border border-pink-500/20">
        <h3 className="text-base font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Videos Destacados</h3>
        <div className="grid grid-cols-2 gap-3">
          <VideoHighlight 
            title="Back Attacks" 
            url="https://www.youtube.com/watch?v=WO3ZGcVItRM"
          />
          <VideoHighlight 
            title="Guard Pass" 
            url="https://www.youtube.com/watch?v=_H1B40WK8ps"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color = "from-purple-700/60 to-pink-700/40", onClick }: { 
  icon: any, 
  title: string, 
  description: string, 
  color?: string,
  onClick?: () => void 
}) => {
  return (
    <div 
      className={`p-3 bg-gradient-to-br ${color} rounded-xl border border-white/10 hover:border-white/20 shadow-lg transition-all cursor-pointer flex flex-col justify-between aspect-[4/3]`}
      onClick={onClick}
    >
      <div className="p-1.5 bg-white/10 rounded-lg w-fit">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-gray-200 text-xs">{description}</p>
      </div>
    </div>
  );
};

const CategoryCard = ({ icon: Icon, title, color = "from-purple-700/50 to-pink-700/30" }: {
  icon: any,
  title: string,
  color?: string
}) => {
  return (
    <div className={`p-3 bg-gradient-to-br ${color} rounded-lg border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-md flex items-center gap-2`}>
      <div className="p-1 bg-white/10 rounded-lg w-fit">
        <Icon className="w-3 h-3 text-white" />
      </div>
      <h4 className="font-medium text-white text-xs">{title}</h4>
    </div>
  );
};

const VideoHighlight = ({ title, url }: { title: string, url: string }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20 group gap-2"
    >
      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-purple-600/80 to-pink-600/60 rounded-lg shadow-lg">
        <Video className="h-4 w-4 text-white" />
      </div>
      <h4 className="font-medium text-white text-xs group-hover:text-pink-300 transition-colors">{title}</h4>
    </a>
  );
};

export default JiuJitsuHomePage;
