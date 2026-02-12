import { FiCode, FiPenTool, FiActivity } from 'react-icons/fi';

export const COURSES_DATA = [
  {
    _id: '1',
    title: 'ЕГЭ МАТЕМАТИКЕ: ХАРДКОР',
    subtitle: 'Разносим вторую часть в щепки',
    category: 'Точные науки',
    description: 'Курс для тех, кто не ищет легких путей. Мы пропустим первую часть (ты и так ее знаешь) и сфокусируемся на параметрах, стереометрии и теории чисел.',
    price: '15 000 ₽',
    duration: '6 месяцев',
    level: 'Сложный',
    // Настройки для визуализации
    theme: {
      gradient: 'linear-gradient(45deg, #2563eb, #1e40af)', // Синий
      icon: <FiActivity className="text-9xl text-white/20 rotate-12" />
    },
    modules: ['Тригонометрия', 'Стереометрия', 'Экономика', 'Параметры']
  },
  {
    _id: '2',
    title: 'ИНФОРМАТИКА: PYTHON',
    subtitle: 'Кодим на 100 баллов',
    category: 'IT',
    description: 'Забудь паскаль. Учим решать 27-ю задачу кодом. Алгоритмы, которые работают.',
    price: '12 000 ₽',
    duration: '4 месяца',
    level: 'Средний',
    theme: {
      gradient: 'linear-gradient(45deg, #facc15, #ca8a04)', // Желтый
      icon: <FiCode className="text-9xl text-black/10 -rotate-6" />
    },
    modules: ['Синтаксис', 'Алгоритмы', 'Excel + Python', 'Задача 27']
  },
  {
    _id: '3',
    title: 'РУССКИЙ ЯЗЫК: СОЧИНЕНИЕ',
    subtitle: 'Аргументы и логика',
    category: 'Гуманитарные',
    description: 'Идеальная структура сочинения. Клише, аргументы и логика. Забираем максимум баллов.',
    price: '9 900 ₽',
    duration: '3 месяца',
    level: 'Легкий',
    theme: {
      gradient: 'linear-gradient(45deg, #ef4444, #991b1b)', // Красный
      icon: <FiPenTool className="text-9xl text-white/20 rotate-45" />
    },
    modules: ['Структура', 'Грамматика', 'Пунктуация', 'Практика']
  }
];