import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api'; // Updated import to use the frontend API service

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  quickLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Call the actual login API endpoint
      const loggedInUser = await api.loginUser({ email, password });

      if (loggedInUser) {
        // Set user state and save to localStorage
        setUser(loggedInUser);
        localStorage.setItem('user', JSON.stringify(loggedInUser));
        // Optionally navigate to dashboard or intended page upon successful login
        // navigate('/dashboard'); // Consider moving navigation logic to the component calling login
        return true;
      } else {
        // Handle login failure (e.g., show toast message in the component)
        console.error('Login failed: Invalid credentials or server error.');
        return false;
      }
    } catch (error) {
      // Handle unexpected errors during the login process
      console.error('Login error:', error);
      // Optionally show a generic error toast message
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const quickLogin = () => {
    const mockUser = {
      id: '1',
      username: 'tester',
      email: 'test@example.com'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading, 
      login, 
      quickLogin, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
