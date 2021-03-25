/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Image from '@atoms/Image/Image';
/* -------------------- */

type Props = {
  readonly title: string;
  readonly description?: string;
  readonly imgUrl?: string;
  readonly className?: string;
};

const EmptyState: React.FC<Props> = ({
  title,
  description,
  imgUrl = '/assets/images/illustrations/desert.svg',
  className,
}) => {
  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const emptyStateClass = cn('empty-state', className);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={emptyStateClass}>
      <div className="flex flex-col items-center text-center p-12 lg:p-20">
        <Image className="mb-10 w-40" src={imgUrl} alt="No Result" noImg={<></>} />
        <p className="text-medium-slate text-xl font-semi-bold mb-2">{title}</p>
        <p className="text-lg font-regular max-w-lg">{description}</p>
      </div>
    </div>
  );
};

export default EmptyState;
