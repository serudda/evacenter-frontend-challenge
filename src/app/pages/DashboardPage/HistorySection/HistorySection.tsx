/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import { PreviewData } from '@interfaces/data';
import { formatDate } from '@utils/utils';
import HistoryItem from '@atoms/Items/HistoryItem/HistoryItem';
import HistorySectionSkeleton from './HistorySection.skeleton';
import EmptyState from '@organisms/EmptyState/EmptyState';
/* -------------------- */

type Props = {
  readonly list: Array<PreviewData>;
  readonly loading?: boolean;
  readonly className?: string;
};

const HistorySection: React.FC<Props> = ({ loading = false, list, className }) => {
  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const historySectionClass = cn('history-section', className);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  const renderItemList = list.map((item) => (
    <HistoryItem key={item.id} name={formatDate(item.name)} downloadUrl={item.imageUrl} />
  ));

  const renderContent = (): JSX.Element => {
    if (loading) return <HistorySectionSkeleton />;
    if (list.length === 0)
      return (
        <div className="rounded-lg bg-white shadow overflow-hidden">
          <EmptyState
            title="No data yet"
            description="See our road map and vote for the features and components you would like to see"
          />
        </div>
      );

    return <div className="rounded-lg bg-white shadow overflow-hidden">{renderItemList}</div>;
  };

  return (
    <div className={historySectionClass}>
      {/* HEADER */}
      <div className="text-lg font-semi-bold mb-2">History</div>
      {renderContent()}
    </div>
  );
};

export default HistorySection;
