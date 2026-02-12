import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCheckSquare, FiAward } from 'react-icons/fi';

const Home = () => {
  // Список предметов для бегущей строки
  const subjectsList = [
      'МАТЕМАТИКА', 'РУССКИЙ ЯЗЫК', 'ИНФОРМАТИКА', 'ФИЗИКА', 'ХИМИЯ', 
      'БИОЛОГИЯ', 'ИСТОРИЯ', 'ОБЩЕСТВОЗНАНИЕ', 'ЛИТЕРАТУРА', 'ГЕОГРАФИЯ'
  ];
  // Дублируем список
  const marqueeContent = [...subjectsList, ...subjectsList];

  return (
    <div className="min-h-screen bg-white text-dark overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-primary-500 border-b-4 border-dark py-20 lg:py-32 overflow-hidden">
        
        {/* ЛОГОТИП Q */}
        <div className="absolute top-10 right-10 md:top-20 md:right-20 z-0">
            <Link to="/about" className="group block relative">
                <div className="absolute top-2 left-2 w-32 h-32 md:w-48 md:h-48 bg-dark rounded-none"></div>
                <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white border-4 border-dark flex items-center justify-center transform transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 cursor-pointer">
                    <span className="font-black text-8xl md:text-9xl text-dark group-hover:text-primary-600 transition-colors">Q</span>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-accent px-2 py-1 border-2 border-dark text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Кто мы?</div>
                </div>
            </Link>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left pointer-events-none">
          <div className="inline-block pointer-events-auto bg-white border-4 border-dark px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_#000] transform -rotate-2">
            <span className="font-black uppercase tracking-widest text-sm md:text-base">Подготовка к ЕГЭ 2026</span>
          </div>
          
          <div className="pointer-events-auto">
            <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-8 text-white text-shadow-neo">
                ВЗЛОМАЙ ЕГЭ.<br />
                <span className="text-dark bg-accent px-2">ПОСТУПИ В ВУЗ МЕЧТЫ.</span> 
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl text-white/90">
                Никакой воды. Никаких скучных лекций. Только хардкор, практика и реальные знания.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <Link to="/courses" className="btn-neo bg-white text-dark text-xl px-10 py-4 hover:bg-dark hover:text-white flex items-center gap-3">
                ВЫБРАТЬ ПРЕДМЕТ <FiArrowRight />
                </Link>
                
                {/* ОБНОВЛЕННАЯ ССЫЛКА НА СТРАНИЦУ ABOUT */}
                <Link to="/about" className="font-bold underline decoration-4 underline-offset-4 decoration-dark text-dark text-lg hover:text-white transition-colors">
                    ПОЧЕМУ СТОИТ ВЫБРАТЬ ИМЕННО НАС?
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. БЕСКОНЕЧНАЯ БЕГУЩАЯ СТРОКА */}
      <div className="bg-accent border-b-4 border-dark py-4 overflow-hidden relative flex whitespace-nowrap">
        <div className="flex animate-marquee-infinite">
            {marqueeContent.map((item, index) => (
                <span key={index} className="text-2xl font-black uppercase tracking-wider text-dark mx-6 flex items-center">
                    {item} <span className="text-primary-600 ml-6">•</span>
                </span>
            ))}
        </div>
      </div>

      {/* 3. НОВАЯ СЕКЦИЯ: КАК ПРОХОДИТ ОБУЧЕНИЕ (ВМЕСТО "ПОЧЕМУ МЫ") */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black uppercase bg-white border-4 border-dark inline-block px-4 py-2 shadow-neo">
                КАК ПРОХОДИТ ОБУЧЕНИЕ?
             </h2>
             <p className="mt-4 font-bold text-gray-500">Простой алгоритм твоего успеха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Линия соединения для десктопа (декор) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-dark -z-10 transform -translate-y-1/2 border-y-2 border-dashed border-gray-400"></div>

             {/* ШАГ 1 */}
             <div className="bg-white p-8 border-4 border-dark shadow-neo relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-dark">1</div>
                <div className="h-40 flex items-center justify-center text-6xl text-primary-600">
                    <FiPlay />
                </div>
                <h3 className="text-2xl font-black uppercase text-center mb-2">Смотришь</h3>
                <p className="text-center text-gray-600 font-bold">Короткие видео-уроки. Только суть, без лишней болтовни.</p>
             </div>

             {/* ШАГ 2 */}
             <div className="bg-white p-8 border-4 border-dark shadow-neo relative mt-8 md:mt-0">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-dark w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-dark">2</div>
                <div className="h-40 flex items-center justify-center text-6xl text-accent">
                    <FiCheckSquare />
                </div>
                <h3 className="text-2xl font-black uppercase text-center mb-2">Решаешь</h3>
                <p className="text-center text-gray-600 font-bold">Домашка после каждого урока. Автопроверка и разбор ошибок.</p>
             </div>

             {/* ШАГ 3 */}
             <div className="bg-white p-8 border-4 border-dark shadow-neo relative mt-8 md:mt-0">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-dark text-white w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-white">3</div>
                <div className="h-40 flex items-center justify-center text-6xl text-dark">
                    <FiAward />
                </div>
                <h3 className="text-2xl font-black uppercase text-center mb-2">Сдаешь</h3>
                <p className="text-center text-gray-600 font-bold">Пробники каждый месяц. Идешь на экзамен уверенным.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-dark text-white py-20 border-t-4 border-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            ХВАТИТ ОТКЛАДЫВАТЬ.<br />ВРЕМЯ <span className="text-primary-500 underline decoration-white">ДЕЙСТВОВАТЬ</span>.
          </h2>
          <Link to="/courses" className="inline-block bg-accent text-dark border-4 border-white text-2xl font-black uppercase px-12 py-5 shadow-[8px_8px_0px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            ЗАПИСАТЬСЯ СЕЙЧАС
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;