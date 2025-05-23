
import React from 'react';
import { Video, Play } from 'lucide-react';

interface VideoHighlightProps {
  title: string;
  url: string;
  description?: string;
}

const VideoHighlight = ({ title, url, description }: VideoHighlightProps) => {
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})(?:\?|&|\/|$)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
  };

  const thumbnail = getYouTubeThumbnail(url);

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg border border-pink-500/20 group"
    >
      <div className="relative aspect-video">
        {thumbnail ? (
          <>
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center">
              <div className="bg-pink-600/80 rounded-full p-3 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-800/50 to-pink-700/30 flex items-center justify-center">
            <Video className="h-8 w-8 text-white opacity-50" />
          </div>
        )}
      </div>
      <div className="p-3 bg-gradient-to-br from-purple-900/60 to-pink-900/40">
        <h4 className="font-medium text-white text-sm group-hover:text-pink-300 transition-colors">{title}</h4>
        {description && <p className="text-xs text-gray-300 mt-1 line-clamp-2">{description}</p>}
      </div>
    </a>
  );
};

export default VideoHighlight;
