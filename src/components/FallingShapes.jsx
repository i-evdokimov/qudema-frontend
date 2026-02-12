import React, { useMemo } from 'react';

const FallingShapes = ({ variant = 'login' }) => {
  const colors = useMemo(() => {
    return variant === 'login' 
      ? ['bg-yellow-400', 'bg-blue-500', 'bg-dark', 'bg-red-500'] 
      : ['bg-accent', 'bg-primary-600', 'bg-dark', 'bg-green-400'];
  }, [variant]);

  const shapes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      // Случайная задержка (от 0 до 10 сек)
      delay: `-${Math.random() * 10}s`, // Отрицательная задержка, чтобы они уже падали при открытии!
      duration: `${6 + Math.random() * 6}s`,
    }));
  }, [colors]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          // ВАЖНО: animate-fall берется из конфига
          className={`absolute border-4 border-dark shadow-neo animate-fall ${shape.color}`}
          style={{
            left: shape.left,
            width: '90px',
            height: '150px',
            animationDelay: shape.delay,
            animationDuration: shape.duration,
            top: '-160px', // Стартовая позиция чуть выше экрана
          }}
        ></div>
      ))}
      {/* Полупрозрачный фон, чтобы текст читался, но фигуры были видны */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default FallingShapes;