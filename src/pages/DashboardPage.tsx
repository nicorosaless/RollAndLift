
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido, {user?.username || 'Usuario'}</h1>
        <p className="text-trgray-light">Selecciona una sección para comenzar</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link to="/" className="block">
          <div className="bg-card rounded-lg p-6 h-full card-hover flex flex-col items-center justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-trwhite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
            <h2 className="text-xl font-bold mb-2">Entrenamiento de Gym</h2>
            <p className="text-trgray-light mb-4">Registra tus entrenamientos, series, repeticiones y peso</p>
            <Button variant="outline" className="mt-auto">
              Ir al Gym
            </Button>
          </div>
        </Link>

        <Link to="/jiujitsu" className="block">
          <div className="bg-card rounded-lg p-6 h-full card-hover flex flex-col items-center justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-trwhite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xl font-bold mb-2">Jiu-Jitsu</h2>
            <p className="text-trgray-light mb-4">Explora técnicas y visualiza videos de instrucción</p>
            <Button variant="outline" className="mt-auto">
              Ver técnicas
            </Button>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Button variant="secondary" onClick={logout} className="button-secondary">
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
