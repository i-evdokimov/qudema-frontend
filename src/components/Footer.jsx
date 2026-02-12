import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaVk } from 'react-icons/fa'; // Импортируем иконки соцсетей

const Footer = () => {
  return (
    <footer className="bg-dark text-white border-t-4 border-dark pt-12 pb-6">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* ЛОГОТИП И ОПИСАНИЕ */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-black uppercase tracking-tighter flex items-center gap-2 mb-4 select-none">
              <div className="w-8 h-8 bg-primary-600 border-2 border-white"></div>
              Qudema
            </Link>
            <p className="text-gray-400 font-bold max-w-xs">
              Образовательная платформа нового поколения. Готовим к ЕГЭ/ОГЭ без воды и скучных лекций.
            </p>
          </div>

          {/* НАВИГАЦИЯ */}
          <div>
            <h4 className="text-xl font-black uppercase mb-6 text-primary-500">Навигация</h4>
            <ul className="space-y-3 font-bold text-gray-300">
              <li>
                <Link to="/courses" className="hover:text-white hover:underline decoration-2 underline-offset-4">
                  Каталог курсов
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline decoration-2 underline-offset-4">
                  О нас / Как мы учим
                </Link>
              </li>
              <li>
                {/* Если будет страница FAQ, можно добавить сюда */}
                <Link to="/login" className="hover:text-white hover:underline decoration-2 underline-offset-4">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          {/* КОНТАКТЫ И СОЦСЕТИ */}
          <div>
            <h4 className="text-xl font-black uppercase mb-6 text-accent">Контакты</h4>
            <div className="flex gap-4">
                {/* TELEGRAM */}
                <a 
                    href="https://t.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white text-dark flex items-center justify-center text-2xl border-4 border-transparent hover:border-primary-500 hover:text-primary-500 transition-all shadow-[4px_4px_0px_0px_#555] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    <FaTelegramPlane />
                </a>

                {/* VK */}
                <a 
                    href="https://vk.com/qudema" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white text-dark flex items-center justify-center text-2xl border-4 border-transparent hover:border-blue-600 hover:text-blue-600 transition-all shadow-[4px_4px_0px_0px_#555] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    <FaVk />
                </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-bold">
                Пиши нам 24/7. Мы не спим.
            </p>
          </div>

        </div>

        {/* КОПИРАЙТ */}
        <div className="border-t-2 border-gray-800 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-500">
          <p>&copy; 2026 Qudema Education.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
             <span>Политика конфиденциальности</span>
             <span>Оферта</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;