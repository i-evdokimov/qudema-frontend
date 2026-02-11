import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FiBook, FiClock, FiAward } from 'react-icons/fi';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Пока у нас нет реальных покупок в базе, сделаем заглушку
  // В будущем сюда будем грузить enrollments из API
  const myCourses = []; 

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Привет, {user?.firstName}! 👋</h1>
          <p className="text-gray-500 mt-2">Добро пожаловать в учебный кабинет Qudema.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <FiBook className="text-primary-600" /> Мои курсы
        </h2>

        {myCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Здесь будет список курсов */}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🎓
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">У вас пока нет активных курсов</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Самое время начать подготовку! Выберите предмет и присоединяйтесь к стобалльникам.
            </p>
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all"
            >
              Выбрать курс
            </Link>
          </div>
        )}
        
        {/* Дополнительные блоки (статистика) */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center gap-2"><FiClock /> Ближайшие вебинары</h3>
              <p className="text-gray-500 text-sm">Расписание пока пустое.</p>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center gap-2"><FiAward /> Мои достижения</h3>
              <p className="text-gray-500 text-sm">Выполняйте задания, чтобы получить награды.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;