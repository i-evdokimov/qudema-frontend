// frontend/src/context/AuthContext.jsx
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // По умолчанию пользователь null (не вошел)
  const [user, setUser] = useState(null);

  // Функция входа (принимает имя)
  const login = (username) => {
    setUser({ name: username });
  };

  // Функция выхода
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);