/* --- DEPENDENCIES --- */
import React, { Children, cloneElement, useRef, useState } from 'react';
import cn from 'classnames';
import { hasProp, isNullOrUndefined, isArray } from '@utils/utils';
import useOnClickOutside from '@hooks/useClickOutside';
import './DropdownMenu.css';
/* -------------------- */

type Props = {
  readonly className?: string;
  readonly onTriggerClick?: (event: React.MouseEvent) => void;
};

const DropdownMenu: React.FC<Props> = ({ className, onTriggerClick, children }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const testId = 'DropdownMenu';
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(node, () => setIsOpen(false));

  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const DropdownMenuClass = cn(className, 'ec-dropdown-menu');

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleTriggerClick = (event: React.MouseEvent): void => {
    setIsOpen(!isOpen);
    if (onTriggerClick) onTriggerClick(event);
  };

  const renderChildren = Children.map(children, (el: any, index) => {
    if (isNullOrUndefined(children)) return el;
    if (!isArray(children)) return el;

    if (index) {
      if (hasProp(el?.props, 'isOpen')) return el;
      return cloneElement(el, { isOpen });
    }
    if (hasProp(children![1].props, 'isOpen')) return el;
    return cloneElement(el, { onClick: handleTriggerClick });
  });

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div data-testid={testId} ref={node} className={DropdownMenuClass}>
      {renderChildren}
    </div>
  );
};

export default DropdownMenu;
