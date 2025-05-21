
import React from 'react';
import { BookOpen, MessageSquare, Search, Video, Link } from 'lucide-react';

const JiuJitsuHomePage = () => {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-gradient-to-r from-purple-900/60 to-pink-900/40 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
          Bienvenido a la plataforma de Jiu-Jitsu
        </h2>
        <p className="text-white/80 mb-4">
          Explora nuestras herramientas para mejorar tu Jiu-Jitsu con contenido instructivo de Gordon Ryan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard 
          icon={BookOpen} 
          title="Roadmap" 
          description="Explora técnicas y conceptos organizados por categorías. Encuentra videos instructivos relacionados."
        />
        <FeatureCard 
          icon={MessageSquare} 
          title="Chatbot Danaher" 
          description="Consulta con nuestro asistente de IA sobre técnicas, conceptos y estrategias de jiu-jitsu."
        />
        <FeatureCard 
          icon={Video} 
          title="Videos Instructivos" 
          description="Accede a una colección curada de videos de Gordon Ryan organizados por técnicas."
        />
        <FeatureCard 
          icon={Search} 
          title="Búsqueda de Técnicas" 
          description="Encuentra rápidamente técnicas específicas a través del roadmap interactivo."
        />
      </div>

      <div className="bg-purple-900/30 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Videos Destacados</h3>
        <div className="space-y-4">
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
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="p-5 bg-purple-900/20 border border-purple-500/20 rounded-lg hover:bg-purple-800/30 transition-colors">
      <div className="flex items-start">
        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mr-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
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
      className="flex items-center p-3 bg-purple-800/30 hover:bg-purple-700/40 rounded-md transition-colors"
    >
      <div className="mr-3 text-pink-500">
        <Video className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
      <div className="ml-auto">
        <Link className="h-4 w-4 text-purple-400" />
      </div>
    </a>
  );
};

export default JiuJitsuHomePage;
