
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  onClick?: () => void;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "from-purple-700/60 to-pink-700/40", 
  onClick 
}: FeatureCardProps) => {
  return (
    <div 
      className={`p-3 bg-gradient-to-br ${color} rounded-xl border border-white/10 hover:border-white/20 shadow-lg transition-all cursor-pointer flex flex-col justify-between aspect-[4/3]`}
      onClick={onClick}
    >
      <div className="p-1.5 bg-white/10 rounded-lg w-fit">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-gray-200 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
