/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import './Menu.css';
/* -------------------- */

export enum Placement {
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  topLeft = 'top-left',
  topRight = 'top-right',
}

type Props = {
  readonly isOpen?: boolean;
  readonly placement?: Placement;
  readonly className?: string;
};

const Menu: React.FC<Props> = ({ isOpen = false, placement = Placement.bottomLeft, className, children }) => {
  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const menuClass = cn(className, 'ec-menu', {
    [`ec-menu--${placement}`]: true,
  });

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return isOpen ? (
    <div className={menuClass} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      {children}
    </div>
  ) : null;
};

export default Menu;
