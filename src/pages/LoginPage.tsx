
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, quickLogin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "¡Inicio de sesión correcto!",
          description: "Bienvenido a Lift&Roll",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Error de inicio de sesión",
          description: "Correo electrónico o contraseña incorrectos",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Error de inicio de sesión",
        description: "Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-lg shadow-lg animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-trwhite mb-2">Lift&Roll</h1>
          <p className="text-trgray-light">Inicia sesión para continuar</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-trwhite">
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="input-field w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-trwhite">
                Contraseña
              </label>
              <a href="#" className="text-sm text-trwhite hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className="input-field w-full"
              required
            />
          </div>
          
          <div>
            <Button 
              type="submit" 
              className="button-primary w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Button>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-trgray-mid"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-trgray-light">O</span>
            </div>
          </div>

          <Button 
            type="button"
            onClick={quickLogin}
            className="mt-4 button-secondary w-full"
          >
            Acceso rápido (modo prueba)
          </Button>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-trgray-light">
              ¿No tienes una cuenta? <a href="#" className="text-trwhite hover:underline">Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
