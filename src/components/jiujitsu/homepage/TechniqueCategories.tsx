
import React from 'react';
import { GitMerge, Shield, Users } from 'lucide-react';
import CategoryCard from './CategoryCard';

const TechniqueCategories = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-4 rounded-xl border border-purple-500/20 shadow-lg">
      <h3 className="text-base font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Categorías Principales</h3>
      <div className="grid grid-cols-2 gap-3">
        <CategoryCard 
          icon={GitMerge} 
          title="Ataques a la Espalda" 
          color="from-red-700/50 to-orange-700/30"
        />
        <CategoryCard 
          icon={Shield} 
          title="Guard Passing" 
          color="from-blue-700/50 to-indigo-700/30"
        />
        <CategoryCard 
          icon={GitMerge} 
          title="Leg Locks" 
          color="from-amber-700/50 to-yellow-700/30"
        />
        <CategoryCard 
          icon={Users} 
          title="Mount" 
          color="from-emerald-700/50 to-green-700/30"
        />
      </div>
    </div>
  );
};

export default TechniqueCategories;
