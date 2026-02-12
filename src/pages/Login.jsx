import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast'; // Импорт

const Login = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const [isReloading, setIsReloading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // --- ЛОГИКА ВХОДА ---
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
        toast.error('Введите email и пароль');
        return;
    }

    // 1. Достаем юзера из памяти
    const storedUserStr = localStorage.getItem('registeredUser');
    
    if (!storedUserStr) {
        // Если вообще никто не регистрировался
        toast.error('Пользователь не найден. Сначала зарегистрируйся.');
        return;
    }

    const storedUser = JSON.parse(storedUserStr);

    // 2. Сравниваем Email и Пароль
    if (email === storedUser.email && password === storedUser.password) {
        // УСПЕХ
        login(storedUser.name); // Входим под именем из регистрации
        toast.success(`С возвращением, ${storedUser.name}!`);
        navigate('/dashboard');
    } else {
        // ОШИБКА
        toast.error('Неверный Email или Пароль');
    }
  };

  // --- ФИЗИКА (БЕЗ ИЗМЕНЕНИЙ) ---
  const colors = ['#a855f7', '#ec4899', '#06b6d4', '#1e293b', '#ffffff'];
  useEffect(() => {
    const Engine = Matter.Engine, Render = Matter.Render, Runner = Matter.Runner, World = Matter.World, Bodies = Matter.Bodies, Composite = Matter.Composite;
    const engine = Engine.create(); engineRef.current = engine;
    const render = Render.create({ element: sceneRef.current, engine: engine, options: { width: window.innerWidth, height: window.innerHeight, background: '#f3e8ff', wireframes: false, pixelRatio: window.devicePixelRatio }});
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
        if (type === 0) body = Bodies.circle(x, -150, size / 2, { render: commonStyle, restitution: 0.5 });
        else if (type === 1) body = Bodies.rectangle(x, -150, size, size, { render: commonStyle, restitution: 0.4 });
        else body = Bodies.polygon(x, -150, 3, size / 1.5, { render: commonStyle, restitution: 0.3 });
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
            <div className="bg-white border-4 border-dark shadow-[8px_8px_0px_0px_#000] p-8 md:p-12 max-w-md w-full relative pointer-events-auto mx-4">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-dark font-bold mb-6 text-sm uppercase"><FiArrowLeft /> На главную</Link>
                <h1 className="text-4xl font-black uppercase mb-2 text-dark text-center">Вход</h1>
                <p className="text-center text-gray-500 font-bold mb-8">Доступ только для своих</p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block font-black uppercase text-sm mb-2">Email</label>
                        <div className="relative">
                            <div className="absolute left-4 top-4 text-gray-400"><FiUser size={20}/></div>
                            <input 
                                type="text" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@qudema.ru" 
                                className="w-full pl-12 pr-4 py-3 border-4 border-dark font-bold focus:outline-none focus:shadow-neo focus:border-purple-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-black uppercase text-sm mb-2">Пароль</label>
                        <div className="relative">
                            <div className="absolute left-4 top-4 text-gray-400"><FiLock size={20}/></div>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                className="w-full pl-12 pr-4 py-3 border-4 border-dark font-bold focus:outline-none focus:shadow-neo focus:border-purple-500 transition-all"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full btn-neo btn-primary py-4 text-xl mt-4 bg-purple-500 hover:bg-purple-600 text-white border-purple-900">
                        ВОЙТИ В КАБИНЕТ
                    </button>
                </form>

                <div className="mt-8 text-center border-t-2 border-gray-200 pt-6">
                    <p className="font-bold text-gray-500">Нет аккаунта?</p>
                    <Link to="/register" className="text-purple-600 font-black uppercase hover:underline decoration-2">Записаться на курс</Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;