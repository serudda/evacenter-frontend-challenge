/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import { PreviewData } from '@interfaces/data';
import { formatDate } from '@utils/utils';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import Tooltip, {
  Color as TooltipColor,
  Size as TooltipSize,
  Placement as TooltipPlacement,
} from '@atoms/Tooltip/Tooltip';
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
    <div key={item.id} className="flex border-b border-gray-100 hover:bg-gray-50 cursor-pointer p-6">
      <div className="text-base text-gray-400 block overflow-hidden truncate self-center">{formatDate(item.name)}</div>
      <div className="flex items-center ml-auto space-x-3">
        <Tooltip text="Download" color={TooltipColor.black} placement={TooltipPlacement.top} size={TooltipSize.sm}>
          <a
            className="p-1 rounded-md hover:bg-indigo-50 cursor-pointer"
            href={item.imageUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              className="text-gray-500"
              icon={IconCatalog.arrowToBottom}
              iconStyle={IconStyle.regular}
              width="20"
              height="20"
            />
          </a>
        </Tooltip>

        <div className="p-1 rounded-md">
          <Icon
            className="text-gray-500"
            icon={IconCatalog.chevronRight}
            iconStyle={IconStyle.regular}
            width="24"
            height="24"
          />
        </div>
      </div>
    </div>
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
