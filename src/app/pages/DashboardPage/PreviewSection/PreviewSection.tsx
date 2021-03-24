/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Image from '@atoms/Image/Image';
import PreviewSectionSkeleton from './PreviewSection.skeleton';
/* -------------------- */

type Props = {
  readonly loading?: boolean;
  readonly imageUrl?: string;
  readonly className?: string;
};

const PreviewSection: React.FC<Props> = ({ loading = false, imageUrl, className }) => {
  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const previewSectionClass = cn('preview-section', className);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  const renderContent = (): JSX.Element => {
    if (loading) return <PreviewSectionSkeleton />;
    return (
      <Image
        src={imageUrl}
        alt="No Preview Image"
        noImg={
          <div className="w-full h-96 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-blue-300 text-lg font-semi-bold">No Preview Image</span>
            </div>
          </div>
        }
      />
    );
  };

  return (
    <div className={previewSectionClass}>
      {/* HEADER */}
      <div className="text-lg font-semi-bold mb-2">Preview</div>
      <div className="rounded-lg bg-blue-50 shadow overflow-hidden w-full">{renderContent()}</div>
    </div>
  );
};

export default PreviewSection;
