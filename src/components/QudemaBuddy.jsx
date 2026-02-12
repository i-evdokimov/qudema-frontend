import React, { useState } from 'react';

const QudemaBuddy = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end pointer-events-none">
      <div className={`
        mb-2 mr-2 bg-white border-4 border-dark p-3 font-black text-xs uppercase shadow-neo transition-all duration-300 transform
        ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}
      `}>
        Есть вопросы? задай их сразу!
        <div className="absolute -bottom-3 right-6 w-4 h-4 bg-white border-r-4 border-b-4 border-dark rotate-45"></div>
      </div>

      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        className="pointer-events-auto w-16 h-16 bg-accent border-4 border-dark shadow-neo flex flex-col items-center justify-center text-3xl font-black transition-all hover:scale-110 active:scale-95 group relative"
      >
        <div className="absolute top-2 flex gap-3">
          <div className="w-1.5 h-1.5 bg-dark rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-dark rounded-full animate-pulse"></div>
        </div>
        <span className="mt-2 group-hover:animate-bounce">Q</span>
      </button>
    </div>
  );
};

export default QudemaBuddy;