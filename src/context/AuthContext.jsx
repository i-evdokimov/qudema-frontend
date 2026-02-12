import { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. ПРОВЕРКА: ВОШЕЛ ЛИ ЮЗЕР (ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch('/api/auth/me'); // Спрашиваем у бэкенда: "Кто я?"
      const data = await res.json();
      
      if (data.success) {
        setUser(data.user);
      }
    } catch (err) {
      // Если ошибка — значит не вошли
      console.log('Не авторизован');
    } finally {
      setLoading(false);
    }
  };

  // 2. ФУНКЦИЯ РЕГИСТРАЦИИ
  const register = async (userData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Ошибка регистрации');
      }

      // После регистрации сразу входим
      localStorage.setItem('token', data.token); // (если используем токены)
      setUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // 3. ФУНКЦИЯ ВХОДА
  const login = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Неверные данные');
      }

      setUser(data.user); // Сохраняем юзера в состояние
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // 4. ФУНКЦИЯ ВЫХОДА
  const logout = async () => {
    try {
      await fetch('/api/auth/logout'); // Если есть роут логаута
      setUser(null);
      // toast.success('Вы вышли из системы'); // Можно добавить тут
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