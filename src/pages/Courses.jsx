import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter, FiArrowRight, FiBook, FiActivity, FiCpu, FiGlobe, FiHexagon } from 'react-icons/fi';
// ИМПОРТИРУЕМ НАШУ БАЗУ ДАННЫХ
import { COURSES } from '../coursesData';

const Courses = () => {
  const [filter, setFilter] = useState('Все');

  // Уникальные категории для кнопок
  const categories = ['Все', ...new Set(COURSES.map(c => c.category))];

  // Фильтрация
  const filteredCourses = filter === 'Все' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  // Функция для выбора иконки
  const getIcon = (type) => {
    switch(type) {
        case 'math': return <FiActivity className="text-4xl mb-4 text-primary-600" />;
        case 'book': return <FiBook className="text-4xl mb-4 text-accent" />;
        case 'atom': return <FiHexagon className="text-4xl mb-4 text-blue-500" />;
        case 'flask': return <FiCpu className="text-4xl mb-4 text-green-500" />; // Используем Cpu как абстракцию или замени на другую
        case 'dna': return <FiActivity className="text-4xl mb-4 text-green-600" />;
        case 'people': return <FiGlobe className="text-4xl mb-4 text-orange-500" />;
        default: return <FiBook className="text-4xl mb-4 text-dark" />;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* ХЕДЕР КАТАЛОГА */}
      <div className="bg-dark text-white pt-24 pb-12 border-b-4 border-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
            КаталÓг <span className="text-accent">курсов</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-bold">
            Выбирай свое оружие для битвы с экзаменами. Цены, от которых не дергается глаз.
          </p>
        </div>
      </div>

      {/* ФИЛЬТРЫ */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 items-center mb-12">
          <div className="flex items-center gap-2 font-black uppercase text-xl mr-4">
            <FiFilter /> Фильтр:
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border-4 border-dark font-bold uppercase transition-all shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none
                ${filter === cat ? 'bg-primary-500 text-white' : 'bg-white text-dark hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* СЕТКА КУРСОВ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <Link 
              to={`/course/${course.id}`} 
              key={course.id}
              className="group block bg-white border-4 border-dark p-8 shadow-neo hover:-translate-y-2 transition-transform duration-200 relative overflow-hidden"
            >
              {/* Бейдж уровня (ОГЭ/ЕГЭ) */}
              <div className="absolute top-0 right-0 bg-dark text-white text-xs font-bold px-3 py-1 border-b-4 border-l-4 border-white">
                {course.level}
              </div>

              {getIcon(course.image)}

              <h3 className="text-2xl font-black uppercase mb-4 leading-tight group-hover:text-primary-600 transition-colors">
                {course.title}
              </h3>
              
              <div className="w-12 h-2 bg-accent mb-6"></div>

              <div className="flex justify-between items-end mt-auto">
                <div>
                   <span className="block text-xs font-bold text-gray-500 uppercase">Стоимость</span>
                   <span className="text-3xl font-black text-dark">{course.price}</span>
                </div>
                <div className="w-10 h-10 bg-dark text-white flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors">
                  <FiArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;