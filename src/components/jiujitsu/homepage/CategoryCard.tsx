
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  color?: string;
  onClick?: () => void;
}

const CategoryCard = ({ 
  icon: Icon, 
  title, 
  color = "from-purple-700/50 to-pink-700/30",
  onClick
}: CategoryCardProps) => {
  return (
    <div 
      className={`p-3 bg-gradient-to-br ${color} rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer shadow-md flex items-center gap-3 group hover:translate-y-[-2px]`}
      onClick={onClick}
    >
      <div className="p-2 bg-white/10 rounded-lg w-fit">
        <Icon className="w-4 h-4 text-white group-hover:text-pink-200 transition-colors" />
      </div>
      <h4 className="font-medium text-white text-sm group-hover:text-pink-200 transition-colors">{title}</h4>
    </div>
  );
};

export default CategoryCard;
