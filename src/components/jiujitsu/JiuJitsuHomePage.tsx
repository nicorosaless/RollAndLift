
import React from 'react';
import { BookOpen, MessageSquare, Search, Video, Link, Award, Shield, GitMerge, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsTrigger } from '@/components/ui/tabs';

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
    <div className="space-y-8 pb-10">
      {/* Hero Section */}
      <div className="p-8 bg-gradient-to-r from-purple-900/80 to-pink-900/60 rounded-xl shadow-lg border border-pink-500/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
          Bienvenido a la Plataforma de Jiu-Jitsu
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl text-lg">
          Explora el mundo del Jiu-Jitsu a través del sistema de Gordon Ryan y John Danaher. Aprende técnicas, conceptos y estrategias que te llevarán al siguiente nivel.
        </p>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => handleNavigateToTab('roadmap')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:from-purple-500 hover:to-pink-500 transition-colors shadow-md flex items-center"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explorar Roadmap
          </button>
          <button 
            onClick={() => handleNavigateToTab('chatbot')}
            className="px-6 py-3 bg-gradient-to-br from-purple-700/60 to-pink-700/40 text-white rounded-lg font-medium border border-white/10 hover:border-white/20 transition-all shadow-md flex items-center backdrop-blur-sm"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Consultar a Danaher
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard 
          icon={BookOpen} 
          title="Roadmap Interactivo" 
          description="Navega por un mapa interactivo de técnicas organizadas por categorías. Visualiza las conexiones entre diferentes aspectos del Jiu-Jitsu."
          onClick={() => handleNavigateToTab('roadmap')}
        />
        <FeatureCard 
          icon={MessageSquare} 
          title="Chatbot Danaher" 
          description="Consulta con nuestro asistente de IA sobre técnicas, conceptos y estrategias como si estuvieras hablando con el legendario entrenador."
          onClick={() => handleNavigateToTab('chatbot')}
        />
        <FeatureCard 
          icon={Video} 
          title="Videos Instructivos" 
          description="Accede a una colección curada de videos de Gordon Ryan organizados por técnicas para un aprendizaje visual efectivo."
          color="from-blue-700/60 to-indigo-700/40"
        />
        <FeatureCard 
          icon={Search} 
          title="Exploración por Categoría" 
          description="Encuentra rápidamente técnicas específicas según tu posición o situación de combate para resolver desafíos específicos."
          color="from-cyan-700/60 to-blue-700/40"
        />
      </div>

      {/* Technique Categories */}
      <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-7 rounded-xl border border-purple-500/20 shadow-lg">
        <h3 className="text-xl font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Categorías Principales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CategoryCard 
            icon={GitMerge} 
            title="Ataques a la Espalda" 
            description="Técnicas para tomar y mantener la posición de espalda y finalizar desde ahí."
            color="from-red-700/50 to-orange-700/30"
          />
          <CategoryCard 
            icon={Shield} 
            title="Guard Passing" 
            description="Métodos para pasar diferentes tipos de guardias y llegar a posiciones dominantes."
            color="from-blue-700/50 to-indigo-700/30"
          />
          <CategoryCard 
            icon={GitMerge} 
            title="Leg Locks & Heel Hooks" 
            description="Sistema completo de ataques a las piernas y finalizaciones con heel hook."
            color="from-amber-700/50 to-yellow-700/30"
          />
          <CategoryCard 
            icon={Users} 
            title="Control desde Mount" 
            description="Técnicas para mantener y atacar desde la posición dominante de montada."
            color="from-emerald-700/50 to-green-700/30"
          />
          <CategoryCard 
            icon={Award} 
            title="Half Guard" 
            description="Estrategias para luchar desde la media guardia, tanto ofensiva como defensivamente."
            color="from-violet-700/50 to-purple-700/30"
          />
          <CategoryCard 
            icon={Shield} 
            title="Escapes & Defensa" 
            description="Métodos para escapar de posiciones inferiores y defenderse contra ataques comunes."
            color="from-cyan-700/50 to-teal-700/30"
          />
        </div>
      </div>

      {/* Featured Videos */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-7 rounded-xl shadow-lg border border-pink-500/20">
        <h3 className="text-xl font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Videos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <VideoHighlight 
            title="Sistema Completo de Back Attacks" 
            description="Gordon Ryan - Secrets to the Back System"
            url="https://www.youtube.com/watch?v=WO3ZGcVItRM"
          />
          <VideoHighlight 
            title="Guard Pass Imparable" 
            description="Learn Gordon Ryan's UNSTOPPABLE Guard Pass"
            url="https://www.youtube.com/watch?v=_H1B40WK8ps"
          />
          <VideoHighlight 
            title="Sistema desde Mount" 
            description="Gordon Ryan - System from Mount"
            url="https://www.youtube.com/watch?v=Y1Ud6fzt5J8"
          />
          <VideoHighlight 
            title="Leglocks to Back Attacks" 
            description="Gordon Ryan - Advanced Transitions"
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
      className={`p-6 bg-gradient-to-br ${color} rounded-xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer backdrop-blur-sm`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg backdrop-blur-md shadow-inner mr-4 border border-white/10">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
        </div>
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
    <div className={`p-5 bg-gradient-to-br ${color} rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-md`}>
      <div className="flex items-center mb-3">
        <div className="p-2 bg-white/10 rounded-lg mr-3 backdrop-blur-sm">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h4 className="font-medium text-white">{title}</h4>
      </div>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
  );
};

const VideoHighlight = ({ title, description, url }: { title: string, description: string, url: string }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20 group"
    >
      <div className="mr-4 relative flex-shrink-0">
        <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-600/80 to-pink-600/60 rounded-lg shadow-lg group-hover:from-pink-600/80 group-hover:to-purple-600/60 transition-colors">
          <Video className="h-7 w-7 text-white" />
        </div>
        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white text-base group-hover:text-pink-300 transition-colors">{title}</h4>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
      <div className="ml-auto">
        <Link className="h-4 w-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
      </div>
    </a>
  );
};

export default JiuJitsuHomePage;

