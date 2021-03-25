/* --- DEPENDENCIES --- */
import React, { useState } from 'react';
import cn from 'classnames';
import Image from '@atoms/Image/Image';
import PreviewSectionSkeleton from './PreviewSection.skeleton';
/* -------------------- */

type Props = {
  readonly loading?: boolean;
  readonly imageName?: string;
  readonly imageUrl?: string;
  readonly className?: string;
};

const PreviewSection: React.FC<Props> = ({ loading = false, imageName = 'Preview image', imageUrl, className }) => {
  const [showCaption, setShowCaption] = useState(false);

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const previewSectionClass = cn('preview-section', className);

  const handleLoadImage = () => setShowCaption(true);

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
        onLoad={handleLoadImage}
        hasMaxWidth
      />
    );
  };

  return (
    <div className={previewSectionClass}>
      {/* HEADER */}
      <div className="text-lg font-semi-bold mb-2">Preview</div>
      <div className="relative rounded-lg bg-blue-50 shadow overflow-hidden w-full">
        {renderContent()}
        {showCaption && (
          <div className="p-4 bg-black bg-opacity-1 w-full">
            <span className="text-white">{imageName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewSection;
