import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FiAlertTriangle, FiArrowRight, FiLock } from 'react-icons/fi'; // Добавил иконки для красоты

const Login = () => {
  // --- ЛОГИКА (НЕ ТРОГАЛ) ---
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const res = await login(formData.email, formData.password);
    
    if (res.success) {
      navigate('/dashboard');
    }
    if (!res.success) {
       setIsLoading(false);
    }
  };
  // ---------------------------

  return (
    // Обертка с сеткой на фоне
    <div className="min-h-[calc(100vh-80px)] relative flex items-center justify-center bg-gray-50 overflow-hidden">
      
      {/* Декоративная сетка */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Основной контейнер */}
      <div className="relative z-10 w-full max-w-md px-4">
          
          {/* Декоративный "стикер" сверху */}
          <div className="absolute -top-6 -left-2 z-20 bg-yellow-400 border-4 border-dark px-4 py-1 transform -rotate-0 shadow-neo">
             <span className="font-black uppercase text-xs flex items-center gap-2">
                <FiAlertTriangle /> Restricted Area
             </span>
          </div>

          <div className="bg-white border-4 border-dark shadow-neo p-8 md:p-12 relative">
            
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-dark text-white mx-auto flex items-center justify-center text-3xl mb-4 border-4 border-transparent hover:bg-accent hover:text-dark hover:border-dark transition-colors cursor-help">
                    <FiLock />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">ВХОД В СИСТЕМУ</h1>
                <p className="font-bold text-gray-500 uppercase text-sm">Введите учетные данные</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-black uppercase text-xs tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  placeholder="STUDENT@QUDEMA.RU"
                  className="w-full bg-gray-50 border-4 border-dark p-4 font-bold uppercase placeholder:text-gray-300 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#000] focus:-translate-y-1 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                    <label className="block font-black uppercase text-xs tracking-widest">Пароль</label>
                    <span className="text-[10px] font-bold text-gray-400 uppercase cursor-not-allowed hover:text-red-500">Забыл пароль?</span>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border-4 border-dark p-4 font-bold focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#000] focus:-translate-y-1 transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-neo bg-primary-600 text-white hover:bg-accent hover:text-dark py-5 text-xl relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? 'ПОДКЛЮЧЕНИЕ...' : 'ВОЙТИ'} 
                    {!isLoading && <FiArrowRight />}
                </span>
              </button>
            </form>

            {/* Футер карточки */}
            <div className="mt-8 pt-6 border-t-4 border-gray-100 text-center">
              <span className="font-bold text-gray-500 uppercase text-xs mr-2">Нет доступа?</span>
              <Link to="/register" className="inline-block font-black uppercase border-b-4 border-accent hover:bg-accent hover:border-dark transition-all">
                Создать аккаунт
              </Link>
            </div>
          </div>

          {/* Анимация загрузки в стиле киберпанка */}
          {isLoading && (
            <div className="mt-4 text-center">
                <div className="inline-block bg-dark text-accent px-4 py-2 font-mono font-bold text-sm uppercase animate-pulse border-2 border-accent">
                    {`> INITIALIZING_SESSION...`}
                </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Login;