
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, BookOpen } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-trgray-dark border-t border-trgray-mid h-16 flex items-center justify-around">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center h-full w-1/2 ${isActive ? 'tab-active' : 'tab-inactive'}`
        }
        end
      >
        <Dumbbell className="h-6 w-6" />
        <span className="text-xs mt-1">Gym</span>
      </NavLink>
      <NavLink 
        to="/jiujitsu" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center h-full w-1/2 ${isActive ? 'tab-active' : 'tab-inactive'}`
        }
      >
        <BookOpen className="h-6 w-6" />
        <span className="text-xs mt-1">Jiu-Jitsu</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
