
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/jiujitsu/VideoCard';
import TechniqueTree from '../components/jiujitsu/TechniqueTree';
import JiuJitsuHomePage from '../components/jiujitsu/JiuJitsuHomePage';
import DanaherChatbot from '../components/jiujitsu/DanaherChatbot';
import { Technique, Video } from '../types';
import { sampleTechniques, sampleVideos } from '../data/sampleData';
import { Home, BookOpen, MessageSquare } from 'lucide-react';

const JiuJitsuPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string | null>(null);
  const [techniques] = useState<Technique[]>(sampleTechniques);
  const [activeTab, setActiveTab] = useState<string>('home');
  const navigate = useNavigate();

  // Handle technique selection
  const handleSelectTechnique = (techniqueId: string) => {
    setSelectedTechniqueId(techniqueId);

    // Find videos associated with this technique
    const relatedVideos = sampleVideos.filter(video => video.techniqueIds.includes(techniqueId));
    setVideos(relatedVideos);
  };

  // Find the selected technique name if any
  const getSelectedTechniqueName = () => {
    if (!selectedTechniqueId) return "";
    const findTechnique = (techniques: Technique[]): string => {
      for (const tech of techniques) {
        if (tech.id === selectedTechniqueId) {
          return tech.name;
        }
        if (tech.children) {
          const found = findTechnique(tech.children);
          if (found) return found;
        }
      }
      return "";
    };
    return findTechnique(techniques);
  };

  return (
    <div className="pb-28">
      <h1 className="text-2xl font-bold mb-6">Lift & Roll - Jiu-Jitsu</h1>
      
      {/* Minimalist tab navigation based on the reference image */}
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-lg bg-gradient-to-r from-purple-800 to-pink-700 rounded-xl overflow-hidden">
          <div className="flex justify-between">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex-1 py-4 px-2 flex flex-col items-center justify-center transition-colors ${
                activeTab === 'home' ? 'bg-purple-700' : ''
              }`}
            >
              <Home className="h-6 w-6 mb-1" />
              <span className="text-sm">Home</span>
            </button>
            <button 
              onClick={() => setActiveTab('roadmap')}
              className={`flex-1 py-4 px-2 flex flex-col items-center justify-center transition-colors ${
                activeTab === 'roadmap' ? 'bg-purple-700' : ''
              }`}
            >
              <BookOpen className="h-6 w-6 mb-1" />
              <span className="text-sm">Roadmap</span>
            </button>
            <button 
              onClick={() => setActiveTab('chatbot')}
              className={`flex-1 py-4 px-2 flex flex-col items-center justify-center transition-colors ${
                activeTab === 'chatbot' ? 'bg-purple-700' : ''
              }`}
            >
              <MessageSquare className="h-6 w-6 mb-1" />
              <span className="text-sm">Danaher</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Content based on active tab */}
      <div className="mt-0 mb-20">
        {activeTab === 'home' && <JiuJitsuHomePage />}
        
        {activeTab === 'roadmap' && (
          <>
            <h2 className="text-lg font-medium mb-3">Roadmap de Jiu-Jitsu</h2>
            <p className="text-trgray-light text-sm mb-4">
              Explora técnicas y encuentra videos instructivos relacionados de Gordon Ryan
            </p>
            
            <div className="flex flex-col space-y-4 pb-6">
              {selectedTechniqueId && videos.length > 0 && (
                <div>
                  <h2 className="text-lg mb-3">
                    Técnica: <span className="text-traccent">{getSelectedTechniqueName()}</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map(video => (
                      <VideoCard 
                        key={video.id} 
                        title={video.title} 
                        thumbnail={video.thumbnail} 
                        videoId={video.videoId} 
                        instructor={video.instructor} 
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pb-8">
                <TechniqueTree techniques={techniques} onSelectTechnique={handleSelectTechnique} />
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'chatbot' && <DanaherChatbot />}
      </div>
    </div>
  );
};

export default JiuJitsuPage;
