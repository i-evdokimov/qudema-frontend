import { FiPhone, FiUser, FiZap } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* ЗАГОЛОВОК */}
      <div className="bg-white border-b-4 border-dark py-16">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              КТО МЫ ТАКИЕ?
            </h1>
            <p className="text-xl mt-4 font-bold bg-accent inline-block px-4 py-1 border-2 border-dark transform rotate-1">
              История создания учебного центра «КУДЕМА»
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* ЛЕВАЯ КОЛОНКА - ОСНОВНОЙ ТЕКСТ (8 колонок) */}
            <div className="lg:col-span-8 space-y-8">
                
                {/* Блок 1: Опыт */}
                <div className="bg-white p-8 border-4 border-dark shadow-neo">
                    <div className="flex items-center gap-4 mb-6 border-b-2 border-gray-200 pb-4">
                        <div className="bg-primary-500 text-white p-3 border-2 border-dark">
                            <FiUser size={24} />
                        </div>
                        <h2 className="text-2xl font-black uppercase">Бэкграунд</h2>
                    </div>
                    <p className="text-lg font-medium leading-relaxed mb-4">
                        Долгое время я работала помощником директора Центра дополнительного образования при одном замечательном Университете города Новосибирска. 
                    </p>
                    <p className="text-lg font-medium leading-relaxed">
                        Моя работа — это постоянная связь между преподавателями, школьниками, родителями и студентами. Эта копилка знаний помогает мне с каждым годом лучше настраивать этапы подготовки и направлять абитуриентов на верный путь.
                    </p>
                </div>

                {/* Блок 2: Проблема и Решение */}
                <div className="bg-dark text-white p-8 border-4 border-dark shadow-[8px_8px_0px_0px_#facc15]">
                    <div className="flex items-center gap-4 mb-6 border-b-2 border-gray-600 pb-4">
                        <div className="bg-accent text-dark p-3 border-2 border-white">
                            <FiZap size={24} />
                        </div>
                        <h2 className="text-2xl font-black uppercase text-accent">Почему мы открылись?</h2>
                    </div>
                    <p className="text-lg font-medium leading-relaxed mb-6">
                        У меня было огромное количество идей и замыслов. Но, к сожалению, муниципальная система имеет <span className="text-accent underline">слишком много ограничений</span> и лимитов.
                    </p>
                    <p className="text-xl font-bold uppercase border-l-4 border-accent pl-4">
                        Именно поэтому в 2023 году мы открыли «КУДЕМУ». Чтобы реализовать все идеи без тормозов.
                    </p>
                </div>

            </div>

            {/* ПРАВАЯ КОЛОНКА - ИНФО И КОНТАКТЫ (4 колонки) */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Директор */}
                <div className="bg-white border-4 border-dark p-6 relative">
                    <div className="absolute -top-4 -right-4 bg-primary-500 text-white font-bold px-4 py-1 border-2 border-dark text-sm uppercase">
                        Основатель
                    </div>
                    <h3 className="text-xl font-black uppercase mb-1">Евгения Кудряшова</h3>
                    <p className="text-gray-600 font-bold text-sm mb-4">Генеральный директор ООО «Учебный центр КУДЕМА»</p>
                    <p className="text-sm font-medium italic">
                        «Мы работаем в онлайн формате, а также очно — во взаимодействии с нашими партнерами.»
                    </p>
                </div>

                {/* Контакты */}
                <div className="bg-accent border-4 border-dark p-6 shadow-neo">
                    <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                        <FiPhone /> Связь с нами
                    </h3>
                    <div className="space-y-2 font-bold text-lg">
                        <a href="tel:89139415441" className="block hover:underline decoration-2">8-913-941-54-41</a>
                        <a href="tel:8915385415" className="block hover:underline decoration-2">8-915-38-54-15</a>
                    </div>
                </div>

            </div>
        </div>

        {/* НИЖНИЙ БЛОК - ФОРМА ЗАЯВКИ (СТИЛИЗОВАННАЯ) */}
        <div className="mt-16 bg-primary-100 border-4 border-dark p-8 md:p-12 relative overflow-hidden">
             {/* Декор */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

             <div className="max-w-2xl relative z-10">
                <h2 className="text-4xl font-black uppercase mb-4">Остались вопросы?</h2>
                <p className="text-xl font-bold mb-8">
                    Оставьте заявку, и мы перезвоним быстрее, чем ты решишь квадратное уравнение.
                </p>

                <form className="space-y-4 max-w-md">
                    <input 
                        type="text" 
                        placeholder="ВАШЕ ИМЯ" 
                        className="w-full p-4 border-4 border-dark font-bold focus:outline-none focus:shadow-neo transition-shadow"
                    />
                    <input 
                        type="tel" 
                        placeholder="+7 (999) 000-00-00" 
                        className="w-full p-4 border-4 border-dark font-bold focus:outline-none focus:shadow-neo transition-shadow"
                    />
                    <button className="w-full btn-neo btn-primary py-4 text-xl">
                        ОСТАВИТЬ ЗАЯВКУ
                    </button>
                    <p className="text-xs font-bold text-gray-500 mt-2">
                        Нажимая кнопку, вы соглашаетесь с тем, что мы крутые.
                    </p>
                </form>
             </div>
        </div>

      </div>
    </div>
  );
};

export default About;