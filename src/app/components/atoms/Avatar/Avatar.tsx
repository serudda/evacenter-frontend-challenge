/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Image from '@atoms/Image/Image';
import './Avatar.css';
/* -------------------- */

export enum Size {
  '2xs' = '2xs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}

type Props = {
  readonly size?: Size;
  readonly altText: string;
  readonly imgUrl?: string;
  readonly className?: string;
};

const Avatar: React.FC<Props> = ({
  size = Size.xs,
  altText = 'avatar image',
  imgUrl = '/assets/images/default-avatar.jpg',
  className,
}) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const testId = 'Avatar';

  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const avatarClass = cn(className, 'ec-avatar', {
    [`ec-avatar--${size}`]: true,
  });

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div data-testid={testId} className={avatarClass}>
      <Image className="image" src={imgUrl} alt={altText} noImg={<></>} />
    </div>
  );
};

export default Avatar;
