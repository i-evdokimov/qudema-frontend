import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Логика та же самая, рабочая
    const res = await login(formData.email, formData.password);
    
    if (res.success) {
      navigate('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* КАРТОЧКА В СТИЛЕ НЕО-БРУТАЛИЗМ */}
      <div className="bg-white border-4 border-dark shadow-neo w-full max-w-md p-8 relative overflow-hidden">
        
        {/* Декоративный элемент - кружок */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full border-4 border-dark"></div>

        <h2 className="text-4xl font-black uppercase mb-2">Вход</h2>
        <p className="text-gray-500 font-bold mb-8">С возвращением, гений.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black uppercase mb-2">Email</label>
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
            <label className="block text-sm font-black uppercase mb-2">Пароль</label>
            <input
              type="password"
              className="w-full border-4 border-dark p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 text-white font-black uppercase py-4 border-4 border-transparent hover:border-dark hover:bg-white hover:text-dark hover:shadow-neo transition-all active:translate-y-1"
          >
            {loading ? 'Загрузка...' : 'Войти в систему'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm font-bold">
          Нет аккаунта?{' '}
          <Link to="/register" className="text-primary-600 hover:underline decoration-4 underline-offset-4">
            Создать сейчас
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;