import React, { useState } from 'react';

const QudemaBuddy = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-[100] flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Облачко с текстом */}
      <div className={`
        mb-4 mr-2 bg-white border-4 border-dark p-3 font-black text-sm uppercase shadow-neo transition-all duration-300
        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}>
        Есть вопросы? задай их сразу!
        <div className="absolute -bottom-3 right-6 w-4 h-4 bg-white border-r-4 border-b-4 border-dark rotate-45"></div>
      </div>

      {/* Сама зверушка */}
      <button 
        onClick={scrollToFooter}
        className="w-20 h-20 bg-accent border-4 border-dark shadow-neo flex items-center justify-center text-3xl font-black transition-transform hover:scale-110 active:scale-95 group"
      >
        <span className="group-hover:animate-bounce">Q</span>
        
        {/* Глазки, чтобы казалось "зверушкой" */}
        <div className="absolute top-4 flex gap-4">
            <div className="w-2 h-2 bg-dark rounded-full"></div>
            <div className="w-2 h-2 bg-dark rounded-full"></div>
        </div>
      </button>
    </div>
  );
};

export default QudemaBuddy;