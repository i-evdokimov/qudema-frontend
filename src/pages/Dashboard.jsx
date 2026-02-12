import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  FiUser, FiLogOut, FiGrid, FiBookOpen, FiCalendar, 
  FiSettings, FiActivity, FiLock, FiCpu, FiTerminal, FiAlertCircle, FiSave 
} from 'react-icons/fi';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    toast('СЕССИЯ ЗАВЕРШЕНА', {
        icon: '🔌',
        style: { border: '3px solid #000', background: '#fff', color: '#000', fontFamily: 'monospace', fontWeight: 'bold' }
    });
  };

  if (!user) return <Navigate to="/login" />;

  // --- КОМПОНЕНТЫ ВКЛАДОК ---

  // 1. ОБЗОР (ГЛАВНАЯ ПАНЕЛЬ)
  const TabOverview = () => (
    <div className="space-y-8 animate-fade-in">
      
      {/* Приветствие */}
      <div className="bg-white border-4 border-dark p-6 shadow-neo flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
        <div className="relative z-10">
           <h2 className="text-3xl font-black uppercase">Привет, {user.name}!</h2>
           <p className="text-gray-600 font-bold mt-2 uppercase flex items-center gap-2">
             <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
             Система в норме. Готов к загрузке знаний.
           </p>
        </div>
        <div className="md:text-right relative z-10">
            <span className="block text-xs font-black text-gray-400 uppercase tracking-widest">Твой уровень</span>
            <span className="text-4xl font-black text-primary-600">NOOB</span>
        </div>
        {/* Декор фона */}
        <FiActivity className="absolute -right-4 -bottom-4 text-9xl text-gray-100 opacity-50 rotate-12" />
      </div>

      {/* Статистика (Grid) */}
      <div className="grid md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-dark text-white p-6 border-4 border-dark shadow-neo hover:-translate-y-1 transition-transform">
              <FiCpu className="text-4xl mb-4 text-accent" />
              <div className="text-4xl font-black mb-1">0%</div>
              <div className="text-xs font-bold uppercase text-gray-400">Прогресс курса</div>
          </div>
          {/* Stat 2 */}
          <div className="bg-accent p-6 border-4 border-dark shadow-neo hover:-translate-y-1 transition-transform">
              <FiTerminal className="text-4xl mb-4 text-dark" />
              <div className="text-4xl font-black mb-1">0</div>
              <div className="text-xs font-bold uppercase text-dark">Решено задач</div>
          </div>
          {/* Stat 3 */}
          <div className="bg-white p-6 border-4 border-dark shadow-neo hover:-translate-y-1 transition-transform">
              <FiAlertCircle className="text-4xl mb-4 text-primary-600" />
              <div className="text-4xl font-black mb-1">2</div>
              <div className="text-xs font-bold uppercase text-gray-500">Дедлайна горят</div>
          </div>
      </div>
      
      {/* Активность */}
      <div className="bg-white border-4 border-dark p-6 shadow-neo">
         <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
             <FiActivity /> Последняя активность
         </h3>
         <div className="space-y-4">
             <div className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-gray-100">
                 <div className="w-10 h-10 bg-gray-200 flex items-center justify-center font-bold text-gray-500">?</div>
                 <div>
                     <div className="font-bold text-dark">Активности пока нет</div>
                     <div className="text-xs text-gray-500 uppercase">Начни проходить курсы</div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );

  // 2. МОИ КУРСЫ
  const TabCourses = () => (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-dark pb-4 inline-block">Мои модули</h2>
        
        <div className="bg-gray-100 border-4 border-dashed border-gray-300 p-12 text-center rounded-lg">
            <FiLock className="mx-auto text-6xl text-gray-400 mb-4" />
            <h3 className="text-xl font-black text-gray-500 uppercase">Нет доступных курсов</h3>
            <p className="font-bold text-gray-400 mt-2">Приобретите доступ в каталоге, чтобы начать взлом ЕГЭ.</p>
        </div>
    </div>
  );

  // 3. РАСПИСАНИЕ
  const TabSchedule = () => (
    <div className="space-y-6 animate-fade-in">
        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-dark pb-4 inline-block">Календарь событий</h2>
        <div className="bg-white border-4 border-dark p-8 shadow-neo">
            <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex flex-col md:flex-row gap-4 items-start md:items-center border-b-2 border-gray-100 pb-4 last:border-0">
                        <div className="bg-dark text-accent font-black p-3 text-center min-w-[80px]">
                            <div className="text-xl">2{item}</div>
                            <div className="text-xs uppercase">ОКТ</div>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-black text-lg uppercase">Вебинар: Разбор параметров №{item}</h4>
                            <p className="text-gray-500 font-bold text-sm">18:00 МСК • Преподаватель: Alexa</p>
                        </div>
                        <button className="px-6 py-2 border-2 border-dark font-bold uppercase hover:bg-dark hover:text-white transition-colors text-sm">
                            Записаться
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );

  // 4. НАСТРОЙКИ (ИСПРАВЛЕННАЯ ЛОГИКА)
  const TabSettings = () => {
    // Локальное состояние для формы настроек
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        oldPassword: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault(); // <--- САМОЕ ВАЖНОЕ: ОСТАНАВЛИВАЕМ ПЕРЕЗАГРУЗКУ/РЕДИРЕКТ
        
        // Здесь мы просто имитируем сохранение
        // Если бы был бэкенд для апдейта, мы бы вызвали его здесь
        toast.success('ПРОФИЛЬ ОБНОВЛЕН', {
            style: { border: '3px solid #000', background: '#4ade80', color: '#000', fontWeight: 'bold' }
        });
    };

    return (
        <div className="max-w-2xl animate-fade-in">
            <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-dark pb-4 inline-block">Настройки профиля</h2>
            
            <form onSubmit={handleSave} className="bg-white border-4 border-dark p-8 shadow-neo space-y-6">
                
                {/* Имя */}
                <div>
                    <label className="block font-black uppercase text-sm mb-2 text-gray-500">Имя пользователя</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 border-4 border-gray-200 font-bold focus:border-dark focus:outline-none transition-colors"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block font-black uppercase text-sm mb-2 text-gray-500">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 border-4 border-gray-200 font-bold bg-gray-50 text-gray-400 cursor-not-allowed"
                        disabled
                    />
                </div>

                <div className="h-1 bg-gray-100 my-6"></div>

                {/* Смена пароля */}
                <div>
                    <label className="block font-black uppercase text-sm mb-2 text-gray-500">Новый пароль</label>
                    <input 
                        type="password" 
                        name="newPassword"
                        placeholder="Оставьте пустым, если не меняете"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full p-4 border-4 border-gray-200 font-bold focus:border-dark focus:outline-none transition-colors"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-primary-600 text-white font-black uppercase py-4 text-xl border-4 border-transparent hover:bg-white hover:text-dark hover:border-dark hover:shadow-neo transition-all flex items-center justify-center gap-2"
                >
                    <FiSave /> Сохранить изменения
                </button>

            </form>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Заголовок ЛК */}
        <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2">Личный кабинет</h1>
            <p className="text-xl font-bold text-gray-500 uppercase">Управление аккаунтом // QUDEMA_DASHBOARD_v.1.0</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* --- ЛЕВАЯ ЧАСТЬ (МЕНЮ) --- */}
            <div className="lg:col-span-3">
                <div className="sticky top-24 bg-white border-4 border-dark shadow-neo overflow-hidden">
                    <div className="p-6 bg-dark text-white border-b-4 border-dark">
                        <div className="w-16 h-16 bg-accent rounded-full border-4 border-white mb-4 flex items-center justify-center text-dark text-2xl font-black">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-bold text-gray-400 text-xs uppercase mb-1">Ученик</div>
                        <div className="font-black text-xl leading-none truncate">{user.name}</div>
                    </div>
                    
                    <nav className="flex flex-col">
                        <NavButton 
                            active={activeTab === 'overview'} 
                            onClick={() => setActiveTab('overview')} 
                            icon={<FiGrid size={20}/>} 
                            label="Обзор" 
                        />
                        <NavButton 
                            active={activeTab === 'courses'} 
                            onClick={() => setActiveTab('courses')} 
                            icon={<FiBookOpen size={20}/>} 
                            label="Мои курсы" 
                        />
                        <NavButton 
                            active={activeTab === 'schedule'} 
                            onClick={() => setActiveTab('schedule')} 
                            icon={<FiCalendar size={20}/>} 
                            label="Расписание" 
                        />
                        <NavButton 
                            active={activeTab === 'settings'} 
                            onClick={() => setActiveTab('settings')} 
                            icon={<FiSettings size={20}/>} 
                            label="Настройки" 
                        />
                        
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-6 py-5 font-black uppercase text-red-600 hover:bg-red-50 hover:pl-8 transition-all border-t-2 border-gray-100 mt-auto"
                        >
                            <FiLogOut size={20} /> Выход
                        </button>
                    </nav>
                </div>
            </div>

            {/* --- ПРАВАЯ ЧАСТЬ (КОНТЕНТ) --- */}
            <div className="lg:col-span-9 min-h-[500px]">
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

// Вспомогательный компонент для кнопок меню
const NavButton = ({ active, onClick, icon, label }) => (
    <button 
        onClick={onClick}
        className={`
            flex items-center gap-3 px-6 py-5 font-black uppercase transition-all border-b-2 border-gray-100 text-sm w-full text-left
            ${active 
                ? 'bg-primary-50 text-primary-700 pl-8 border-l-4 border-l-primary-600' 
                : 'bg-white text-gray-600 hover:bg-gray-100 hover:pl-8 hover:text-dark'}
        `}
    >
        <span className={active ? 'text-primary-600' : 'text-gray-400'}>{icon}</span>
        {label}
    </button>
);

export default Dashboard;