/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import './Stat.css';
/* -------------------- */

type Props = {
  readonly value?: string | number;
  readonly description: string;
  readonly icon?: IconCatalog;
  readonly className?: string;
};

const Stat: React.FC<Props> = ({ value = '-', description, icon = IconCatalog.wind, className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/

  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const statClass = cn(className, 'ec-stat flex items-center px-10 py-6');

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={statClass}>
      <div className="flex flex-col space-y-2">
        <span className="text-gray-400 font-regular text-sm">{description}</span>
        <span className="text-gray-600 font-bold text-3xl">{value}</span>
      </div>
      <Icon className="ml-auto text-purple-200" width="40" height="40" iconStyle={IconStyle.solid} icon={icon}></Icon>
    </div>
  );
};

export default Stat;
