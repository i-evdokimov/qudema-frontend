import { createContext, useState, useContext, useEffect } from 'react';
// ВАЖНО: Правильный импорт для Vite
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Эта функция запускается сама при загрузке страницы
  const checkUserLoggedIn = async () => {
    const token = localStorage.getItem('token');
    
    // Если токена нет - мы просто гости, это не ошибка
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      
      if (data.success) {
        setUser(data.data || data.user);
      } else {
        // Если токен протух - удаляем его молча
        localStorage.removeItem('token');
        setUser(null);
      }
    } catch (err) {
      console.log('Ошибка проверки сессии (это нормально, если сервер спит)');
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Ошибка входа');
      }

      // Сохраняем токен и юзера
      const token = data.data?.token || data.token;
      const userData = data.data?.user || data.user;

      if (token) localStorage.setItem('token', token);
      setUser(userData);
      
      // Показываем уведомление ТОЛЬКО здесь, когда юзер сам нажал кнопку
      toast.success('Добро пожаловать!');
      return { success: true };
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Ошибка сервера');
      return { success: false, message: err.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Вы вышли из системы');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);