
import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
        <span className="text-xs mt-1">Gym</span>
      </NavLink>
      <NavLink 
        to="/jiujitsu" 
        className={({ isActive }) => 
          `flex flex-col items-center justify-center h-full w-1/2 ${isActive ? 'tab-active' : 'tab-inactive'}`
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs mt-1">Jiu-Jitsu</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
