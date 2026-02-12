import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  FiUser, FiLogOut, FiGrid, FiBookOpen, FiCalendar, 
  FiSettings, FiActivity, FiClock, FiCheckCircle 
} from 'react-icons/fi';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview'); // Состояние активной вкладки

  const handleLogout = () => {
    logout();
    toast('Вы успешно вышли', {
        icon: '👋',
        style: { border: '3px solid #000', background: '#facc15', color: '#000' }
    });
  };

  if (!user) return <Navigate to="/login" />;

  // --- КОМПОНЕНТЫ ВКЛАДОК ---

  // 1. ВКЛАДКА "ОБЗОР"
  const TabOverview = () => (
    <div className="space-y-8 animate-fade-in">
      {/* Приветствие */}
      <div className="bg-primary-500 border-4 border-dark p-6 shadow-neo flex justify-between items-center text-white">
        <div>
           <h2 className="text-3xl font-black uppercase">Привет, {user.name}!</h2>
           <p className="font-bold opacity-90">Готов развалить пару вариантов ЕГЭ?</p>
        </div>
        <FiActivity className="text-6xl opacity-50 hidden md:block" />
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="bg-white p-4 border-4 border-dark text-center">
            <div className="text-4xl font-black text-purple-600">12</div>
            <div className="text-xs font-bold uppercase text-gray-500">Пройдено уроков</div>
         </div>
         <div className="bg-white p-4 border-4 border-dark text-center">
            <div className="text-4xl font-black text-green-500">85</div>
            <div className="text-xs font-bold uppercase text-gray-500">Баллов за ДЗ</div>
         </div>
         <div className="bg-white p-4 border-4 border-dark text-center">
            <div className="text-4xl font-black text-red-500">3</div>
            <div className="text-xs font-bold uppercase text-gray-500">Долги</div>
         </div>
         <div className="bg-white p-4 border-4 border-dark text-center">
            <div className="text-4xl font-black text-yellow-500">🔥 5</div>
            <div className="text-xs font-bold uppercase text-gray-500">Дней подряд</div>
         </div>
      </div>

      {/* Ближайшее событие */}
      <div className="bg-white border-4 border-dark p-6 shadow-neo relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 border-l-4 border-b-4 border-dark uppercase">Live</div>
        <h3 className="text-xl font-black uppercase mb-2">Следующий вебинар</h3>
        <p className="text-gray-600 font-bold mb-4">Разбор варианта №14. Тригонометрия и боль.</p>
        <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
            <span className="flex items-center gap-1"><FiCalendar /> Завтра</span>
            <span className="flex items-center gap-1"><FiClock /> 18:00 МСК</span>
        </div>
        <button className="mt-4 btn-neo bg-dark text-white px-6 py-2 text-sm w-full md:w-auto hover:bg-gray-800">
            Поставить напоминание
        </button>
      </div>
    </div>
  );

  // 2. ВКЛАДКА "КУРСЫ"
  const TabCourses = () => (
    <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
        {/* Карточка курса 1 */}
        <div className="bg-white border-4 border-dark p-6 shadow-neo flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black uppercase">ОГЭ Математика</h3>
                <span className="bg-green-100 text-green-800 text-xs font-black px-2 py-1 border-2 border-green-800 uppercase">Активен</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-2 border-dark mb-2">
                <div className="bg-primary-600 h-full w-[45%]"></div>
            </div>
            <p className="text-xs font-bold text-gray-500 mb-6">Прогресс: 45%</p>
            <button className="mt-auto btn-neo bg-accent text-dark w-full py-2 hover:bg-yellow-400">ПРОДОЛЖИТЬ</button>
        </div>

        {/* Карточка курса 2 */}
        <div className="bg-gray-100 border-4 border-dashed border-gray-400 p-6 flex flex-col items-center justify-center text-center opacity-70">
            <h3 className="text-xl font-black uppercase text-gray-500 mb-2">Русский язык</h3>
            <p className="text-sm font-bold text-gray-400 mb-4">Курс еще не куплен</p>
            <button className="btn-neo bg-white text-dark border-gray-400 px-6 py-2 hover:bg-gray-50">В КАТАЛОГ</button>
        </div>
    </div>
  );

  // 3. ВКЛАДКА "РАСПИСАНИЕ"
  const TabSchedule = () => (
    <div className="bg-white border-4 border-dark p-6 shadow-neo animate-fade-in">
        <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-accent inline-block">Твой план</h3>
        <ul className="space-y-4">
            <li className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-dark">
                <div className="bg-dark text-white p-2 font-black text-center min-w-[60px]">
                    <span className="block text-lg">15</span>
                    <span className="text-xs uppercase">ОКТ</span>
                </div>
                <div>
                    <h4 className="font-bold uppercase">Вебинар: Производные</h4>
                    <p className="text-xs text-gray-500 font-bold">18:00 • Преподаватель: Александр</p>
                </div>
            </li>
            <li className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-dark opacity-50">
                <div className="bg-gray-300 text-gray-600 p-2 font-black text-center min-w-[60px]">
                    <span className="block text-lg">12</span>
                    <span className="text-xs uppercase">ОКТ</span>
                </div>
                <div>
                    <h4 className="font-bold uppercase line-through">ДЗ: Квадратные уравнения</h4>
                    <p className="text-xs text-gray-500 font-bold flex items-center gap-1"><FiCheckCircle className="text-green-500"/> Выполнено</p>
                </div>
            </li>
        </ul>
    </div>
  );

  // 4. ВКЛАДКА "НАСТРОЙКИ"
  const TabSettings = () => (
    <div className="bg-white border-4 border-dark p-6 shadow-neo max-w-lg animate-fade-in">
        <h3 className="text-2xl font-black uppercase mb-6">Профиль</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success('Данные сохранены!'); }}>
            <div>
                <label className="block font-black uppercase text-xs mb-1">Твое имя</label>
                <input type="text" defaultValue={user.name} className="w-full p-2 border-2 border-dark font-bold focus:shadow-neo focus:outline-none"/>
            </div>
            <div>
                <label className="block font-black uppercase text-xs mb-1">Email</label>
                <input type="email" defaultValue={user.email || "user@example.com"} disabled className="w-full p-2 border-2 border-gray-300 bg-gray-100 text-gray-400 font-bold cursor-not-allowed"/>
            </div>
            <div className="pt-4 border-t-2 border-gray-200">
                <label className="block font-black uppercase text-xs mb-1">Новый пароль</label>
                <input type="password" placeholder="••••••" className="w-full p-2 border-2 border-dark font-bold focus:shadow-neo focus:outline-none"/>
            </div>
            <button className="btn-neo bg-primary-600 text-white w-full py-3 mt-4 hover:bg-primary-700">СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
        </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4 font-sans text-dark">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid md:grid-cols-12 gap-8">
            
            {/* --- ЛЕВОЕ МЕНЮ (САЙДБАР) --- */}
            <div className="md:col-span-3">
                <div className="bg-white border-4 border-dark shadow-neo sticky top-24">
                    {/* Аватарка */}
                    <div className="p-6 text-center border-b-4 border-dark bg-gray-50">
                        <div className="w-20 h-20 bg-accent rounded-full border-4 border-dark mx-auto flex items-center justify-center text-3xl mb-3">
                            👾
                        </div>
                        <h3 className="font-black uppercase truncate">{user.name}</h3>
                        <p className="text-xs font-bold text-gray-500">Студент</p>
                    </div>
                    
                    {/* Навигация */}
                    <nav className="flex flex-col">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`flex items-center gap-3 px-6 py-4 font-black uppercase transition-all hover:bg-gray-100 border-b-2 border-gray-100 text-left ${activeTab === 'overview' ? 'bg-primary-100 text-primary-700 border-l-8 border-l-primary-600' : ''}`}
                        >
                            <FiGrid size={20} /> Обзор
                        </button>
                        <button 
                            onClick={() => setActiveTab('courses')}
                            className={`flex items-center gap-3 px-6 py-4 font-black uppercase transition-all hover:bg-gray-100 border-b-2 border-gray-100 text-left ${activeTab === 'courses' ? 'bg-primary-100 text-primary-700 border-l-8 border-l-primary-600' : ''}`}
                        >
                            <FiBookOpen size={20} /> Курсы
                        </button>
                        <button 
                            onClick={() => setActiveTab('schedule')}
                            className={`flex items-center gap-3 px-6 py-4 font-black uppercase transition-all hover:bg-gray-100 border-b-2 border-gray-100 text-left ${activeTab === 'schedule' ? 'bg-primary-100 text-primary-700 border-l-8 border-l-primary-600' : ''}`}
                        >
                            <FiCalendar size={20} /> Расписание
                        </button>
                        <button 
                            onClick={() => setActiveTab('settings')}
                            className={`flex items-center gap-3 px-6 py-4 font-black uppercase transition-all hover:bg-gray-100 border-b-2 border-gray-100 text-left ${activeTab === 'settings' ? 'bg-primary-100 text-primary-700 border-l-8 border-l-primary-600' : ''}`}
                        >
                            <FiSettings size={20} /> Настройки
                        </button>
                        
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-6 py-4 font-black uppercase text-red-600 hover:bg-red-50 text-left mt-4 border-t-4 border-dark"
                        >
                            <FiLogOut size={20} /> Выйти
                        </button>
                    </nav>
                </div>
            </div>

            {/* --- ПРАВАЯ ЧАСТЬ (КОНТЕНТ) --- */}
            <div className="md:col-span-9">
                {activeTab === 'overview' && <TabOverview />}
                {activeTab === 'courses' && <TabCourses />}
                {activeTab === 'schedule' && <TabSchedule />}
                {activeTab === 'settings' && <TabSettings />}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;