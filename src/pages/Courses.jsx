import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter, FiArrowRight, FiBook, FiActivity, FiCpu, FiGlobe, FiHexagon, FiZap } from 'react-icons/fi';
import { COURSES } from '../coursesData';

const Courses = () => {
  const [filter, setFilter] = useState('Все');

  const categories = ['Все', ...new Set(COURSES.map(c => c.category))];

  const filteredCourses = filter === 'Все' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  const getIcon = (type) => {
    const iconBase = "text-5xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-12";
    switch(type) {
        case 'math': return <FiActivity className={`${iconBase} text-accent`} />;
        case 'book': return <FiBook className={`${iconBase} text-yellow-400`} />;
        case 'atom': return <FiHexagon className={`${iconBase} text-blue-500`} />;
        case 'flask': return <FiCpu className={`${iconBase} text-green-500`} />;
        case 'dna': return <FiActivity className={`${iconBase} text-red-500`} />;
        case 'globe': return <FiGlobe className={`${iconBase} text-accent`} />;
        default: return <FiZap className={`${iconBase} text-accent`} />;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-3 pb-20 overflow-x-hidden">
      
      {/* HEADER: Теперь с анимацией Glitch и Stretch */}
      <div className="container mx-auto px-4 mb-16 mt-12">
        <div className="inline-block relative group">
            <h1 
                data-text="КАТАЛОГ КУРСОВ"
                className="glitch animate-stretch text-5xl md:text-8xl font-black uppercase tracking-tighter bg-dark text-white px-6 py-4 transform -rotate-0 shadow-[8px_8px_0px_0px_rgba(34,211,238,1)] select-none cursor-default"
            >
                КАТАЛОГ КУРСОВ
            </h1>
            <div className="absolute -top-6 -right-6 hidden md:block">
                <div className="bg-yellow-400 border-4 border-dark p-2 font-black uppercase text-sm animate-bounce">
                    Select Mission_
                </div>
            </div>
        </div>
      </div>

      {/* ФИЛЬТРЫ */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-dark text-white px-4 py-2 font-black uppercase text-sm mr-2">
                <FiFilter /> Фильтр:
            </div>
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 font-black uppercase border-4 border-dark transition-all active:translate-y-1 ${
                        filter === cat 
                        ? 'bg-accent text-dark shadow-none translate-y-1' 
                        : 'bg-white text-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 hover:shadow-none hover:translate-y-1'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* СЕТКА КАРТОЧЕК */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCourses.map((course) => (
          <Link 
            to={`/course/${course.id}`} 
            key={course.id}
            className="group relative bg-white border-[6px] border-dark p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-dark text-white text-sm font-black px-4 py-1 border-b-4 border-l-4 border-white uppercase tracking-widest">
              {course.level}
            </div>

            {getIcon(course.image)}

            <h3 className="text-3xl font-black uppercase mb-4 leading-none group-hover:text-accent transition-colors">
              {course.title}
            </h3>
            
            <div className="w-full h-1 bg-dark mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>

            <p className="font-bold text-gray-500 uppercase text-xs mb-6 flex-grow leading-tight">
                {course.category} // Mode_Online
            </p>

            <div className="flex justify-between items-center mt-auto pt-6 border-t-4 border-gray-100">
              <div>
                 <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Стоимость</span>
                 <span className="text-4xl font-black text-dark tracking-tighter">{course.price}</span>
              </div>
              <div className="w-14 h-14 bg-dark text-white flex items-center justify-center border-4 border-dark group-hover:bg-accent group-hover:text-dark transition-colors">
                <FiArrowRight size={30} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity"></div>
          </Link>
        ))}
      </div>

      {/* Кибер-барьер внизу */}
      <div className="mt-20 h-8 bg-dark w-full relative overflow-hidden">
         <div className="absolute inset-0 flex items-center">
            <div className="flex whitespace-nowrap animate-marquee-fast opacity-30">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-white font-black text-xs mx-10 italic">
                        SELECT_YOUR_FUTURE // DATA_ENCRYPTED // QUDEMA_ACADEMY
                    </span>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Courses;