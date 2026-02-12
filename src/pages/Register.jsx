import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверка паролей
    if (formData.password !== formData.confirmPassword) {
      toast.error('Пароли не совпадают!');
      return;
    }
    
    if (formData.password.length < 6) {
      toast.error('Пароль должен быть длиннее 6 символов');
      return;
    }

    setLoading(true);
    
    // Отправляем данные на сервер
    const res = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });

    if (res.success) {
      navigate('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-dark shadow-neo w-full max-w-md p-8 relative overflow-hidden">
        
        {/* Декоративный элемент - квадрат */}
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-none border-4 border-dark rotate-12"></div>

        <h2 className="text-4xl font-black uppercase mb-2">Регистрация</h2>
        <p className="text-gray-500 font-bold mb-8">Начни свой путь к 100 баллам.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-black uppercase mb-1">Имя</label>
            <input
              type="text"
              className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              placeholder="Твое имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-1">Email</label>
            <input
              type="email"
              className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-1">Пароль</label>
            <input
              type="password"
              className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              placeholder="Минимум 6 символов"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-black uppercase mb-1">Повтори пароль</label>
            <input
              type="password"
              className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-dark text-white font-black uppercase py-4 mt-4 border-4 border-transparent hover:bg-accent hover:text-dark hover:border-dark hover:shadow-neo transition-all active:translate-y-1"
          >
            {loading ? 'Создаем аккаунт...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm font-bold z-10 relative">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="text-primary-600 hover:underline decoration-4 underline-offset-4">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;