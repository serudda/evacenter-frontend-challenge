/* --- DEPENDENCIES --- */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import * as appConstants from '@constants/appConstants';
import { StatsData, RiskType } from '@interfaces/data';
import useLazyApi from '@hooks/useLazyApi';
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
  const { fetchData: fetchStats, loading } = useLazyApi<StatsData>(appConstants.DATA_URL as string);
  const [statsData, setStatsData] = useState<StatsData>();
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

  const getStats = async () => {
    const statsData = await fetchStats();
    setStatsData(statsData);
  };

  // Get Stats every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (loading) return;
      getStats();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
            value={statsData?.ambientTemperture}
            description="Ambient Temperature"
            icon={IconCatalog.wind}
          />
          <Stat
            className="border-r border-gray-100 w-full"
            value={statsData?.exteriorTemperature}
            description="Exterior Temperature"
            icon={IconCatalog.campground}
          />
          <Stat
            className="w-full"
            value={statsData?.patientTemperature}
            description="Patient Temperature"
            icon={IconCatalog.user}
          />
        </div>
      </div>
      <div className="w-1/4">
        <RiskCard type={assignRiskLevel(statsData?.risk)} />
      </div>
    </div>
  );
};

export default StatsSection;
