
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/jiujitsu/VideoCard';
import TechniqueTree from '../components/jiujitsu/TechniqueTree';
import JiuJitsuHomePage from '../components/jiujitsu/JiuJitsuHomePage';
import DanaherChatbot from '../components/jiujitsu/DanaherChatbot';
import { Technique, Video } from '../types';
import { sampleTechniques, sampleVideos } from '../data/sampleData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Home, BookOpen, MessageSquare } from 'lucide-react';

const JiuJitsuPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string | null>(null);
  const [techniques] = useState<Technique[]>(sampleTechniques);
  const navigate = useNavigate();

  // Handle technique selection
  const handleSelectTechnique = (techniqueId: string) => {
    setSelectedTechniqueId(techniqueId);
    
    // Find videos associated with this technique
    const relatedVideos = sampleVideos.filter(
      video => video.techniqueIds.includes(techniqueId)
    );
    
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
    <div>
      <h1 className="text-2xl font-bold mb-6">Lift & Roll - Jiu-Jitsu</h1>
      
      <Tabs defaultValue="home" className="w-full mb-6">
        <div className="flex justify-between items-center mb-4">
          <div></div> {/* Empty div for spacing */}
          <TabsList className="grid grid-cols-3 bg-gradient-to-r from-purple-900/90 to-pink-700/70 shadow-lg">
            <TabsTrigger value="home" className="flex flex-col items-center px-6 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/70 data-[state=active]:to-pink-500/60">
              <Home className="h-5 w-5 mb-1" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="flex flex-col items-center px-6 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/70 data-[state=active]:to-pink-500/60">
              <BookOpen className="h-5 w-5 mb-1" />
              <span className="text-xs">Roadmap</span>
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="flex flex-col items-center px-6 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500/70 data-[state=active]:to-pink-500/60">
              <MessageSquare className="h-5 w-5 mb-1" />
              <span className="text-xs">Danaher</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="home" className="mt-0">
          <JiuJitsuHomePage />
        </TabsContent>
        
        <TabsContent value="roadmap" className="mt-0">
          <h2 className="text-lg font-medium mb-3">Roadmap de Jiu-Jitsu</h2>
          <p className="text-trgray-light text-sm mb-4">
            Explora técnicas y encuentra videos instructivos relacionados de Gordon Ryan
          </p>
          
          <div className="flex flex-col space-y-4">
            {selectedTechniqueId && videos.length > 0 && (
              <div>
                <h2 className="text-lg mb-3">
                  Técnica: <span className="text-traccent">{getSelectedTechniqueName()}</span>
                </h2>
                <div>
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
            
            <TechniqueTree 
              techniques={techniques}
              onSelectTechnique={handleSelectTechnique}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="chatbot" className="mt-0">
          <DanaherChatbot />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JiuJitsuPage;
