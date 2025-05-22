
import React from 'react';
import VideoHighlight from './VideoHighlight';

const FeaturedVideos = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-4 rounded-xl shadow-lg border border-pink-500/20">
      <h3 className="text-base font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Videos Destacados</h3>
      <div className="grid grid-cols-2 gap-3">
        <VideoHighlight 
          title="Back Attacks" 
          url="https://www.youtube.com/watch?v=WO3ZGcVItRM"
        />
        <VideoHighlight 
          title="Guard Pass" 
          url="https://www.youtube.com/watch?v=_H1B40WK8ps"
        />
      </div>
    </div>
  );
};

export default FeaturedVideos;
