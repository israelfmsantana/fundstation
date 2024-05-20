import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: 'filled' | 'outline';
  color?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant = 'filled',
  color = 'primary',
  onClick,
}) => {
  const baseClasses = 'flex items-center justify-center px-4 py-2 rounded-md focus:outline-none';
  const filledClasses = `dark:bg-${color} dark:text-white hover:bg-${color} text-${color}`;
  const outlineClasses = `border border-${color} text-${color} hover:bg-${color} hover:text-white`;
  const iconLeftClasses = iconLeft ? `mr-2 h-4 w-4 dark:text-${color} text-dark` : '';
  const iconRightClasses = iconRight ? `ml-2 h-4 w-4 dark:text-${color} text-dark` : '';

  return (
    <button
      className={classNames(baseClasses, {
        [filledClasses]: variant === 'filled',
        [outlineClasses]: variant === 'outline',
      })}
      onClick={onClick}
    >
      {iconLeft && <span className={iconLeftClasses}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={iconRightClasses}>{iconRight}</span>}
    </button>
  );
};

export default Button;
