/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import { Catalog as IconCatalog } from '@primitives/Icon/Icon';
import RiskCard, { Type as RiskCardType } from '@atoms/Cards/RiskCard/RiskCard';
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
        <RiskCard type={RiskCardType.negative} />
      </div>
    </div>
  );
};

export default StatsSection;
