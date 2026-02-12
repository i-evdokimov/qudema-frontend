import { FiTerminal, FiZap, FiTarget, FiUsers, FiCpu, FiArrowRight, FiCornerDownRight } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-white pb-20 overflow-x-hidden pt-12">
      
      {/* 1. HERO: SYSTEM CORE */}
      <section className="relative border-b-[6px] border-dark bg-accent py-20 overflow-hidden">
        {/* Фоновый паттерн */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 border-4 border-dark bg-white px-4 py-1 font-black uppercase text-sm mb-6 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <FiTerminal /> SYSTEM_CORE // V.2.0.24
            </div>

            <h1 
              data-text="МЫ — QUDEMA"
              className="glitch animate-stretch text-7xl md:text-[150px] font-black uppercase leading-[0.85] tracking-tighter mb-8 text-dark select-none"
            >
              МЫ — QUDEMA
            </h1>

            <div className="max-w-3xl border-l-8 border-dark pl-8 py-2">
               <p className="text-2xl md:text-4xl font-black uppercase leading-tight">
                  Современная образовательная платформа. <br/>
                  <span className="text-white text-shadow-neo">Твой системный подход</span> к высоким баллам на экзаменах.
               </p>
            </div>
        </div>
        
        {/* Декор */}
        <div className="absolute -right-20 -bottom-20 opacity-20 rotate-12">
            <FiCpu size={400} />
        </div>
      </section>

      {/* 2. БЕГУЩАЯ СТРОКА */}
      <div className="bg-dark text-white border-b-4 border-dark py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee-fast font-black uppercase text-sm">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 flex items-center gap-2 text-accent">
                   <FiCornerDownRight /> REAL_KNOWLEDGE_ONLY // MAXIMIZE_YOUR_RESULT 
                </span>
            ))}
        </div>
      </div>

      {/* 3. КОНТЕНТ: СТАТЫ И МАНИФЕСТ */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* ЛЕВАЯ КОЛОНКА: ИСТОРИЯ */}
            <div className="space-y-12">
                <div className="bg-white border-[6px] border-dark p-8 shadow-[12px_12px_0px_0px_#000] relative group">
                    <div className="absolute top-0 right-0 bg-yellow-400 border-b-4 border-l-4 border-dark px-4 py-2 font-black uppercase text-xs">
                        Origin Story
                    </div>
                    <h2 className="text-4xl font-black uppercase mb-6 flex items-center gap-3">
                        <FiZap className="text-yellow-400 group-hover:scale-125 transition-transform" /> Наш подход
                    </h2>
                    <p className="text-xl font-bold leading-relaxed uppercase text-gray-800 mb-6">
                        В 2018 году мы переосмыслили подготовку к экзаменам. Школьная программа часто перегружена лишней теорией. 
                        Мы собрали команду экспертов, структурировали материалы и создали алгоритмы обучения, 
                        которые позволяют освоить программу за 4 месяца с максимальной эффективностью.
                    </p>
                    <div className="h-2 w-full bg-gray-200 overflow-hidden">
                        <div className="h-full bg-dark w-3/4 animate-pulse"></div>
                    </div>
                </div>

                {/* Ценности */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-dark text-white p-6 border-4 border-dark shadow-neo transform rotate-1 hover:rotate-0 transition-transform">
                        <FiTarget className="text-5xl text-accent mb-4" />
                        <h3 className="text-2xl font-black uppercase mb-2">Результат</h3>
                        <p className="font-bold text-sm uppercase opacity-70">Превращаем неуверенность в твердые знания.</p>
                    </div>
                    <div className="bg-accent text-dark p-6 border-4 border-dark shadow-neo transform -rotate-1 hover:rotate-0 transition-transform">
                        <FiUsers className="text-5xl text-white mb-4" />
                        <h3 className="text-2xl font-black uppercase mb-2">Комьюнити</h3>
                        <p className="font-bold text-sm uppercase opacity-80">Сильное окружение. Поддержка 24/7.</p>
                    </div>
                </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА: ЦИФРЫ И ФОРМА */}
            <div className="space-y-12">
                
                {/* Статистика */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border-4 border-dark p-6 text-center shadow-neo hover:-translate-y-1 transition-transform">
                        <div className="text-5xl md:text-6xl font-black text-accent mb-2">3К+</div>
                        <div className="font-black uppercase text-xs">Выпускников</div>
                    </div>
                    <div className="bg-white border-4 border-dark p-6 text-center shadow-neo hover:-translate-y-1 transition-transform">
                        <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">87</div>
                        <div className="font-black uppercase text-xs">Средний балл</div>
                    </div>
                </div>

                {/* ФОРМА ЗАЯВКИ (Terminal Style) */}
                <div className="bg-dark p-1 border-[6px] border-dark shadow-[15px_15px_0px_0px_#22d3ee]">
                    <div className="bg-gray-900 p-8 border-2 border-white/10">
                        <h3 className="text-3xl font-black uppercase text-white mb-2 cursor-default">
                            <span className="text-accent animate-pulse">_</span> Начать обучение
                        </h3>
                        <p className="text-gray-400 font-mono text-sm mb-8 uppercase">
                            Оставь контакты. Мы свяжемся и подберем оптимальную стратегию подготовки.
                        </p>

                        <form className="space-y-6">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="ИМЯ / NAME" 
                                    className="w-full bg-transparent border-b-4 border-gray-600 p-4 text-white font-black uppercase placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                                />
                                <FiTerminal className="absolute right-4 top-4 text-gray-600 group-focus-within:text-accent transition-colors" />
                            </div>

                            <div className="relative group">
                                <input 
                                    type="tel" 
                                    placeholder="ТЕЛЕФОН / PHONE" 
                                    className="w-full bg-transparent border-b-4 border-gray-600 p-4 text-white font-black uppercase placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            <button className="w-full bg-accent text-dark border-4 border-transparent hover:border-white py-5 text-2xl font-black uppercase transition-all hover:bg-white hover:scale-[1.02] flex items-center justify-center gap-3 group">
                                ОТПРАВИТЬ ЗАЯВКУ <FiArrowRight className="group-hover:translate-x-2 transition-transform"/>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default About;