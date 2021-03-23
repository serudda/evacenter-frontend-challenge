/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import { PreviewData } from '@interfaces/data';
import { formatDate } from '@utils/utils';
import HistoryItem from '@atoms/Items/HistoryItem/HistoryItem';
/* -------------------- */

type Props = {
  readonly list: Array<PreviewData>;
  readonly className?: string;
};

const HistorySection: React.FC<Props> = ({ list, className }) => {
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

  return (
    <div className={historySectionClass}>
      {/* HEADER */}
      <div className="text-lg font-semi-bold mb-2">History</div>
      <div className="rounded-lg bg-white shadow overflow-hidden">{renderItemList}</div>
    </div>
  );
};

export default HistorySection;
