import { createContext, useState, useContext, useEffect } from 'react';

// Читаем переменную из настроек Netlify
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { checkUserLoggedIn(); }, []);

  const checkUserLoggedIn = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/me`);
      const data = await res.json();
      if (data.success) setUser(data.data); // В контроллере данные в data.data
    } catch (err) { console.log('Не авторизован'); }
    finally { setLoading(false); }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      
      localStorage.setItem('token', data.data.token);
      setUser(data.data.user);
      return { success: true };
    } catch (err) { return { success: false, message: err.message }; }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);