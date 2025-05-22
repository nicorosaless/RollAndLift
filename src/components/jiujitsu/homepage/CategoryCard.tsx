
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  color?: string;
}

const CategoryCard = ({ 
  icon: Icon, 
  title, 
  color = "from-purple-700/50 to-pink-700/30" 
}: CategoryCardProps) => {
  return (
    <div className={`p-3 bg-gradient-to-br ${color} rounded-lg border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-md flex items-center gap-2`}>
      <div className="p-1 bg-white/10 rounded-lg w-fit">
        <Icon className="w-3 h-3 text-white" />
      </div>
      <h4 className="font-medium text-white text-xs">{title}</h4>
    </div>
  );
};

export default CategoryCard;
