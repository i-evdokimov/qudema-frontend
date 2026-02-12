import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiTerminal, FiCpu, FiAlertTriangle, FiActivity, FiCornerDownRight, FiCheckSquare, FiTarget } from 'react-icons/fi';
import { COURSES } from '../coursesData'; 

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // ИСПРАВЛЕНИЕ: Приводим c.id к строке для надежного сравнения с URL
    const found = COURSES.find(c => String(c.id) === id);
    setCourse(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) return <div className="min-h-screen bg-gray-900"></div>;

  // --- 1. УМНЫЙ КОНТЕНТ ---
  const getCategoryDetails = () => {
      switch(course.category) {
          case 'Точные науки':
              return {
                  modules: ['Алгебра логики и теория чисел', 'Геометрия: Планиметрия + Стереометрия', 'Экономические задачи и оптимизация', 'Параметры и нестандартные методы'],
                  bonus: 'Разбор заданий прошлых лет'
              };
          case 'IT':
              return {
                  modules: ['Синтаксис и базовые алгоритмы', 'Объектно-ориентированное программирование', 'Базы данных и SQL', 'Решение олимпиадных задач'],
                  bonus: 'Code Review твоего кода'
              };
          case 'Гуманитарные':
              return {
                  modules: ['Работа с историческими источниками', 'Написание эссе и сочинений', 'Право и экономика', 'Аргументация и логика'],
                  bonus: 'Банк готовых аргументов'
              };
          case 'Естественные':
              return {
                  modules: ['Цитология и генетика', 'Органическая химия', 'Анатомия и физиология', 'Решение расчетных задач'],
                  bonus: 'Лабораторные работы онлайн'
              };
          default:
              return {
                  modules: ['Диагностика знаний', 'Изучение теории', 'Практика на реальных КИМах', 'Финальное тестирование'],
                  bonus: 'Персональная стратегия'
              };
      }
  };

  const details = getCategoryDetails();

  // --- 2. НАСТРОЙКА ТЕМЫ ---
  const getTheme = () => {
    if (['math', 'physics', 'it', 'atom'].includes(course.image)) {
        // ТЕХНАРИ
        return {
            mainBg: 'bg-gray-900',
            textColor: 'text-white',
            accentColor: 'text-cyan-400',
            borderColor: 'border-cyan-400',
            shadowBox: 'shadow-[8px_8px_0px_0px_#22d3ee]',
            icon: <FiCpu className="text-cyan-400" />,
            marqueeBg: 'bg-cyan-400 text-gray-900',
            contentBg: 'bg-gray-800',
            descText: 'text-gray-300'
        };
    } else if (['book', 'globe'].includes(course.image)) {
        // ГУМАНИТАРИИ
        return {
            mainBg: 'bg-yellow-400',
            textColor: 'text-black',
            accentColor: 'text-black',
            borderColor: 'border-black',
            shadowBox: 'shadow-[8px_8px_0px_0px_#000]',
            icon: <FiAlertTriangle className="text-black" />,
            marqueeBg: 'bg-black text-yellow-400',
            contentBg: 'bg-white',
            descText: 'text-black'
        };
    } else {
        // ЕСТЕСТВЕННЫЕ
        return {
            mainBg: 'bg-white',
            textColor: 'text-black',
            accentColor: 'text-green-600',
            borderColor: 'border-green-600',
            shadowBox: 'shadow-[8px_8px_0px_0px_#16a34a]',
            icon: <FiActivity className="text-green-600" />,
            marqueeBg: 'bg-green-600 text-white',
            contentBg: 'bg-gray-100',
            descText: 'text-gray-900'
        };
    }
  }

  const theme = getTheme();

  return (
    <div className={`min-h-screen pb-20 overflow-x-hidden ${theme.mainBg}`}>
      
      {/* HERO BLOCK */}
      <section className={`relative border-b-[6px] ${theme.borderColor} pt-8 pb-16 overflow-hidden`}>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/courses" className={`inline-flex items-center gap-2 font-black uppercase text-sm mb-8 hover:-translate-x-2 transition-transform ${theme.textColor} opacity-100`}>
            <FiArrowLeft /> Отмена миссии
          </Link>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="max-w-4xl relative z-10">
              
              <div className={`inline-flex items-center gap-2 border-2 ${theme.borderColor} ${theme.textColor} px-3 py-1 font-black uppercase text-xs mb-4 ${theme.contentBg}`}>
                {theme.icon} {course.category} // {course.level}
              </div>
              
              <h1 
                data-text={course.title}
                className={`text-5xl md:text-[80px] lg:text-[100px] font-black uppercase leading-[0.85] tracking-tighter mb-6 glitch animate-stretch select-none ${theme.textColor}`}
              >
                {course.title}
              </h1>

              {/* Подзаголовок на контрастной подложке */}
              <div className={`inline-block ${theme.contentBg} px-4 py-2 border-l-8 ${theme.borderColor}`}>
                 <p className={`text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight ${theme.textColor}`}>
                    {/* ИСПРАВЛЕНИЕ: Безопасный вызов split */}
                    {course.description?.split('.')[0]}.
                 </p>
              </div>
            </div>
            
            <div className={`hidden lg:flex w-60 h-60 border-[6px] ${theme.borderColor} ${theme.textColor} items-center justify-center text-8xl ${theme.shadowBox} rotate-6 ${theme.contentBg}`}>
               {theme.icon}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={`${theme.marqueeBg} border-b-4 ${theme.borderColor} py-1 overflow-hidden select-none`}>
        <div className="flex whitespace-nowrap animate-marquee-fast font-black uppercase text-xs">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 flex items-center gap-2">
                    {/* ИСПРАВЛЕНИЕ: Безопасное приведение ID к строке */}
                    <FiCornerDownRight /> SYSTEM_OVERRIDE // {String(course.id).toUpperCase()} 
                </span>
            ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Описание */}
            <div className={`border-[4px] ${theme.borderColor} p-8 ${theme.shadowBox} ${theme.contentBg} relative`}>
               <div className={`absolute top-0 right-0 p-4 opacity-20 ${theme.accentColor}`}><FiTerminal size={60} /></div>
               
               <h3 className={`text-2xl font-black uppercase mb-4 flex items-center gap-2 ${theme.textColor}`}>
                 <span className={`${theme.accentColor}`}>{'>'}</span> ДЕТАЛИ ЗАДАЧИ:
               </h3>
               
               <div className={`text-lg font-bold leading-relaxed uppercase ${theme.descText} font-mono`}>
                 <p className="mb-4">{course.description}</p>
                 <p className="opacity-80">
                    Курс построен на принципе "от простого к сложному". 
                    Мы начинаем с диагностики твоих текущих знаний, выявляем слабые места и закрываем их. 
                    Никакой лишней теории — только то, что реально встречается в КИМах этого года.
                 </p>
               </div>
            </div>

             {/* Модули */}
             <div className={`border-2 ${theme.borderColor} p-6 ${theme.textColor} ${theme.mainBg === 'bg-white' ? 'bg-white' : ''}`}>
                <h4 className="font-black uppercase text-xl mb-6 border-b-2 inline-block border-current pb-1">Протокол обучения:</h4>
                <ul className="grid md:grid-cols-2 gap-4">
                    {details.modules.map((mod, i) => (
                        <li key={i} className="flex items-start gap-3 font-bold uppercase text-sm">
                            <FiCheckSquare className={`mt-1 text-xl ${theme.accentColor}`} />
                            <span>{mod}</span>
                        </li>
                    ))}
                </ul>
                <div className={`mt-6 p-4 ${theme.marqueeBg} font-black uppercase text-sm text-center transform -skew-x-6`}>
                    Бонус: {details.bonus}
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN (Sticky) */}
          <div className="lg:col-span-1 z-20">
            <div className={`sticky top-24 border-[6px] ${theme.borderColor} ${theme.shadowBox} p-8 text-center ${theme.contentBg}`}>
               
               <div className="flex items-center justify-center gap-2 mb-6 opacity-60">
                   <FiTarget className={theme.textColor} />
                   <span className={`font-black uppercase text-xs ${theme.textColor}`}>Доступ открыт</span>
               </div>

               <div className={`text-6xl font-black tracking-tighter mb-8 ${theme.textColor}`}>
                 {course.price}
               </div>
               
               <button className={`w-full ${theme.textColor} border-4 ${theme.borderColor} py-5 text-2xl font-black uppercase transition-all shadow-none hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_currentColor] group relative overflow-hidden bg-transparent`}>
                 <span className="relative z-10 group-hover:text-inherit">ЗАПИСАТЬСЯ</span>
                 <div className={`absolute inset-0 ${theme.marqueeBg} transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 -z-0`}></div>
               </button>

               <div className={`mt-6 text-[10px] font-black uppercase ${theme.textColor} opacity-40 border-t-2 border-current pt-4`}>
                 Secure Transaction // Instant Access
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;