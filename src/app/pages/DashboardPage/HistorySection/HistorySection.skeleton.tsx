/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const HistorySectionSkeleton: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const historySectionSkeletonClass = cn(
    className,
    'history-section-skeleton rounded-lg bg-white shadow overflow-hidden',
  );

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  const historySkeletonGrid = Array(5)
    .fill('')
    .map((item, index) => (
      <div key={index} className="animate-pulse flex border-b border-gray-100 p-6">
        <div className="text-base text-gray-400 block overflow-hidden truncate self-center">
          <div className="h-2 bg-gray-200 w-32">{item}</div>
        </div>
      </div>
    ));

  return <div className={historySectionSkeletonClass}>{historySkeletonGrid}</div>;
};

export default HistorySectionSkeleton;
