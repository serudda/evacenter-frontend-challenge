/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import { StatsData, RiskType } from '@interfaces/data';
import { Catalog as IconCatalog } from '@primitives/Icon/Icon';
import RiskCard, { Type as RiskCardType } from '@atoms/Cards/RiskCard/RiskCard';
import Stat from '@atoms/Stat/Stat';
/* -------------------- */

type Props = {
  readonly stats?: StatsData;
  readonly className?: string;
};

const StatsSection: React.FC<Props> = ({ stats, className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const assignRiskLevel = (value) => {
    switch (value) {
      case RiskType.low:
        return RiskCardType.positive;
      case RiskType.mid:
        return RiskCardType.warning;
      case RiskType.high:
        return RiskCardType.negative;
      default:
        return RiskCardType.default;
    }
  };

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
            value={stats?.ambientTemperture}
            description="Ambient Temperature"
            icon={IconCatalog.wind}
          />
          <Stat
            className="border-r border-gray-100 w-full"
            value={stats?.exteriorTemperature}
            description="Exterior Temperature"
            icon={IconCatalog.campground}
          />
          <Stat
            className="w-full"
            value={stats?.patientTemperature}
            description="Patient Temperature"
            icon={IconCatalog.user}
          />
        </div>
      </div>
      <div className="w-1/4">
        <RiskCard type={assignRiskLevel(stats?.risk)} />
      </div>
    </div>
  );
};

export default StatsSection;
