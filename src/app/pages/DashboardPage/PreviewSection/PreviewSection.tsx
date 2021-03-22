/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Image from '@atoms/Image/Image';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const PreviewSection: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const previewSectionClass = cn('preview-section', className);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={previewSectionClass}>
      {/* HEADER */}
      <div className="text-lg font-semi-bold mb-2">Preview</div>
      <div className="rounded-lg bg-blue-100 shadow overflow-hidden w-full">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/evacenter-fe-challenge.appspot.com/o/today.jpeg?alt=media&token=d81c859e-36ea-4c03-be11-cbd83a7370a9"
          alt="No Result"
          noImg={<></>}
        />
      </div>
    </div>
  );
};

export default PreviewSection;
