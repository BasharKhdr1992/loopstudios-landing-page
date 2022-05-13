import React from 'react';
import { useWindowSize } from '../../custom-hooks/useWindowSize';
export const NavLink = ({ children, onClick, className }) => {
  const [width] = useWindowSize();

  return (
    <button onClick={onClick} className={`navlink ${className}`}>
      {children}
      <span className={`underline ${width < 900 ? 'mobile' : undefined}`} />
    </button>
  );
};

export default NavLink;
