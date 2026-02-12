import { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast'; 

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    const token = localStorage.getItem('token');
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
        localStorage.removeItem('token');
        setUser(null);
      }
    } catch (err) {
      console.error('Ошибка сессии:', err);
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

      if (!data.success) throw new Error(data.message || 'Ошибка входа');

      localStorage.setItem('token', data.data?.token || data.token);
      setUser(data.data?.user || data.user);
      
      toast.success('Успешный вход!'); // Только здесь вызываем тост
      return { success: true };
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Ошибка');
      return { success: false, message: err.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Выход выполнен');
  };

  const register = async (userData) => {
      // Пока оставим простую заглушку, чтобы проверить вход
      console.log("Registering:", userData);
      return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);