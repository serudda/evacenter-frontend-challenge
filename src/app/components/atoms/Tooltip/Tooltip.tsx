/* --- DEPENDENCIES --- */
import React, { Children, cloneElement, useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import cn from 'classnames';
import Portal from '@atoms/Portal/Portal';
import './Tooltip.css';
/* -------------------- */

export enum Placement {
  topLeft = 'top-start',
  top = 'top',
  topRight = 'top-end',
  leftTop = 'left-start',
  left = 'left',
  leftBottom = 'left-end',
  rightTop = 'right-start',
  right = 'right',
  rightBottom = 'right-end',
  bottomLeft = 'bottom-start',
  bottom = 'bottom',
  bottomRight = 'bottom-end',
}

export enum Color {
  black = 'black',
}

export enum Size {
  sm = 'sm',
  md = 'md',
}

type Props = {
  readonly text: string;
  readonly color?: string;
  readonly size?: string;
  readonly placement?: Placement;
  readonly hasArrow?: boolean;
  readonly className?: string;
};

const Tooltip: React.FC<Props> = ({
  text,
  color = Color.black,
  placement = Placement.top,
  size = Size.md,
  hasArrow = true,
  className,
  children,
}) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const testId = 'Tooltip';
  const [tooltipElement, setTooltipElement] = useState<HTMLSpanElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const refTriggerNode = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  /* Popper config */
  const { styles, attributes } = usePopper(refTriggerNode.current, tooltipElement, {
    placement,
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] } },
      { name: 'arrow', options: { element: arrowElement } },
    ],
  });

  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const tooltipContainerClass = cn(className, 'ec-tooltip-container shadow-md z-20', {});

  const tooltipClass = cn('ec-tooltip rounded-md', {
    [`ec-tooltip--${color}`]: true,
    [`ec-tooltip--${size}`]: true,
  });

  /*---------------------*/
  /*        HANDLES      */
  /*---------------------*/
  const handleMouseOver = (): void => setOpen(true);
  const handleMouseOut = (): void => setOpen(false);

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  let elements: any = Children.toArray(children);

  /* Append handle to the trigger component */
  elements = cloneElement(elements[0], {
    ref: refTriggerNode,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  });

  return (
    <>
      {elements}
      <Portal>
        <div
          data-testid={testId}
          className={tooltipContainerClass}
          ref={setTooltipElement}
          style={{ ...styles.popper }}
          {...attributes.popper}
        >
          {open && (
            <span className={tooltipClass}>
              {text}
              {hasArrow && <div className="arrow" ref={setArrowElement} style={styles.arrow} />}
            </span>
          )}
        </div>
      </Portal>
    </>
  );
};

export default Tooltip;
