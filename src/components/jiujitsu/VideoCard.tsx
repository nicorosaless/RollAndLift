
import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoId: string;
  instructor: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, videoId, instructor }) => {
  // Function to open YouTube video in new tab
  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="mb-4 animate-slide-up">
      <div 
        className="bg-secondary rounded-lg overflow-hidden cursor-pointer card-hover"
        onClick={openVideo}
      >
        <div className="relative aspect-video">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-black bg-opacity-60 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium line-clamp-2">{title}</h3>
          <p className="text-trgray-light text-sm mt-1">
            {instructor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
