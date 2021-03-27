/* --- DEPENDENCIES --- */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
/* -------------------- */

const appendChild = (containerEl: HTMLDivElement): HTMLDivElement => document.body.appendChild(containerEl);
const removeChild = (containerEl: HTMLDivElement): HTMLDivElement => document.body.removeChild(containerEl);

const Portal: React.FC = ({ children }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [containerEl] = useState(document.createElement('div'));

  useEffect(() => {
    appendChild(containerEl);

    return (): void => {
      removeChild(containerEl);
    };
  }, [containerEl]);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return ReactDOM.createPortal(children, containerEl);
};

export default Portal;
