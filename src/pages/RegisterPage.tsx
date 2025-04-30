import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { addUser } from '@/services/api';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the user data object correctly for the API
    const userData = {
      username: email.split('@')[0], // Or use a dedicated username state
      email,
      password, // Include the password
    };

    // Pass the correct userData object to addUser
    const success = await addUser(userData);
    if (success) {
      toast({ title: 'Registro exitoso', description: 'Usuario creado correctamente' });
      navigate('/login');
    } else {
      // Provide more specific error feedback if possible
      toast({ title: 'Error en registro', description: 'No se pudo crear el usuario. Verifica los datos o intenta más tarde.', variant: 'destructive' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-lg shadow-lg animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-trwhite mb-2">Regístrate en Lift&Roll</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-trwhite">Correo electrónico</label>
            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="correo@ejemplo.com" required className="input-field w-full" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-trwhite">Contraseña</label>
            <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="************" required className="input-field w-full" />
          </div>
          <Button type="submit" className="button-primary w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-trgray-light">
            ¿Ya tienes una cuenta? <Link to="/login" className="text-trwhite hover:underline">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;