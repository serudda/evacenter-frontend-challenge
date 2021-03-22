/* --- DEPENDENCIES --- */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './Image.css';
/* -------------------- */

type Props = {
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly src?: string;
  readonly srcSet?: string;
  readonly alt?: string;
  readonly hasMaxWidth?: boolean;
  readonly noImg?: JSX.Element;
  readonly useMap?: string;
  readonly onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  readonly onMouseMove?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  readonly onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

const Image = React.forwardRef<HTMLImageElement, Props>(
  ({ className, style, src, srcSet, alt, hasMaxWidth = false, noImg, useMap, onClick, onMouseMove, onLoad }, ref) => {
    /*------------------*/
    /*  INIT VARIABLES  */
    /*------------------*/
    const testId = 'Image';
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(Boolean(src));
    useEffect(() => {
      setIsValidSrc(Boolean(src));
    }, [src]);

    /*------------------*/
    /* CLASS ASSIGNMENT */
    /*------------------*/
    const imageClass = cn(className, 'ec-image', {
      'max-w-full': hasMaxWidth,
      'ec-image--visible': imageLoaded,
      'ec-image--hidden': !imageLoaded,
    });

    /*---------------------*/
    /*        HANDLES      */
    /*---------------------*/
    const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
      if (onClick) onClick(event);
    };

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
      setImageLoaded(true);
      if (onLoad) onLoad(event);
    };

    /*------------------*/
    /*    RENDER JSX    */
    /*------------------*/
    return (
      <>
        {isValidSrc ? (
          <img
            ref={ref}
            data-testid={testId}
            className={imageClass}
            useMap={useMap}
            style={style}
            src={src}
            srcSet={srcSet}
            alt={alt}
            onLoad={handleLoad}
            onError={(): void => setIsValidSrc(false)}
            onClick={handleClick}
            onMouseMove={onMouseMove}
          />
        ) : (
          <>
            {noImg ? (
              noImg
            ) : (
              <div
                data-testid={testId}
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              >
                <p className="text-extra-dark-smoke font-semi-bold text-xl">{alt}</p>
              </div>
            )}
          </>
        )}
      </>
    );
  },
);

export default Image;
