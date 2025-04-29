
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import { checkApiStatus } from '../services/api';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [apiRunning, setApiRunning] = useState<boolean | null>(null);

  useEffect(() => {
    const checkBackendStatus = async () => {
      const status = await checkApiStatus();
      setApiRunning(status);
    };
    
    checkBackendStatus();
  }, []);

  if (apiRunning === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="mb-4">Checking backend connection...</p>
        </div>
      </div>
    );
  }
  
  if (!apiRunning) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Backend Not Running</h1>
          <p className="mb-4">
            The FastAPI backend is not running. Please start it using the following command:
          </p>
          <div className="bg-secondary p-3 rounded mb-4 overflow-x-auto text-left">
            <code>cd backend && python start_server.py</code>
          </div>
          <p className="mb-4">
            After starting the backend, refresh this page.
          </p>
          <Button onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
};

export default Index;
