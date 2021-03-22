/* --- DEPENDENCIES --- */
import React, { useState } from 'react';
import cn from 'classnames';
import * as appConstants from '@constants/appConstants';
import { StatsData } from '@interfaces/data';
import useLazyApi from '@hooks/useLazyApi';
import FloatingMenu from '@atoms/FloatingMenu/FloatingMenu';
import HistorySection from './HistorySection/HistorySection';
import PreviewSection from './PreviewSection/PreviewSection';
import StatsSection from './StatsSection/StatsSection';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const DashboardPage: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const { fetchData } = useLazyApi<StatsData>(appConstants.DATA_URL as string);
  const [data, setData] = useState<StatsData>();

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const dashboardPageClass = cn('dashboard-page max-w-7xl p-6 mx-auto', className);

  /*--------------------------*/
  /*          HANDLES         */
  /*--------------------------*/
  const handleTakePictureBtnClick = async () => {
    const statsData = await fetchData();
    setData(statsData);
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={dashboardPageClass}>
      <StatsSection stats={data} className="mb-5" />

      <div className="flex space-x-5">
        <div className="w-1/2">
          <HistorySection />
        </div>

        <div className="w-1/2">
          <PreviewSection />
        </div>
      </div>

      <FloatingMenu className="fixed bottom-0 right-0 mb-4 mr-4 lg:mb-8 lg:mr-8" onClick={handleTakePictureBtnClick} />
    </div>
  );
};

export default DashboardPage;
