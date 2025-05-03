
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import GymPage from "./pages/GymPage";
import JiuJitsuPage from "./pages/JiuJitsuPage";
import TechniqueDetailPage from "./pages/TechniqueDetailPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/" element={
              <ProtectedRoute>
                <MainLayout>
                  <GymPage />
                </MainLayout>
              </ProtectedRoute>
            } />
            <Route path="/jiujitsu" element={
              <ProtectedRoute>
                <MainLayout>
                  <JiuJitsuPage />
                </MainLayout>
              </ProtectedRoute>
            } />
            <Route path="/jiujitsu/technique/:id" element={
              <ProtectedRoute>
                <MainLayout>
                  <TechniqueDetailPage />
                </MainLayout>
              </ProtectedRoute>
            } />
            <Route path="/index" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
