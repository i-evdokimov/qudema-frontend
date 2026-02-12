import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Импортируем сам компонент уведомлений
import { AuthProvider, useAuth } from './context/AuthContext';

// Импорт страниц (убедись, что пути правильные!)
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Компонент для защиты приватных маршрутов
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex justify-center items-center h-screen">Загрузка...</div>;
  
  if (!user) {
    // Если не авторизован - на вход
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      {/* Провайдер авторизации оборачивает всё */}
      <AuthProvider>
        {/* Toaster нужен, чтобы работали уведомления. Без него будет ошибка "t is not a function" */}
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        
        <Routes>
          {/* Публичные страницы */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Приватные страницы (только для вошедших) */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Если страница не найдена - на главную */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;