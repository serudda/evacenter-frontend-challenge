/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
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
      <StatsSection />
    </div>
  );
};

export default DashboardPage;
