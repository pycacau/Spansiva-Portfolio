import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, Headphones, Mouse, Gamepad2 } from 'lucide-react';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  
  const options = [
    {
      title: "Monitores ALLTEK",
      description: "High performance gaming displays",
      image: "/IMG_0469.jpg",
      icon: <Monitor size={24} className="text-white" />
    },
    {
      title: "PCs Gamer",
      description: "Custom built gaming computers",
      image: "/IMG_0465.jpg",
      icon: <Cpu size={24} className="text-white" />
    },
    {
      title: "Headphones JBL",
      description: "Premium audio experience",
      image: "/IMG_0454.jpg",
      icon: <Headphones size={24} className="text-white" />
    },
    {
      title: "Acessórios Gamer",
      description: "Essential gaming gear",
      image: "/IMG_0440.jpg",
      icon: <Mouse size={24} className="text-white" />
    },
    {
      title: "Notebooks Samsung",
      description: "Powerful portable computing",
      image: "/IMG_0453.jpg",
      icon: <Gamepad2 size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full font-sans text-white"> 
      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-[280px] h-[300px] sm:h-[400px] mx-auto items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '50px',
              minHeight: '80px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--border))',
              cursor: 'pointer',
              backgroundColor: 'hsl(var(--card))',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-3 sm:bottom-5 flex items-center justify-start h-10 sm:h-12 z-2 pointer-events-none px-2 sm:px-4 gap-2 sm:gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] sm:min-w-[52px] sm:max-w-[52px] h-[44px] sm:h-[52px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {React.cloneElement(option.icon, { size: 20, className: "text-white sm:hidden" })}
                {React.cloneElement(option.icon, { size: 28, className: "text-white hidden sm:block" })}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-sm sm:text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-xs sm:text-base text-gray-300 transition-all duration-700 ease-in-out hidden sm:block"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
