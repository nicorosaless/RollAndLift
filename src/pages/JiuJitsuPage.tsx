
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/jiujitsu/SearchBar';
import VideoCard from '../components/jiujitsu/VideoCard';
import TechniqueTree from '../components/jiujitsu/TechniqueTree';
import { Technique, Video } from '../types';
import { sampleTechniques, sampleVideos } from '../data/sampleData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const JiuJitsuPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string | null>(null);
  const [techniques] = useState<Technique[]>(sampleTechniques);
  const navigate = useNavigate();

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would call an API to search videos
    // For now, we'll just filter our sample videos that include the query in the title
    const filteredVideos = sampleVideos.filter(
      video => video.title.toLowerCase().includes(query.toLowerCase())
    );
    setVideos(filteredVideos);
    setSelectedTechniqueId(null);
  };

  // Handle technique selection
  const handleSelectTechnique = (techniqueId: string) => {
    setSelectedTechniqueId(techniqueId);
    
    // Find videos associated with this technique
    const relatedVideos = sampleVideos.filter(
      video => video.techniqueIds.includes(techniqueId)
    );
    
    setVideos(relatedVideos);
    setSearchQuery("");
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
      
      <Tabs defaultValue="techniques" className="w-full mb-6">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="search">Buscar Videos</TabsTrigger>
          <TabsTrigger value="techniques">Técnicas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="search" className="mt-0">
          <SearchBar onSearch={handleSearch} />
          
          {videos.length > 0 ? (
            <div>
              {searchQuery && (
                <h2 className="text-lg mb-3">
                  Resultados de búsqueda para: <span className="text-traccent">{searchQuery}</span>
                </h2>
              )}
              
              {selectedTechniqueId && (
                <h2 className="text-lg mb-3">
                  Técnica: <span className="text-traccent">{getSelectedTechniqueName()}</span>
                </h2>
              )}
              
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
          ) : searchQuery ? (
            <div className="text-center py-8">
              <p className="text-trgray-light mb-2">No se encontraron videos para "{searchQuery}"</p>
              <p className="text-sm">Intenta con otro término o consulta las técnicas</p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-trgray-light">Busca videos instructivos de Gordon Ryan</p>
              <p className="text-sm mt-2">Prueba con técnicas como "armbar", "back control" o "triangle"</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="techniques" className="mt-0">
          <h2 className="text-lg font-medium mb-3">Técnicas de Jiu-Jitsu</h2>
          <p className="text-trgray-light text-sm mb-4">
            Explora técnicas y encuentra videos instructivos relacionados de Gordon Ryan
          </p>
          
          <TechniqueTree 
            techniques={techniques}
            onSelectTechnique={handleSelectTechnique}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JiuJitsuPage;
