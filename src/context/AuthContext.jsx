import { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

// ВОТ ЭТА СТРОЧКА — КЛЮЧ К УСПЕХУ
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/me`);
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
      }
    } catch (err) {
      console.log('Не авторизован');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Ошибка регистрации');

      localStorage.setItem('token', data.data.token);
      setUser(data.data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const login = async (email, password) => {
    try {
      // ИСПОЛЬЗУЕМ `${API_URL}` ТУТ:
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.message || 'Неверные данные');

      // В твоем бэкенде данные лежат в data.data.token и data.data.user
      if (data.data?.token) {
        localStorage.setItem('token', data.data.token);
      }
      setUser(data.data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`);
      localStorage.removeItem('token');
      setUser(null);
    } catch (err) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);