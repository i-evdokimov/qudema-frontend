import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  // Локальное состояние загрузки для этой формы
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Включаем загрузку
    
    const res = await login(formData.email, formData.password);
    
    if (res.success) {
      navigate('/dashboard');
    }
    // Важно: если ошибка, выключаем загрузку. Если успех - нас перекинет на другую страницу.
    if (!res.success) {
       setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center p-4 overflow-hidden">

      {/* Основной контейнер формы (поверх фона) */}
      <div className="relative z-10 w-full max-w-md">
          <div className="bg-white border-4 border-dark shadow-neo p-8 relative overflow-hidden">
            {/* Декоративный кружок */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full border-4 border-dark animate-spin-slow"></div>

            <h2 className="text-4xl font-black uppercase mb-2 relative">Вход</h2>
            <p className="text-gray-500 font-bold mb-8 relative">С возвращением, гений.</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label className="block text-sm font-black uppercase mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2">Пароль</label>
                <input
                  type="password"
                  className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-600 text-white font-black uppercase py-4 border-4 border-transparent hover:border-dark hover:bg-white hover:text-dark hover:shadow-neo transition-all active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Войти в систему
              </button>
            </form>

            <div className="mt-6 text-center text-sm font-bold relative">
              Нет аккаунта?{' '}
              <Link to="/register" className="text-primary-600 hover:underline decoration-4 underline-offset-4">
                Создать сейчас
              </Link>
            </div>
          </div>

          {/* 3. Надпись "Reloading game..." ПОД ОКОШКОМ */}
          {isLoading && (
            <div className="mt-6 text-center animate-pulse">
                <span className="inline-block bg-yellow-400 border-4 border-dark px-4 py-2 font-black uppercase text-dark shadow-neo transform -rotate-2">
                    Reloading game...
                </span>
            </div>
          )}
      </div>
    </div>
  );
};

export default Login;