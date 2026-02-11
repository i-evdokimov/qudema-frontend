import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiLogOut, FiUser } from 'react-icons/fi';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    // Добавили жирную нижнюю границу
    <header className="bg-white border-b-4 border-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Логотип в новом стиле */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-primary-500 border-2 border-dark text-white flex items-center justify-center text-2xl font-black transform group-hover:-rotate-6 transition-transform shadow-neo-hover">
            Q
          </div>
          <span className="text-3xl font-black text-dark tracking-tighter uppercase">
            Qudema
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-bold text-dark uppercase tracking-wide">
          <Link to="/courses" className="hover:text-primary-600 transition-colors hover:-translate-y-1">Курсы</Link>
          <a href="#" className="hover:text-primary-600 transition-colors hover:-translate-y-1">О школе</a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4 font-bold">
              <Link to="/dashboard" className="hidden md:flex items-center gap-2 text-dark hover:text-primary-600">
                <FiUser className="border-2 border-dark p-1 w-8 h-8" /> Кабинет
              </Link>
              <button onClick={handleLogout} className="border-2 border-dark p-2 hover:bg-red-500 hover:text-white transition-colors shadow-neo-hover active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                <FiLogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="font-bold text-dark uppercase hover:underline px-3">
                Войти
              </Link>
              {/* Используем новый CSS класс для кнопок */}
              <Link to="/courses" className="btn-neo btn-primary">
                Начать
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;