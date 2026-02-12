import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  
  const { register } = useAuth();
  const navigate = useNavigate();
  // Локальное состояние загрузки
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Пароли не совпадают!'); return;
    }
    if (formData.password.length < 6) {
      toast.error('Пароль должен быть длиннее 6 символов'); return;
    }

    setIsLoading(true); // Включаем загрузку
    
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

  return (
    <div className="min-h-[calc(100vh-80px)] relative flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Основной контейнер формы */}
      <div className="relative z-10 w-full max-w-md">
          <div className="bg-white border-4 border-dark shadow-neo p-8 relative overflow-hidden">
            {/* Декоративный квадрат */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-none border-4 border-dark rotate-12 animate-bounce-slow"></div>

            <h2 className="text-4xl font-black uppercase mb-2 relative">Регистрация</h2>
            <p className="text-gray-500 font-bold mb-8 relative">Начни свой путь к 100 баллам.</p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* Поля ввода (сократил для краткости, они такие же как были) */}
              <input type="text" placeholder="Твое имя" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required disabled={isLoading} className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"/>
              <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required disabled={isLoading} className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"/>
              <input type="password" placeholder="Пароль" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required disabled={isLoading} className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"/>
              <input type="password" placeholder="Повтори пароль" value={formData.confirmPassword} onChange={e => setFormData({...formData, confirmPassword: e.target.value})} required disabled={isLoading} className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"/>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-dark text-white font-black uppercase py-4 mt-4 border-4 border-transparent hover:bg-accent hover:text-dark hover:border-dark hover:shadow-neo transition-all active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Зарегистрироваться
              </button>
            </form>

            <div className="mt-6 text-center text-sm font-bold z-10 relative">
              Уже есть аккаунт? <Link to="/login" className="text-primary-600 hover:underline decoration-4 underline-offset-4">Войти</Link>
            </div>
          </div>

           {/* 3. Надпись "Reloading game..." ПОД ОКОШКОМ */}
           {isLoading && (
            <div className="mt-6 text-center animate-pulse">
                <span className="inline-block bg-accent border-4 border-dark px-4 py-2 font-black uppercase text-dark shadow-neo transform rotate-2">
                    Reloading game...
                </span>
            </div>
          )}
      </div>
    </div>
  );
};

export default Register;