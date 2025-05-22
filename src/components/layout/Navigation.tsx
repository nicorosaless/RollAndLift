
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, BookOpen } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-trgray-dark to-purple-900/90 border-t border-pink-500/20 h-16 flex items-center justify-around shadow-lg z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center h-full w-1/2 ${isActive 
            ? 'text-pink-400 bg-gradient-to-t from-pink-700/20 to-transparent' 
            : 'text-trgray-light hover:text-purple-300'}`
        }
        end
      >
        <Dumbbell className="h-6 w-6" />
        <span className="text-xs mt-1">Gym</span>
      </NavLink>
      <NavLink 
        to="/jiujitsu" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center h-full w-1/2 ${isActive 
            ? 'text-pink-400 bg-gradient-to-t from-pink-700/20 to-transparent' 
            : 'text-trgray-light hover:text-purple-300'}`
        }
      >
        <BookOpen className="h-6 w-6" />
        <span className="text-xs mt-1">Jiu-Jitsu</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
