
import React, { useState } from 'react';
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
      
      <Tabs defaultValue="search" className="w-full mb-6">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="search">Search Videos</TabsTrigger>
          <TabsTrigger value="techniques">Techniques Roadmap</TabsTrigger>
        </TabsList>
        
        <TabsContent value="search" className="mt-0">
          <SearchBar onSearch={handleSearch} />
          
          {videos.length > 0 ? (
            <div>
              {searchQuery && (
                <h2 className="text-lg mb-3">
                  Search results for: <span className="text-traccent">{searchQuery}</span>
                </h2>
              )}
              
              {selectedTechniqueId && (
                <h2 className="text-lg mb-3">
                  Technique: <span className="text-traccent">{getSelectedTechniqueName()}</span>
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
              <p className="text-trgray-light mb-2">No videos found for "{searchQuery}"</p>
              <p className="text-sm">Try another search term or check the techniques roadmap</p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-trgray-light">Search for Gordon Ryan instructional videos</p>
              <p className="text-sm mt-2">Try techniques like "armbar", "back control", or "triangle"</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="techniques" className="mt-0">
          <h2 className="text-lg font-medium mb-3">Jiu-Jitsu Techniques</h2>
          <p className="text-trgray-light text-sm mb-4">
            Explore techniques and find related instructional videos by Gordon Ryan
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
