import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCheckSquare, FiAward, FiTerminal } from 'react-icons/fi';

import { useAuth } from '../context/AuthContext';

const Home = () => {

  const { user } = useAuth();
  const linkDestination = user ? '/dashboard' : '/register';

  const subjectsList = ['МАТЕМАТИКА', 'РУССКИЙ ЯЗЫК', 'ИНФОРМАТИКА', 'ФИЗИКА', 'ХИМИЯ', 'БИОЛОГИЯ', 'ОБЩЕСТВОЗНАНИЕ'];
  const marqueeContent = [...subjectsList, ...subjectsList, ...subjectsList];

  return (
    <div className="min-h-screen bg-white text-dark overflow-x-hidden pt-8">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-accent border-b-8 border-dark py-20 lg:py-11 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start">
          
          {/* Плашка Набор 2026 */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center bg-white border-4 border-dark px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-all cursor-default">
              <span className="mr-3 text-2xl font-black" style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>⚡</span>
              <span className="font-black uppercase text-xl tracking-tighter">НАБОР 2026 ОТКРЫТ</span>
            </div>
          </div>
          
          {/* ЗАГОЛОВОК: Тот самый огромный и глючный */}
          <div className="group cursor-default mb-10 w-full">
            <div className="relative">
              <h1 
                data-text="ВЗЛОМАЙ ЕГЭ"
                className="glitch animate-stretch text-[65px] md:text-[160px] font-black uppercase leading-[0.8] tracking-[-0.07em] text-dark select-none"
              >
                ВЗЛОМАЙ ЕГЭ
              </h1>
            </div>
            
            <div className="mt-8 md:mt-12">
               <h2 className="text-2xl md:text-7xl font-black uppercase leading-none bg-dark text-white inline-block px-6 py-4 transform skew-x-[-15deg] shadow-[8px_8px_0px_0px_#fff] transition-all hover:skew-x-0">
                  ПОСТУПИ В ВУЗ МЕЧТЫ
               </h2>
            </div>
          </div>

          <p className="text-xl md:text-4xl font-black mb-12 max-w-3xl leading-none border-l-[12px] border-dark pl-8 uppercase tracking-tighter">
            Qudema — <span className="text-white">твой личный чит-код.</span> Мы не учим, мы хакаем экзамен.
          </p>

          {/* КНОПКИ */}
          <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
            {/* КНОПКА 1 (ПОГНАЛИ) - теперь ведет куда нужно */}
            <Link 
              to={linkDestination} 
              className="btn-neo btn-primary group flex items-center justify-center gap-3 text-xl md:text-2xl px-10 py-6"
            >
              {user ? 'В КАБИНЕТ' : 'ПОГНАЛИ'} <FiArrowRight className="group-hover:translate-x-2 transition-transform"/>
            </Link>
            <Link to="/courses" className="btn-neo bg-white text-dark text-3xl px-14 py-8 flex items-center justify-center gap-4 group">
              КУРСЫ <FiPlay className="group-hover:fill-current transition-all" />
            </Link>
          </div>
        </div>

        {/* Фоновая хрень для объема */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white opacity-30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      </section>

      {/* 2. УЗКАЯ БЕГУЩАЯ СТРОКА */}
      <div className="bg-yellow-300 border-b-8 border-dark py-2 overflow-hidden select-none shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)]">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeContent.map((subject, i) => (
            <span key={i} className="text-lg md:text-2xl font-black uppercase mx-16 flex items-center italic">
                {subject} <span className="ml-10 not-italic opacity-40">//</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. ФИЧИ (Более агрессивные) */}
      <section className="py-32 bg-white px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-16">
             <div className="group bg-white p-10 border-[6px] border-dark shadow-neo hover:bg-accent transition-colors duration-300">
                <FiCheckSquare className="text-7xl mb-8 transform group-hover:rotate-12 transition-transform" />
                <h3 className="text-4xl font-black uppercase mb-4 leading-none italic">БЕЗ ВОДЫ</h3>
                <p className="font-black text-xl leading-tight uppercase opacity-70">Только алгоритмы, которые реально работают. Никакого мусора.</p>
             </div>
             
             <div className="group bg-white p-10 border-[6px] border-dark shadow-neo hover:bg-yellow-400 transition-colors duration-300 transform md:-rotate-2 hover:rotate-0">
                <FiPlay className="text-7xl mb-8 transform group-hover:scale-125 transition-transform" />
                <h3 className="text-4xl font-black uppercase mb-4 leading-none italic">МЕМЫ & КВИЗЫ</h3>
                <p className="font-black text-xl leading-tight uppercase opacity-70">Подготовка как игра. Если тебе скучно — мы возвращаем деньги.</p>
             </div>

             <div className="group bg-white p-10 border-[6px] border-dark shadow-neo hover:bg-accent transition-colors duration-300">
                <FiAward className="text-7xl mb-8 animate-bounce" />
                <h3 className="text-4xl font-black uppercase mb-4 leading-none italic">РЕЗУЛЬТАТ</h3>
                <p className="font-black text-xl leading-tight uppercase opacity-70">Средний балл 87+. Твои конкуренты будут в шоке.</p>
             </div>
        </div>
      </section>

      {/* 4. ГЛЮЧНЫЙ РАЗДЕЛИТЕЛЬ ПЕРЕД ФУТЕРОМ (Cyber Barrier) */}
      <div className="h-12 w-full bg-dark relative overflow-hidden border-b-4 border-t-4 border-accent">
          <div className="absolute inset-0 flex items-center">
              <div className="flex whitespace-nowrap animate-marquee-fast opacity-50">
                  {[...Array(20)].map((_, i) => (
                      <span key={i} className="text-accent font-black text-xs mx-4">
                          ERROR_CODE: 0xQUDEMA // 
                      </span>
                  ))}
              </div>
          </div>
          {/* Неоновая вспышка */}
          <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 animate-pulse"></div>
      </div>

      {/* 5. ПРЕД-ФУТЕР CTA */}
      <section className="bg-dark py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-5xl md:text-[100px] font-black text-white uppercase mb-16 tracking-[calc(-0.05em)] leading-none">
                  ТВОЙ БЮДЖЕТ - <span className="text-accent glitch" data-text="ЖДЕТ ТЕБЯ"> ЖДЕТ ТЕБЯ</span><br/>
              </h2>
              <Link 
                to={linkDestination} 
                className="btn-neo bg-accent text-dark text-4xl px-20 py-10 inline-block transform hover:scale-90 transition-transform"
              >
                  {user ? 'ПЕРЕЙТИ К ОБУЧЕНИЮ' : 'НАЧНИ ПРЯМО СЕЙЧАС'}
              </Link>
          </div>
          {/* Сетка на фоне */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>
      {/* 4. ГЛЮЧНЫЙ РАЗДЕЛИТЕЛЬ ПЕРЕД ФУТЕРОМ (Cyber Barrier) */}
      <div className="h-12 w-full bg-dark relative overflow-hidden border-b-4 border-t-4 border-accent">
          <div className="absolute inset-0 flex items-center">
              <div className="flex whitespace-nowrap animate-marquee-fast opacity-50">
                  {[...Array(20)].map((_, i) => (
                      <span key={i} className="text-accent font-black text-xs mx-4">
                         MODE: 0xROAD_TO_100 // 
                      </span>
                  ))}
              </div>
          </div>
          {/* Неоновая вспышка */}
          <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Home;