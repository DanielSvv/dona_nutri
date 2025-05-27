import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-full transition-all duration-300 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-[#00bf63] hover:bg-[#00a857] text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'bg-transparent border border-[#00bf63] text-[#00bf63] hover:bg-[#00bf63] hover:text-white'
  };
  
  const sizeClasses = {
    small: 'text-sm py-1.5 px-4',
    medium: 'py-2 px-6',
    large: 'text-lg py-3 px-8'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;