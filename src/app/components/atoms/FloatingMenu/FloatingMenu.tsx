/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import './FloatingMenu.css';
/* -------------------- */

type Props = {
  readonly loading?: boolean;
  readonly className?: string;
  readonly onClick?: (event: React.MouseEvent) => void;
};

const FloatingMenu: React.FC<Props> = ({ loading = false, className, onClick }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const testId = 'FloatingMenu';

  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const floatingMenuClass = cn(className, 'ec-floating-menu z-20');

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleClick = (event: React.MouseEvent): void => {
    if (event) event.persist();
    if (!loading && onClick) onClick(event);
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div data-testid={testId} className={floatingMenuClass} onClick={handleClick}>
      <button className="trigger trigger--md trigger--primary shadow-lg">
        {loading ? (
          <svg
            className="animate-spin h-8 w-8 text-purple-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <Icon className="icon" icon={IconCatalog.camera} width="40" height="40" iconStyle={IconStyle.solid} />
        )}
      </button>
    </div>
  );
};

export default FloatingMenu;
