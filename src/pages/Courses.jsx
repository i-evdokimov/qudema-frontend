import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coursesAPI } from '../services/api';
import { FiSearch, FiFilter, FiArrowRight } from 'react-icons/fi';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  // Список предметов для фильтра
  const subjects = ['Все', 'Математика', 'Информатика', 'Русский язык', 'Физика', 'Обществознание'];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await coursesAPI.getAll().catch(() => null);
        
        if (response && response.data && response.data.length > 0) {
          setCourses(response.data);
        } else {
          // ФЕЙКОВЫЕ ДАННЫЕ (ЧТОБЫ НЕ БЫЛО БЕЛОГО ЭКРАНА)
          // Если база пустая или ошибка, показываем примеры
          setCourses([
            {
              id: 1,
              title: 'ЕГЭ по Информатике 2026',
              description: 'Полный курс подготовки на 90+. Python, Excel, теория игр и программирование.',
              price: '4 500',
              subject: 'Информатика',
              grade: '11',
              thumbnail: null
            },
            {
              id: 2,
              title: 'Профильная Математика: Взлом',
              description: 'Разбираем вторую часть. Параметры, планиметрия и теория чисел.',
              price: '3 900',
              subject: 'Математика',
              grade: '11',
              thumbnail: null
            },
            {
              id: 3,
              title: 'Русский язык: Сочинение',
              description: 'Идеальное сочинение за 2 недели. Клише, аргументы и проверка экспертом.',
              price: '2 500',
              subject: 'Русский язык',
              grade: '11',
              thumbnail: null
            }
          ]);
        }
      } catch (err) {
        console.error('Ошибка:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Фильтрация курсов
  const filteredCourses = courses.filter(course => {
    const matchesSubject = selectedSubject === 'Все' || course.subject === selectedSubject;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-xl font-bold text-gray-400 animate-pulse">Загрузка каталога...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Заголовок страницы */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Каталог курсов</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Выбери предмет, преподавателя и начни подготовку к экзаменам уже сегодня.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Сайдбар с фильтрами (на мобиле будет сверху) */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              
              {/* Поиск */}
              <div className="relative mb-8">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Поиск курса..." 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Фильтр предметов */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiFilter /> Предметы
                </h3>
                <div className="space-y-2">
                  {subjects.map(subject => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedSubject === subject 
                          ? 'bg-primary-600 text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Сетка курсов */}
          <div className="lg:w-3/4">
            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                    {/* Картинка курса */}
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      {course.thumbnail ? (
                        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                           <span className="text-6xl">🎓</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                          {course.subject}
                        </span>
                      </div>
                    </div>

                    {/* Контент */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {course.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                        {course.description}
                      </p>

                      <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                        <div>
                          <p className="text-xs text-gray-400 font-medium uppercase">Стоимость</p>
                          <p className="text-xl font-extrabold text-gray-900">{course.price} ₽</p>
                        </div>
                        <Link 
                          to={`/courses/${course.id}`} 
                          className="w-10 h-10 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all"
                        >
                          <FiArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">По вашему запросу ничего не найдено.</p>
                <button 
                  onClick={() => {setSelectedSubject('Все'); setSearchQuery('')}}
                  className="mt-4 text-primary-600 font-bold hover:underline"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;