import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiUserPlus, FiCpu } from 'react-icons/fi';

const Register = () => {
  // --- ЛОГИКА (НЕ ТРОГАЛ) ---
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  
  const { register } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Пароли не совпадают!', {
         style: { border: '3px solid black', borderRadius: '0', fontWeight: 'bold' }
      }); 
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Пароль должен быть длиннее 6 символов', {
        style: { border: '3px solid black', borderRadius: '0', fontWeight: 'bold' }
      }); 
      return;
    }

    setIsLoading(true); 
    
    const res = await register({
      name: formData.name, email: formData.email, password: formData.password
    });

    if (res.success) {
      navigate('/dashboard');
    }
    if (!res.success) {
        setIsLoading(false);
    }
  };
  // ---------------------------

  return (
    <div className="min-h-[calc(100vh-80px)] relative flex items-center justify-center bg-accent py-12 px-4 overflow-hidden">
      
      {/* Фоновые элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white border-4 border-dark rounded-full mix-blend-overlay opacity-50 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 border-4 border-dark rounded-full mix-blend-multiply opacity-50 blur-xl"></div>

      {/* Контейнер */}
      <div className="relative z-10 w-full max-w-lg">
          
          {/* Заголовок над карточкой */}
          <div className="mb-6 text-center">
             <h2 className="text-5xl font-black uppercase tracking-tighter text-dark bg-white inline-block px-4 py-1 border-4 border-dark shadow-neo transform -rotate-0">
                ЕЩЕ НЕ С НАМИ?
             </h2>
          </div>

          <div className="bg-white border-4 border-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 relative">
            
            {/* Иконка в углу */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <FiCpu size={200} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              
              {/* Имя */}
              <div>
                <label className="block font-black uppercase text-xs mb-1">Твое имя</label>
                <input 
                    type="text" 
                    placeholder="КАК ТЕБЯ ЗОВУТ?" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    required 
                    disabled={isLoading}
                    className="w-full border-4 border-dark p-3 font-bold uppercase focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-black uppercase text-xs mb-1">Канал связи (Email)</label>
                <input 
                    type="email" 
                    placeholder="EMAIL@EXAMPLE.COM" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    required 
                    disabled={isLoading}
                    className="w-full border-4 border-dark p-3 font-bold uppercase focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                />
              </div>

              {/* Пароли в ряд (на десктопе) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black uppercase text-xs mb-1">Пароль</label>
                    <input 
                        type="password" 
                        placeholder="******" 
                        value={formData.password} 
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                        required 
                        disabled={isLoading}
                        className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-black uppercase text-xs mb-1">Повтор</label>
                    <input 
                        type="password" 
                        placeholder="******" 
                        value={formData.confirmPassword} 
                        onChange={e => setFormData({...formData, confirmPassword: e.target.value})} 
                        required 
                        disabled={isLoading}
                        className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:bg-yellow-50 focus:shadow-[4px_4px_0px_0px_#000] transition-all"
                    />
                  </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-dark text-white font-black uppercase py-4 mt-6 border-4 border-transparent hover:bg-white hover:text-dark hover:border-dark hover:shadow-neo transition-all active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? 'РЕГИСТРАЦИЯ...' : (
                    <>
                        ПРИСОЕДИНИТЬСЯ <FiUserPlus size={20} />
                    </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm font-bold relative z-10">
              Уже в базе?{' '}
              <Link to="/login" className="text-primary-600 bg-primary-100 px-2 py-1 hover:bg-dark hover:text-white transition-colors">
                ВОЙТИ СЕЙЧАС
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Register;