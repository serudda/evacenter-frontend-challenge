/* --- DEPENDENCIES --- */
import React, { useState } from 'react';
import cn from 'classnames';
import { PreviewData } from '@interfaces/data';
import { formatDate } from '@utils/utils';
import HistoryItem from '@atoms/Items/HistoryItem/HistoryItem';
import HistorySectionSkeleton from './HistorySection.skeleton';
import EmptyState from '@organisms/EmptyState/EmptyState';
/* -------------------- */

type Props = {
  readonly defaultSelectedItem?: PreviewData;
  readonly list: Array<PreviewData>;
  readonly loading?: boolean;
  readonly className?: string;
  readonly onSelectItem?: (item: PreviewData) => void;
};

const HistorySection: React.FC<Props> = ({ defaultSelectedItem, list, loading = false, onSelectItem, className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [selectedItem, setSelectedItem] = useState<PreviewData | undefined>(defaultSelectedItem);

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const historySectionClass = cn('history-section', className);

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleItemClick = (item: PreviewData) => (): void => {
    setSelectedItem(item);
    if (onSelectItem) onSelectItem(item);
  };

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  const renderItemList = list.map((item) => (
    <HistoryItem
      key={item.id}
      id={item.id}
      name={formatDate(item.name)}
      downloadUrl={item.imageUrl}
      onClick={handleItemClick(item)}
      isActive={selectedItem?.id === item.id}
    />
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

    return <div className="rounded-lg bg-white overflow-auto overscroll-y-contain shadow h-96">{renderItemList}</div>;
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
