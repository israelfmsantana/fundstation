import React from 'react';

interface ButtonIconProps {
  icon: React.ReactNode;
  position?: 'left' | 'right';
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, position = 'left' }) => {
  const marginClass = position === 'left' ? 'mr-2' : 'ml-2';

  return <span className={marginClass}>{icon}</span>;
};

export default ButtonIcon;