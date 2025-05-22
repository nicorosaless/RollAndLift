
import React from 'react';
import { Video } from 'lucide-react';

interface VideoHighlightProps {
  title: string;
  url: string;
}

const VideoHighlight = ({ title, url }: VideoHighlightProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20 group gap-2"
    >
      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-purple-600/80 to-pink-600/60 rounded-lg shadow-lg">
        <Video className="h-4 w-4 text-white" />
      </div>
      <h4 className="font-medium text-white text-xs group-hover:text-pink-300 transition-colors">{title}</h4>
    </a>
  );
};

export default VideoHighlight;
