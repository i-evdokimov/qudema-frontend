import { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

// 👇 ИСПРАВЛЕНИЕ: Жестко задаем правильный адрес API с '/api' на конце
// Теперь не важно, есть .env файл или нет — будет работать везде.
const API_URL = 'https://qudema-backend.onrender.com/api';

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
      console.error('Ошибка проверки токена:', err);
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

      if (!res.ok) {
        throw new Error(data.message || 'Ошибка сервера');
      }

      if (!data.success) throw new Error(data.message || 'Ошибка входа');

      localStorage.setItem('token', data.data?.token || data.token);
      setUser(data.data?.user || data.user);
      toast.success('С возвращением!', {
        style: { border: '3px solid #000', fontWeight: 'bold' }
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Не удалось войти', {
        style: { border: '3px solid #000', fontWeight: 'bold' }
      });
      return { success: false, message: err.message };
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

      if (!res.ok) {
        throw new Error(data.message || 'Ошибка сервера при регистрации');
      }

      if (!data.success) throw new Error(data.message || 'Ошибка регистрации');

      localStorage.setItem('token', data.data?.token || data.token);
      setUser(data.data?.user || data.user);
      
      toast.success('Регистрация успешна!', {
        style: { border: '3px solid #000', fontWeight: 'bold' }
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Не удалось зарегистрироваться', {
        style: { border: '3px solid #000', fontWeight: 'bold' }
      });
      return { success: false, message: err.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast('ВЫХОД ВЫПОЛНЕН', {
        icon: '👋',
        style: { border: '3px solid #000', fontWeight: 'bold' }
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;