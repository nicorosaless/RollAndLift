
import React from 'react';
import VideoHighlight from './VideoHighlight';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const FeaturedVideos = () => {
  const featuredVideos = [
    {
      title: "Back Attacks",
      url: "https://www.youtube.com/watch?v=WO3ZGcVItRM",
      description: "Técnicas para ataques desde la espalda"
    },
    {
      title: "Guard Pass",
      url: "https://www.youtube.com/watch?v=_H1B40WK8ps",
      description: "Estrategias para pasar la guardia"
    },
    {
      title: "Triangle Choke",
      url: "https://www.youtube.com/watch?v=LDE0fkzZT6I",
      description: "Estrangulación triangular desde guardia"
    },
    {
      title: "Armbar Defense",
      url: "https://www.youtube.com/watch?v=1K1kcgU5a_k",
      description: "Defensa contra armbar"
    }
  ];
  
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-4 rounded-xl shadow-lg border border-pink-500/20">
      <h3 className="text-base font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Videos Destacados</h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featuredVideos.map((video, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <VideoHighlight 
                title={video.title} 
                url={video.url}
                description={video.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2 top-0 left-0 translate-y-0" />
          <CarouselNext className="relative static ml-2 top-0 right-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedVideos;
