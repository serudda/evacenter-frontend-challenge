/* --- DEPENDENCIES --- */
import React, { useState } from 'react';
import cn from 'classnames';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import Tooltip, {
  Color as TooltipColor,
  Size as TooltipSize,
  Placement as TooltipPlacement,
} from '@atoms/Tooltip/Tooltip';
/* -------------------- */

type Props = {
  readonly name: string;
  readonly downloadUrl: string;
  readonly className?: string;
};

const HistoryItem: React.FC<Props> = ({ name, downloadUrl, className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const historyItemClass = cn(
    'history-item flex border-b border-gray-100 hover:bg-gray-50 cursor-pointer pl-6 p-4',
    className,
  );

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleMouseEnter = () => setShowDownloadButton(true);

  const handleMouseLeave = () => setShowDownloadButton(false);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={historyItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="text-base text-gray-400 block overflow-hidden truncate self-center">{name}</div>
      <div className="flex items-center ml-auto space-x-3">
        {showDownloadButton && (
          <Tooltip text="Download" color={TooltipColor.black} placement={TooltipPlacement.top} size={TooltipSize.sm}>
            {/* DOWNLOAD BUTTON */}
            <a
              className="p-1 rounded-md hover:bg-indigo-50 cursor-pointer"
              href={downloadUrl}
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
        )}

        {/* SEE IMAGE BUTTON */}
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
  );
};

export default HistoryItem;
