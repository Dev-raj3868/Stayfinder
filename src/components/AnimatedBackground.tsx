
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="floating-shapes">
      <div 
        className="floating-shape w-32 h-32 bg-white/10 top-10 left-10"
        style={{ 
          animationDelay: '0s',
          animationDuration: '8s' 
        }}
      />
      <div 
        className="floating-shape w-24 h-24 bg-white/15 top-1/4 right-20"
        style={{ 
          animationDelay: '2s',
          animationDuration: '6s',
          animationName: 'float-delayed'
        }}
      />
      <div 
        className="floating-shape w-40 h-40 bg-white/8 bottom-20 left-1/4"
        style={{ 
          animationDelay: '4s',
          animationDuration: '10s',
          animationName: 'float-slow'
        }}
      />
      <div 
        className="floating-shape w-28 h-28 bg-white/12 top-1/2 right-10"
        style={{ 
          animationDelay: '1s',
          animationDuration: '7s'
        }}
      />
      <div 
        className="floating-shape w-36 h-36 bg-white/6 bottom-10 right-1/3"
        style={{ 
          animationDelay: '3s',
          animationDuration: '9s',
          animationName: 'float-delayed'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
