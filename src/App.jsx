import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';

// 1. ИМПОРТИРУЕМ КОМПОНЕНТЫ (Шапку и Подвал)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Импорт страниц
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Обертка для правильного позиционирования футера */}
        <div className="flex flex-col min-h-screen font-sans text-dark">
          
          {/* 2. ВСТАВЛЯЕМ НАВБАР */}
          <Navbar />
          
          <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
          
          {/* 3. ОСНОВНОЙ КОНТЕНТ (pt-20 отступ сверху, чтобы Навбар не закрывал контент) */}
          <main className="flex-grow pt-20">
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
          </main>

          {/* 4. ВСТАВЛЯЕМ ФУТЕР */}
          <Footer />
          
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;