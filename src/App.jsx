import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';

// --- УМНАЯ ТЕСТОВАЯ ФОРМА ---
const AuthStub = () => {
  const { login, register } = useAuth();
  const [isRegister, setIsRegister] = useState(false); // Переключатель
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegister) {
      // Регистрация
      await register({ name, email, password, role: 'student' });
    } else {
      // Вход
      await login(email, password);
    }
  };

  return (
    <div style={{padding: 50, maxWidth: 400, margin: '0 auto', textAlign: 'center'}}>
      <h2>{isRegister ? 'Регистрация' : 'Вход в систему'}</h2>
      
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        {isRegister && (
          <input 
            placeholder="Ваше имя" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            style={{padding: 10}}
            required
          />
        )}
        
        <input 
          placeholder="Email" 
          type="email"
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          style={{padding: 10}}
          required
        />
        
        <input 
          type="password" 
          placeholder="Пароль" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          style={{padding: 10}}
          required
        />
        
        <button type="submit" style={{padding: 10, cursor: 'pointer', background: 'blue', color: 'white', border: 'none'}}>
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>

      <button 
        onClick={() => setIsRegister(!isRegister)}
        style={{marginTop: 20, background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline'}}
      >
        {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
      </button>
    </div>
  );
};

const DashboardStub = () => {
    const { user, logout } = useAuth();
    return (
        <div style={{padding: 50, color: 'green', textAlign: 'center'}}>
            <h1>🎉 УРА! МЫ ВНУТРИ!</h1>
            <p>Привет, {user?.name} ({user?.email})</p>
            <button onClick={logout} style={{padding: 10}}>Выйти</button>
        </div>
    )
}

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Загрузка...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/login" element={<AuthStub />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardStub />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;