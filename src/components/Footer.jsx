import React from 'react';
import { Link } from 'react-router-dom';
// 1. Импортируем хук авторизации
import { useAuth } from '../context/AuthContext';

const Footer = () => {
  // 2. Получаем текущего пользователя
  const { user } = useAuth();

  return (
    <footer className="bg-dark text-white border-t-4 border-dark pt-12 pb-6 mt-auto relative overflow-hidden">
      {/* Декоративный элемент в футере */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-600 rounded-full mix-blend-exclusion opacity-50 -translate-y-1/2 blur-xl pointer-events-none"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Колонка 1: Лого и Миссия */}
        <div className="md:col-span-2 pr-8">
          <Link to="/" className="text-3xl font-black uppercase tracking-tighter flex items-center gap-2 mb-4 focus:outline-none">
            <span className="bg-white text-dark px-2 py-1 transform -skew-x-12 border-2 border-white shadow-[4px_4px_0px_0px_#fff]">Q</span>
            <span className="text-white text-shadow-neo">Qudema</span>
          </Link>
          <p className="font-bold text-gray-300 mb-6 max-w-md leading-relaxed">
            Образовательная платформа нового поколения. Мы делаем подготовку к экзаменам понятной, стильной и эффективной. Без воды и скуки.
          </p>
        </div>

        {/* Колонка 2: Навигация */}
        <div>
          <h3 className="text-xl font-black uppercase mb-6 border-b-4 border-primary-600 inline-block pb-1">
            Меню
          </h3>
          <ul className="space-y-3 font-bold">
            <li>
              <Link to="/courses" className="hover:text-primary-400 transition-colors hover:underline decoration-2 underline-offset-4">
                Курсы
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-400 transition-colors hover:underline decoration-2 underline-offset-4">
                О нас
              </Link>
            </li>
            {/* 3. УМНАЯ ССЫЛКА: Если юзер есть -> Dashboard, если нет -> Login */}
            <li>
              <Link 
                to={user ? "/dashboard" : "/login"} 
                className="hover:text-primary-400 transition-colors hover:underline decoration-2 underline-offset-4"
              >
                Личный кабинет
              </Link>
            </li>
          </ul>
        </div>

        {/* Колонка 3: Контакты */}
        <div>
          <h3 className="text-xl font-black uppercase mb-6 border-b-4 border-accent inline-block pb-1">
            Контакты
          </h3>
          <ul className="space-y-3 font-bold text-gray-300">
             {/* (Оставил как было в твоем файле) */}
            <li className="flex items-start gap-3 group cursor-pointer">
              <span className="text-accent text-xl leading-none mt-1 group-hover:rotate-12 transition-transform">@</span>
              <span className="group-hover:text-white transition-colors">info@qudema.com</span>
            </li>
             <li className="flex items-start gap-3 group cursor-pointer">
              <span className="text-accent text-xl leading-none mt-1 group-hover:-rotate-12 transition-transform">T</span>
              <span className="group-hover:text-white transition-colors">@qudema_support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Копирайт */}
      <div className="text-center font-bold mt-12 pt-6 border-t-2 border-gray-800 text-gray-500 text-sm uppercase relative z-10">
        © {new Date().getFullYear()} Qudema Platform. Все права защищены, и стиль тоже.
      </div>
    </footer>
  );
};

export default Footer;