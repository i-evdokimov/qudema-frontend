import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  // Функция для проверки активной страницы
  const isActive = (path) => location.pathname === path;

  const linkStyles = (path) => 
    `font-black uppercase tracking-tighter transition-all duration-300 px-3 py-1 border-2 ${
      isActive(path) 
        ? 'bg-accent border-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
        : 'border-transparent hover:text-accent'
    }`;

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] bg-white border-b-4 border-dark">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* ЛОГОТИП */}
        <Link to="/" className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3 select-none group">
          <div className="w-10 h-10 bg-accent border-4 border-dark flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-rotate-6">
            Q
          </div>
          <span>Qudema</span>
        </Link>

        {/* НАВИГАЦИЯ */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={linkStyles('/')}>Главная</Link>
          <Link to="/courses" className={linkStyles('/courses')}>Курсы</Link>
          <Link to="/about" className={linkStyles('/about')}>О нас</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
            {user ? (
                <Link to="/dashboard" className="flex items-center gap-2 btn-neo bg-accent text-dark px-6 py-1 text-sm border-2 border-dark">
                    <FiUser /> Кабинет
                </Link>
            ) : (
                <Link to="/login" className="btn-neo bg-white border-4 border-dark px-6 py-1 text-sm font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent transition-colors">
                    ВОЙТИ
                </Link>
            )}
        </div>

        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;