import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';

// --- ВРЕМЕННЫЕ ЗАГЛУШКИ (Чтобы проверить, жив ли сам React) ---
// Если с этим кодом сайт откроется, значит проблема была в импортах файлов
const Home = () => <div className="p-10"><h1>🏠 Главная страница работает!</h1></div>;
const Login = () => <div className="p-10"><h1>🔑 Страница Входа работает!</h1></div>;
const Register = () => <div className="p-10"><h1>📝 Страница Регистрации работает!</h1></div>;
const Dashboard = () => <div className="p-10"><h1>🚀 Личный кабинет работает!</h1></div>;
// -------------------------------------------------------------

// Компонент защиты (оставляем как есть)
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="p-10">Загрузка...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Уведомления */}
        <Toaster position="top-right" />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;