/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import './FloatingMenu.css';
/* -------------------- */

type Props = {
  readonly className?: string;
  readonly onClick?: (event: React.MouseEvent) => void;
};

const FloatingMenu: React.FC<Props> = ({ className, onClick }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/

  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const floatingMenuClass = cn(className, 'ec-floating-menu z-20');

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleClick = (event: React.MouseEvent): void => {
    if (event) event.persist();
    if (onClick) onClick(event);
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={floatingMenuClass} onClick={handleClick}>
      <button className="trigger trigger--md trigger--primary shadow-lg">
        <Icon className="icon" icon={IconCatalog.flame} width="40" height="40" iconStyle={IconStyle.duotone} />
      </button>
    </div>
  );
};

export default FloatingMenu;
