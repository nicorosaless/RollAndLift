
import React from 'react';
import { BookOpen, MessageSquare, Video, Link, Award, Shield, GitMerge, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JiuJitsuHomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToTab = (tab: string) => {
    // This will be used to navigate to specific tabs
    const jiujitsuPage = document.querySelector('div[role="tablist"]');
    
    if (jiujitsuPage) {
      const tabTrigger = Array.from(jiujitsuPage.querySelectorAll('button')).find(
        button => button.value === tab
      );
      
      if (tabTrigger) {
        (tabTrigger as HTMLButtonElement).click();
      }
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Hero Section - More square aspect ratio */}
      <div className="p-6 bg-gradient-to-r from-purple-900/80 to-pink-900/60 rounded-xl shadow-lg border border-pink-500/20 relative overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-[3/2] xl:aspect-[2/1] flex flex-col justify-center">
        {/* Decorative elements */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
          Bienvenido a la Plataforma de Jiu-Jitsu
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl text-sm sm:text-base">
          Explora el mundo del Jiu-Jitsu a través del sistema de Gordon Ryan y John Danaher. Aprende técnicas, conceptos y estrategias que te llevarán al siguiente nivel.
        </p>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => handleNavigateToTab('roadmap')}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:from-purple-500 hover:to-pink-500 transition-colors shadow-md flex items-center"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Explorar Roadmap
          </button>
          <button 
            onClick={() => handleNavigateToTab('chatbot')}
            className="px-4 py-2 bg-gradient-to-br from-purple-700/60 to-pink-700/40 text-white rounded-lg font-medium border border-white/10 hover:border-white/20 transition-all shadow-md flex items-center backdrop-blur-sm"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Consultar a Danaher
          </button>
        </div>
      </div>

      {/* Features Grid - More compact, 2x2 grid on mobile, 4x1 on larger screens */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <FeatureCard 
          icon={BookOpen} 
          title="Roadmap" 
          description="Mapa interactivo de técnicas organizadas por categorías."
          onClick={() => handleNavigateToTab('roadmap')}
        />
        <FeatureCard 
          icon={MessageSquare} 
          title="Chatbot Danaher" 
          description="Consulta con nuestro asistente de IA sobre técnicas."
          onClick={() => handleNavigateToTab('chatbot')}
        />
        <FeatureCard 
          icon={Video} 
          title="Videos" 
          description="Videos de Gordon Ryan organizados por técnicas."
          color="from-blue-700/60 to-indigo-700/40"
        />
        <FeatureCard 
          icon={Award} 
          title="Conceptos" 
          description="Principios clave del sistema Danaher-Ryan."
          color="from-cyan-700/60 to-blue-700/40"
        />
      </div>

      {/* Technique Categories - 3x2 grid on all screen sizes */}
      <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-5 rounded-xl border border-purple-500/20 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Categorías Principales</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <CategoryCard 
            icon={GitMerge} 
            title="Ataques a la Espalda" 
            description="Técnicas para tomar y finalizar desde la espalda."
            color="from-red-700/50 to-orange-700/30"
          />
          <CategoryCard 
            icon={Shield} 
            title="Guard Passing" 
            description="Métodos para pasar diferentes guardias."
            color="from-blue-700/50 to-indigo-700/30"
          />
          <CategoryCard 
            icon={GitMerge} 
            title="Leg Locks" 
            description="Sistema de ataques a las piernas."
            color="from-amber-700/50 to-yellow-700/30"
          />
          <CategoryCard 
            icon={Users} 
            title="Mount" 
            description="Técnicas desde la montada."
            color="from-emerald-700/50 to-green-700/30"
          />
          <CategoryCard 
            icon={Award} 
            title="Half Guard" 
            description="Estrategias desde media guardia."
            color="from-violet-700/50 to-purple-700/30"
          />
          <CategoryCard 
            icon={Shield} 
            title="Escapes" 
            description="Métodos para escapar de posiciones inferiores."
            color="from-cyan-700/50 to-teal-700/30"
          />
        </div>
      </div>

      {/* Featured Videos - 2x2 grid instead of 2x1 */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-5 rounded-xl shadow-lg border border-pink-500/20">
        <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Videos Destacados</h3>
        <div className="grid grid-cols-2 gap-3">
          <VideoHighlight 
            title="Back Attacks" 
            description="Gordon Ryan - Secrets to the Back"
            url="https://www.youtube.com/watch?v=WO3ZGcVItRM"
          />
          <VideoHighlight 
            title="Guard Pass" 
            description="Gordon's UNSTOPPABLE Pass"
            url="https://www.youtube.com/watch?v=_H1B40WK8ps"
          />
          <VideoHighlight 
            title="Mount System" 
            description="System from Mount"
            url="https://www.youtube.com/watch?v=Y1Ud6fzt5J8"
          />
          <VideoHighlight 
            title="Leglocks" 
            description="Advanced Transitions"
            url="https://www.youtube.com/watch?v=a4VGiGUQrWU"
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
      className={`p-3 bg-gradient-to-br ${color} rounded-xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer backdrop-blur-sm aspect-square flex flex-col justify-between`}
      onClick={onClick}
    >
      <div className="p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg backdrop-blur-md shadow-inner border border-white/10 w-fit">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
        <p className="text-gray-200 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const CategoryCard = ({ icon: Icon, title, description, color = "from-purple-700/50 to-pink-700/30" }: {
  icon: any,
  title: string,
  description: string,
  color?: string
}) => {
  return (
    <div className={`p-3 bg-gradient-to-br ${color} rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-md aspect-square flex flex-col justify-between`}>
      <div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm w-fit">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <h4 className="font-medium text-white text-sm">{title}</h4>
        <p className="text-gray-200 text-xs">{description}</p>
      </div>
    </div>
  );
};

const VideoHighlight = ({ title, description, url }: { title: string, description: string, url: string }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20 group aspect-square"
    >
      <div className="relative flex-shrink-0 mb-auto">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-600/80 to-pink-600/60 rounded-lg shadow-lg group-hover:from-pink-600/80 group-hover:to-purple-600/60 transition-colors">
          <Video className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="mt-auto">
        <h4 className="font-medium text-white text-sm group-hover:text-pink-300 transition-colors">{title}</h4>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
      <div className="self-end mt-1">
        <Link className="h-3 w-3 text-purple-400 group-hover:text-pink-400 transition-colors" />
      </div>
    </a>
  );
};

export default JiuJitsuHomePage;
