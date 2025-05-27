import React from 'react';

const FoodBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Food emoji background with animation */}
      {['🥑', '🥦', '🍎', '🥕', '🍊', '🥗', '🥝', '🍇', '🍌', '🫐', '🥥', '🍓'].map((emoji, index) => (
        <div 
          key={index}
          className="absolute text-2xl animate-float opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 15}s`
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FoodBackground;