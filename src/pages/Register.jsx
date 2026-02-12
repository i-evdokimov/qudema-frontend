import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import toast from 'react-hot-toast'; // Импорт уведомлений

const Register = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const [isReloading, setIsReloading] = useState(false);
  const navigate = useNavigate();

  // --- СОСТОЯНИЕ ФОРМЫ ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Обновление полей ввода
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- ЛОГИКА ОТПРАВКИ ---
  const handleSubmit = (e) => {
    e.preventDefault(); // Не перезагружать страницу
    
    const { name, email, password, confirmPassword } = formData;

    // 1. Проверка на пустые поля
    if (!name || !email || !password || !confirmPassword) {
        toast.error('Заполни все поля, не ленись!');
        return;
    }

    // 2. Проверка валидности Email (RegEx)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error('Email какой-то странный. Проверь.');
        return;
    }

    // 3. Проверка совпадения паролей
    if (password !== confirmPassword) {
        toast.error('Пароли не совпадают!');
        return;
    }

    // 4. Проверка длины пароля
    if (password.length < 6) {
        toast.error('Пароль слишком простой. Минимум 6 символов.');
        return;
    }

    // --- УСПЕХ ---
    // Сохраняем "пользователя" в память браузера (имитация базы данных)
    const user = { name, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    toast.success('Аккаунт создан! Теперь войди.');
    
    // Перекидываем на страницу входа через 1.5 секунды
    setTimeout(() => {
        navigate('/login');
    }, 1500);
  };

  // --- ФИЗИКА (БЕЗ ИЗМЕНЕНИЙ) ---
  const colors = ['#3b82f6', '#facc15', '#ef4444', '#ffffff', '#1e293b'];
  useEffect(() => {
    const Engine = Matter.Engine, Render = Matter.Render, Runner = Matter.Runner, World = Matter.World, Bodies = Matter.Bodies, Composite = Matter.Composite;
    const engine = Engine.create(); engineRef.current = engine;
    const render = Render.create({ element: sceneRef.current, engine: engine, options: { width: window.innerWidth, height: window.innerHeight, background: '#f8fafc', wireframes: false, pixelRatio: window.devicePixelRatio }});
    const wallOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
    World.add(engine.world, [
        Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, wallOptions),
        Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, wallOptions),
        Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, wallOptions)
    ]);
    Render.run(render);
    const runner = Runner.create(); Runner.run(runner, engine);

    let count = 0; const maxShapes = 50; let intervalId;
    const spawnShape = () => {
        if (count >= maxShapes) { startReloadSequence(); return; }
        const x = Math.random() * window.innerWidth;
        const size = Math.random() * 40 + 90;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const type = Math.floor(Math.random() * 3);
        const commonStyle = { fillStyle: color, strokeStyle: '#000000', lineWidth: 4 };
        let body;
        if (type === 0) body = Bodies.circle(x, -150, size / 2, { render: commonStyle, restitution: 0.8 });
        else if (type === 1) body = Bodies.rectangle(x, -150, size, size, { render: commonStyle, restitution: 0.6 });
        else body = Bodies.polygon(x, -150, 3, size / 1.5, { render: commonStyle, restitution: 0.5 });
        World.add(engine.world, body); count++;
    };
    intervalId = setInterval(spawnShape, 200);
    const startReloadSequence = () => {
        clearInterval(intervalId); setIsReloading(true);
        setTimeout(() => { Composite.clear(engine.world, false); 
            World.add(engine.world, [Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, wallOptions), Bodies.rectangle(-50, window.innerHeight / 2, 100, window.innerHeight, wallOptions), Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 100, window.innerHeight, wallOptions)]);
            count = 0; setIsReloading(false); intervalId = setInterval(spawnShape, 200); }, 3000);
    };
    return () => { clearInterval(intervalId); Render.stop(render); Runner.stop(runner); if (render.canvas) render.canvas.remove(); };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
        <div ref={sceneRef} className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isReloading ? 'opacity-20' : 'opacity-100'}`} />
        {isReloading && (<div className="absolute inset-0 z-10 flex items-center justify-center animate-pulse pointer-events-none"><h2 className="text-5xl md:text-8xl font-black uppercase text-dark bg-white px-8 py-4 border-4 border-dark shadow-[8px_8px_0px_0px_#000]">RELOAD GAME...</h2></div>)}

        <div className="relative z-20 min-h-screen flex items-center justify-center pointer-events-none">
            <div className="bg-white border-4 border-dark p-8 md:p-12 max-w-lg w-full shadow-[12px_12px_0px_0px_#ef4444] pointer-events-auto mx-4">
                <Link to="/login" className="inline-flex items-center gap-2 text-gray-500 hover:text-dark font-bold mb-6 text-sm uppercase"><FiArrowLeft /> Назад к входу</Link>
                <h1 className="text-4xl font-black uppercase mb-2 text-dark">Регистрация</h1>
                <p className="text-gray-500 font-bold mb-8">Присоединяйся к тусовке.</p>

                {/* ФОРМА */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        name="name" value={formData.name} onChange={handleChange}
                        type="text" placeholder="ТВОЕ ИМЯ" 
                        className="w-full p-4 border-4 border-dark font-bold focus:outline-none focus:shadow-neo transition-shadow"
                    />
                    <input 
                        name="email" value={formData.email} onChange={handleChange}
                        type="email" placeholder="EMAIL" 
                        className="w-full p-4 border-4 border-dark font-bold focus:outline-none focus:shadow-neo transition-shadow"
                    />
                    <input 
                        name="password" value={formData.password} onChange={handleChange}
                        type="password" placeholder="ПРИДУМАЙ ПАРОЛЬ" 
                        className="w-full p-4 border-4 border-dark font-bold focus:outline-none focus:shadow-neo transition-shadow"
                    />
                    <input 
                        name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                        type="password" placeholder="ПОВТОРИ ПАРОЛЬ" 
                        className="w-full p-4 border-4 border-dark font-bold focus:outline-none focus:shadow-neo transition-shadow"
                    />
                    
                    <button type="submit" className="w-full btn-neo btn-primary py-4 text-xl uppercase mt-4">
                        Создать аккаунт
                    </button>
                </form>

                <p className="text-xs font-bold text-gray-400 mt-6 text-center">Нажимая кнопку, ты соглашаешься учиться.</p>
            </div>
        </div>
    </div>
  );
};

export default Register;