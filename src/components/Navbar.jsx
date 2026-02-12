import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="fixed w-full z-50 bg-white border-b-4 border-dark">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* ЛОГОТИП - ИСПРАВЛЕНО */}
        <Link to="/" className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2 select-none">
          {/* Добавил flex-shrink-0, чтобы квадрат не плющило */}
          <div className="w-8 h-8 bg-primary-600 border-2 border-dark flex-shrink-0"></div>
          Qudema
        </Link>

        {/* ОСТАЛЬНОЙ КОД БЕЗ ИЗМЕНЕНИЙ */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide">
          <Link to="/" className="hover:text-primary-600 transition-colors uppercase">Главная</Link>
          <Link to="/courses" className="hover:text-primary-600 transition-colors uppercase">Курсы</Link>
          <Link to="/about" className="hover:text-primary-600 transition-colors uppercase">О нас</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
            {user ? (
                <Link to="/dashboard" className="flex items-center gap-2 btn-neo bg-accent text-dark px-6 py-1 text-sm">
                    <FiUser /> {user.name}
                </Link>
            ) : (
                <Link to="/login" className="btn-neo btn-secondary px-6 py-1 text-sm">
                    ВОЙТИ
                </Link>
            )}
        </div>

        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-4 border-dark absolute w-full left-0 py-8 px-4 flex flex-col gap-6 text-xl font-black uppercase shadow-neo">
           <Link to="/" onClick={() => setIsOpen(false)}>Главная</Link>
           <Link to="/courses" onClick={() => setIsOpen(false)}>Курсы</Link>
           {user ? (
             <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-primary-600">Личный кабинет</Link>
           ) : (
             <Link to="/login" onClick={() => setIsOpen(false)} className="text-primary-600">Войти</Link>
           )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;