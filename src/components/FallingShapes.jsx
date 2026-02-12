import React, { useMemo } from 'react';

const FallingShapes = ({ variant = 'login' }) => {
  // Определяем палитры цветов для разных страниц в стиле нео-брутализм
  const colors = useMemo(() => {
    return variant === 'login' 
      ? ['bg-yellow-400', 'bg-blue-500', 'bg-dark', 'bg-white'] // Палитра Входа
      : ['bg-accent', 'bg-primary-600', 'bg-dark', 'bg-purple-400']; // Палитра Регистрации
  }, [variant]);

  // Генерируем 15 фигур со случайными параметрами
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      // Случайный цвет из палитры
      color: colors[Math.floor(Math.random() * colors.length)],
      // Случайная позиция по горизонтали
      left: `${Math.floor(Math.random() * 100)}%`,
      // Случайная задержка анимации, чтобы падали не одновременно
      delay: `${Math.random() * 5}s`,
      // Случайная длительность падения (от 5 до 10 секунд)
      duration: `${5 + Math.random() * 5}s`,
    }));
  }, [colors]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute border-4 border-dark shadow-neo animate-fall ${shape.color}`}
          style={{
            left: shape.left,
            // ЖЕСТКИЙ РАЗМЕР 90x150
            width: '90px',
            height: '150px',
            animationDelay: shape.delay,
            animationDuration: shape.duration,
            top: '-150px', // Начальная позиция за пределами экрана
          }}
        ></div>
      ))}
       {/* Полупрозрачный фон поверх фигур, чтобы текст читался */}
      <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm"></div>
    </div>
  );
};

export default FallingShapes;