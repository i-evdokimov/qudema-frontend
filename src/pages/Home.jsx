import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { coursesAPI } from '../services/api';
import { FiArrowRight, FiZap, FiTarget } from 'react-icons/fi';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const response = await coursesAPI.getAll().catch(() => ({ data: [] }));
        setCourses(response.data ? response.data.slice(0, 3) : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTopCourses();
  }, []);

  return (
    <div className="font-sans overflow-hidden">
      {/* HERO SECTION - Скошенный и дерзкий */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 bg-white">
        {/* Фоновый скошенный блок */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary-100 border-l-4 border-dark -skew-x-12 transform origin-top-right z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              {/* Декоративный элемент */}
              <div className="inline-block bg-accent border-2 border-dark px-4 py-2 font-black uppercase text-sm mb-6 shadow-neo-hover -rotate-2">
                ⚡️ Набор 2026 открыт
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-dark mb-8 leading-none uppercase tracking-tighter">
                Взломай <br/>
                <span className="text-primary-500 text-shadow-neo inline-block transform -skew-x-6 border-b-8 border-primary-500 px-2">
                  Экзамены
                </span>
              </h1>
              <p className="text-xl text-dark font-bold mb-10 leading-relaxed max-w-lg border-l-4 border-primary-500 pl-6">
                Онлайн-школа Qudema. Без воды, без стресса, с максимальным результатом. Твой билет в топовый вуз.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/courses" className="btn-neo btn-primary text-xl">
                  Выбрать предмет
                </Link>
                <Link to="/register" className="btn-neo btn-secondary text-xl flex items-center justify-center gap-2">
                   Пробный урок <FiArrowRight/>
                </Link>
              </div>
            </div>

            {/* Правая часть - Имитация фото в рамке */}
            <div className="relative lg:h-full flex justify-center">
              {/* Жесткая рамка с тенью */}
              <div className="relative w-full max-w-md aspect-square bg-dark border-4 border-dark shadow-neo rotate-3 hover:rotate-0 transition-all duration-300 z-20">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-300 flex flex-col items-center justify-center p-10 opacity-90 border-4 border-white m-1">
                    <span className="text-9xl mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">🚀</span>
                    <p className="text-white text-2xl font-black text-center uppercase transform -skew-x-6">Qudema Team</p>
                 </div>
              </div>
               {/* Декоративный задний фон */}
               <div className="absolute top-10 -right-10 w-full h-full border-4 border-primary-500 bg-transparent z-10 -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРИНЦИПЫ - Рваный разделитель */}
      <section className="bg-dark text-white py-20 relative">
        {/* Рваный верхний край (SVG clip-path имитация) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full fill-white">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
             <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Наши принципы</h2>
             <div className="w-24 h-2 bg-primary-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-4 border-primary-500 bg-dark shadow-neo-white transform hover:-translate-y-2 transition-all">
              <FiZap className="text-5xl text-primary-400 mb-6" />
              <h3 className="text-2xl font-black uppercase mb-4">Скорость</h3>
              <p className="text-gray-300 font-medium">Учим решать задачи быстрее, чем требует экзамен. Экономим время на нервах.</p>
            </div>
            <div className="p-8 border-4 border-white bg-primary-600 text-dark shadow-neo transform hover:-translate-y-2 transition-all md:-mt-8">
              <FiTarget className="text-5xl text-dark mb-6" />
              <h3 className="text-2xl font-black uppercase mb-4">Результат</h3>
              <p className="font-bold">Мы не учим "для общего развития". Мы натаскиваем на максимальный балл.</p>
            </div>
            <div className="p-8 border-4 border-primary-500 bg-dark shadow-neo-white transform hover:-translate-y-2 transition-all">
              <span className="text-5xl mb-6 block">🧠</span>
              <h3 className="text-2xl font-black uppercase mb-4">Система</h3>
              <p className="text-gray-300 font-medium">Четкая структура знаний. Никакого хаоса в голове перед экзаменом.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;