import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Заполните все поля');
      return;
    }

    setIsLoading(true);

    try {
      // Вызываем логин из контекста
      const result = await login(formData.email, formData.password);

      if (result.success) {
        toast.success('С возвращением!');
        navigate('/dashboard');
      } else {
        toast.error(result.message || 'Неверный email или пароль');
      }
    } catch (error) {
      console.error(error);
      toast.error('Ошибка соединения с сервером');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden p-4">
      {/* Фон (Градиентные шары) */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            С возвращением
          </h1>
          <p className="text-gray-400 text-sm">Войди, чтобы продолжить обучение</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Email адрес"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              required
            />
          </div>

          {/* Пароль */}
          <div className="relative group">
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
              Забыли пароль?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              <>
                Войти в систему <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Нет аккаунта?{' '}
          <Link to="/register" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            Зарегистрироваться
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;