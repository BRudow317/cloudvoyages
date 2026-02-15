import React from 'react';
import styles from './Card.module.css';

function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}

interface CardProps extends React.ComponentPropsWithRef<'div'> {
  as?: React.ElementType;
  padding?: 'none' | 'md' | 'lg';
  square?: boolean;
  hover?: 'lift' | 'none';
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLElement, CardProps>(function Card(
  {
    children,
    className = '',
    as: Comp = 'div',
    padding = 'md',
    square = false,
    hover = 'lift',
    interactive = false,
    role,
    tabIndex,
    ...rest
  },
  ref
) {
  const CompTag = Comp;
  const resolvedRole = role ?? (interactive ? 'button' : undefined);
  const resolvedTabIndex = tabIndex ?? (interactive ? 0 : undefined);

  const classes = cx(
    styles.card,
    padding === 'md' && styles.padMd,
    padding === 'lg' && styles.padLg,
    square && styles.square,
    hover === 'none' && styles.noHover,
    interactive && styles.interactive,
    className
  );

  return (
    <CompTag
      ref={ref}
      className={classes}
      role={resolvedRole}
      tabIndex={resolvedTabIndex}
      {...rest}
    >
      {children}
    </CompTag>
  );
});

export default Card;
