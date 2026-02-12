import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay, FiCheckSquare, FiAward } from 'react-icons/fi';

const Home = () => {
  const subjectsList = [
      'МАТЕМАТИКА', 'РУССКИЙ ЯЗЫК', 'ИНФОРМАТИКА', 'ФИЗИКА', 'ХИМИЯ', 
      'БИОЛОГИЯ', 'ИСТОРИЯ', 'ОБЩЕСТВОЗНАНИЕ', 'ЛИТЕРАТУРА', 'ГЕОГРАФИЯ'
  ];
  const marqueeContent = [...subjectsList, ...subjectsList];

  return (
    <div className="min-h-screen bg-white text-dark overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#7c3aed] border-b-8 border-dark py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
             <div className="inline-block bg-yellow-400 border-4 border-dark px-4 py-1 mb-6 shadow-neo transform -rotate-2">
                <span className="font-black uppercase text-xl">Твой путь в ВУЗ мечты начинается здесь</span>
             </div>
             
             <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
                ВЗЛОМАЙ <br />
                <span className="bg-white text-dark px-4 border-4 border-dark shadow-[8px_8px_0px_0px_rgba(34,211,238,1)]">ЕГЭ</span>
             </h1>

             <p className="text-xl md:text-3xl font-bold text-white mb-12 leading-tight max-w-2xl">
                Мы превратили подготовку в игру, где финал — твой бюджет в топовом ВУЗе.
             </p>

             <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/register" className="btn-neo bg-accent text-dark text-2xl px-10 py-5 flex items-center justify-center gap-3">
                    Начать бесплатно <FiArrowRight />
                </Link>
                <Link to="/courses" className="btn-neo bg-white text-dark text-2xl px-10 py-5 flex items-center justify-center gap-3">
                    Все курсы <FiPlay />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 2. БЕГУЩАЯ СТРОКА */}
      <div className="bg-yellow-400 border-b-8 border-dark py-6 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeContent.map((subject, i) => (
            <span key={i} className="text-4xl md:text-5xl font-black uppercase mx-8 flex items-center">
                {subject} <span className="ml-16 w-4 h-4 bg-dark rounded-none"></span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. КАК МЫ УЧИМ */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-20 text-center tracking-tighter">
             КАК МЫ <span className="text-accent underline decoration-dark decoration-8">УЧИМ</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
             <div className="bg-accent p-8 border-4 border-dark shadow-neo relative">
                <div className="absolute -top-6 left-8 bg-dark text-white w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-white">1</div>
                <div className="h-40 flex items-center justify-center text-6xl text-dark mb-4">
                    <FiCheckSquare />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">Выбираешь</h3>
                <p className="font-bold">Предметы, которые нужны для поступления. Без лишней нагрузки.</p>
             </div>

             <div className="bg-yellow-400 p-8 border-4 border-dark shadow-neo relative md:mt-12">
                <div className="absolute -top-6 left-8 bg-dark text-white w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-white">2</div>
                <div className="h-40 flex items-center justify-center text-6xl text-dark mb-4">
                    <FiPlay />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">Смотришь</h3>
                <p className="font-bold">Уроки в записи или онлайн. С мемами и понятными примерами.</p>
             </div>

             <div className="bg-[#7c3aed] p-8 border-4 border-dark shadow-neo relative text-white">
                <div className="absolute -top-6 left-8 bg-white text-dark w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-dark">3</div>
                <div className="h-40 flex items-center justify-center text-6xl text-white mb-4">
                    <FiAward />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">Сдаешь</h3>
                <p className="font-bold">Пробники каждый месяц. Идешь на экзамен уверенным в себе.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-dark text-white py-24 border-t-8 border-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-8xl font-black uppercase mb-12 tracking-tight">
            ХВАТИТ ЖДАТЬ.<br />ВРЕМЯ <span className="text-accent underline decoration-white">ДЕЙСТВОВАТЬ</span>.
          </h2>
          <Link to="/register" className="btn-neo bg-yellow-400 text-dark text-3xl px-16 py-8 inline-block shadow-[8px_8px_0px_0px_#fff]">
            ПОГНАЛИ!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;