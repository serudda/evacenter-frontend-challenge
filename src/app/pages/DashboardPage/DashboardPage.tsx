/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import HistorySection from './HistorySection/HistorySection';
import PreviewSection from './PreviewSection/PreviewSection';
import StatsSection from './StatsSection/StatsSection';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const DashboardPage: React.FC<Props> = ({ className }) => {
  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const dashboardPageClass = cn('dashboard-page max-w-7xl p-6 mx-auto', className);

  /*--------------------------*/
  /*          HANDLES         */
  /*--------------------------*/

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={dashboardPageClass}>
      <StatsSection className="mb-5" />

      <div className="flex space-x-5">
        <div className="w-1/2">
          <HistorySection />
        </div>

        <div className="w-1/2">
          <PreviewSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
