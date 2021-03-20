/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import './Item.css';
/* -------------------- */

type Props = {
  readonly href?: string;
  readonly target?: string;
  readonly isDisabled?: boolean;
  readonly className?: string;
  readonly onClick?: (event: React.MouseEvent) => void;
};

const Item: React.FC<Props> = ({ href, target, isDisabled = false, onClick, className, children }) => {
  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const itemClass = cn(className, 'ec-item', {
    'ec-item--disabled': isDisabled,
  });

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleClick = (event: React.MouseEvent): void => {
    if (event) event.persist();
    if (onClick && !isDisabled) onClick(event);
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return href ? (
    <a
      className={itemClass}
      href={href}
      target={target}
      onClick={handleClick}
      role="menuitem"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  ) : (
    <div className={itemClass} onClick={handleClick} role="menuitem">
      {children}
    </div>
  );
};

export default Item;
