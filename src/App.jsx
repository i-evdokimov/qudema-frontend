import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';

// --- ВРЕМЕННЫЕ ЗАГЛУШКИ (ПРОВЕРКА ВХОДА) ---
// Мы проверим, работает ли кнопка входа, не ломая сайт файлами страниц
const LoginStub = () => {
  const { login } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div style={{padding: 50}}>
      <h2>Тестовый вход</h2>
      <form onSubmit={handleLogin}>
        <input 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          style={{display: 'block', margin: 10, padding: 5}}
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          style={{display: 'block', margin: 10, padding: 5}}
        />
        <button type="submit" style={{margin: 10, padding: 10}}>Войти</button>
      </form>
    </div>
  );
};

const DashboardStub = () => {
    const { user, logout } = useAuth();
    return (
        <div style={{padding: 50, color: 'green'}}>
            <h1>🎉 УРА! МЫ ВНУТРИ!</h1>
            <p>Привет, {user?.name || user?.email}</p>
            <button onClick={logout}>Выйти</button>
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
          <Route path="/login" element={<LoginStub />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardStub />
              </ProtectedRoute>
            } 
          />
          {/* Любой другой путь ведет на логин */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;