/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import './RiskCard.css';
/* -------------------- */

export enum Type {
  default = 'default',
  positive = 'positive',
  warning = 'warning',
  negative = 'negative',
}

export enum Title {
  default = '-',
  positive = 'Low',
  warning = 'Mid',
  negative = 'High',
}

type Props = {
  readonly type: Type;
  readonly className?: string;
};

const RiskCard: React.FC<Props> = ({ type, className }) => {
  /*------------------*/
  /* CLASS ASSIGNMENT */
  /*------------------*/
  const riskCardClass = cn(className, 'ec-risk-card flex flex-col p-6 space-y-2 w-full border rounded-lg', {
    [`ec-risk-card--${type}`]: true,
  });

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <div className={riskCardClass}>
      <span className="title font-regular text-sm">Risk</span>
      <span className="font-bold text-3xl">{Title[type]}</span>
    </div>
  );
};

export default RiskCard;
