import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCheckSquare, FiArrowLeft } from 'react-icons/fi';
// ИМПОРТИРУЕМ ДАННЫЕ
import { COURSES } from '../coursesData';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Ищем курс в нашем файле по ID
    const found = COURSES.find(c => c.id === id);
    setCourse(found);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-black mb-4">КУРС НЕ НАЙДЕН</h1>
        <Link to="/courses" className="btn-neo btn-primary">ВЕРНУТЬСЯ В КАТАЛОГ</Link>
      </div>
    );
  }

  // Генерируем цвет фона в зависимости от категории (для красоты)
  const getGradient = () => {
     if (course.category === 'Точные науки') return 'linear-gradient(45deg, #2563eb, #1e40af)';
     if (course.category === 'Гуманитарные') return 'linear-gradient(45deg, #ef4444, #991b1b)';
     return 'linear-gradient(45deg, #10b981, #047857)'; // Естественные
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ХЕДЕР */}
      <div className="bg-dark text-white pt-24 pb-24 relative overflow-hidden border-b-4 border-dark">
        <div 
            className="absolute top-0 right-0 w-2/3 h-full opacity-30 transform skew-x-12 translate-x-20"
            style={{ background: getGradient() }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-bold mb-8 uppercase tracking-widest transition-colors">
            <FiArrowLeft /> Назад к списку
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight text-shadow-neo">
              {course.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
               <span className="bg-primary-500 text-white px-4 py-2 border-2 border-white font-bold uppercase shadow-[4px_4px_0px_0px_#ffffff]">
                 {course.duration}
               </span>
               <span className="bg-accent text-dark px-4 py-2 border-2 border-white font-bold uppercase shadow-[4px_4px_0px_0px_#ffffff]">
                 {course.level}
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* КОНТЕНТ */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <div className="border-l-8 border-primary-500 pl-8 mb-12">
              <h2 className="text-3xl font-black uppercase mb-6 text-dark">О курсе</h2>
              <p className="text-lg text-gray-800 leading-relaxed font-bold">
                {course.description}
              </p>
            </div>

            <div className="bg-gray-50 p-8 border-4 border-dark shadow-neo mb-12">
              <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <FiCheckSquare className="text-primary-600"/> Что входит в программу?
              </h2>
              {/* Стандартный список модулей (так как на скрине нет подробностей, ставим универсальный) */}
              <ul className="space-y-4">
                  <li className="flex items-start gap-3 font-bold text-dark border-b-2 border-gray-200 pb-2">
                    <span className="text-primary-600">01.</span> Входное тестирование
                  </li>
                  <li className="flex items-start gap-3 font-bold text-dark border-b-2 border-gray-200 pb-2">
                    <span className="text-primary-600">02.</span> Разбор всех тем кодификатора
                  </li>
                  <li className="flex items-start gap-3 font-bold text-dark border-b-2 border-gray-200 pb-2">
                    <span className="text-primary-600">03.</span> Домашние задания с проверкой
                  </li>
                  <li className="flex items-start gap-3 font-bold text-dark">
                    <span className="text-primary-600">04.</span> Пробные экзамены
                  </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border-4 border-dark shadow-neo p-8">
              <div className="text-center mb-8">
                <span className="block text-gray-500 font-bold uppercase text-sm mb-2">Стоимость обучения</span>
                <span className="block text-5xl font-black text-primary-600">
                  {course.price}
                </span>
                <span className="text-sm font-bold text-gray-400">/ месяц</span>
              </div>
              
              <button className="w-full btn-neo btn-primary text-xl py-4 mb-4 hover:bg-accent hover:text-dark hover:border-dark transition-transform active:scale-95">
                ЗАПИСАТЬСЯ
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;