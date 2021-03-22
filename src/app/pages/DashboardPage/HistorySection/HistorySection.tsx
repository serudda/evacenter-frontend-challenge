/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import Tooltip, {
  Color as TooltipColor,
  Size as TooltipSize,
  Placement as TooltipPlacement,
} from '@atoms/Tooltip/Tooltip';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const HistorySection: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const data = [
    {
      uid: 'Dhdksjhdkjshdksj',
      name: '2021-12-01 12:00 PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/evacenter-fe-challenge.appspot.com/o/today.jpeg?alt=media&token=d81c859e-36ea-4c03-be11-cbd83a7370a9',
    },
    {
      uid: 'Dhdksjhdkjshdksj2',
      name: '2021-12-02 2:34 PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/evacenter-fe-challenge.appspot.com/o/today.jpeg?alt=media&token=d81c859e-36ea-4c03-be11-cbd83a7370a9',
    },
    {
      uid: 'Dhdksjhdkjshdksj3',
      name: '2021-12-03 3:10 PM',
      image:
        'https://firebasestorage.googleapis.com/v0/b/evacenter-fe-challenge.appspot.com/o/today.jpeg?alt=media&token=d81c859e-36ea-4c03-be11-cbd83a7370a9',
    },
  ];

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const historySectionClass = cn('history-section', className);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  const renderItemList = data.map((item) => (
    <div key={item.uid} className="flex border-b border-gray-100 hover:bg-gray-50 cursor-pointer p-6">
      <div className="text-base text-gray-400 block overflow-hidden truncate self-center">{item.name}</div>
      <div className="flex items-center ml-auto space-x-3">
        <Tooltip text="Download" color={TooltipColor.black} placement={TooltipPlacement.top} size={TooltipSize.sm}>
          <div className="p-1 rounded-md hover:bg-indigo-50 cursor-pointer">
            <Icon
              className="text-gray-500"
              icon={IconCatalog.arrowToBottom}
              iconStyle={IconStyle.regular}
              width="20"
              height="20"
            />
          </div>
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
