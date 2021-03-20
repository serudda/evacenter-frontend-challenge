/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import { Catalog as IconCatalog } from '@primitives/Icon/Icon';
import Stat from '@atoms/Stat/Stat';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const StatsSection: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const statsSectionClass = cn('stats-section flex space-x-5', className);

  /*--------------------------*/
  /*          HANDLES         */
  /*--------------------------*/

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={statsSectionClass}>
      <div className="w-3/4">
        <div className="flex rounded-lg bg-white shadow overflow-hidden">
          <Stat
            className="border-r border-gray-100 w-full"
            value="26.9"
            description="Ambient Temperature"
            icon={IconCatalog.wind}
          />
          <Stat
            className="border-r border-gray-100 w-full"
            value="30.9"
            description="Exterior Temperature"
            icon={IconCatalog.campground}
          />
          <Stat className="w-full" value="36" description="Patient Temperature" icon={IconCatalog.user} />
        </div>
      </div>
      <div className="w-1/4">
        <div className="flex flex-col p-6 space-y-2 w-full bg-green-100 border border-green-200 rounded-lg">
          <span className="text-green-800 font-regular text-sm">Risk</span>
          <span className="text-gray-900 font-bold text-3xl">Low</span>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
