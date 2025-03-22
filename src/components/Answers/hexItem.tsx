import React, { ReactNode}  from 'react';
import styles from './answers.module.scss';
import cx from 'classnames'

interface HexItemComponentProps {
  children: ReactNode;
  size?: 'md'|'lg';
  status?: 'correct' | 'wrong' | 'select' | 'disactive' | 'hover' | '';
}

const HexItem: React.FC<HexItemComponentProps> = ({ children, size = 'md', status = '' }) => {
  return (
    <div className={cx(styles.hexItemBox, styles[status])}>
      <div className={styles.line}/>
      <div className={cx(styles.hexItem, styles[size])}>
        {children}
      </div>
    </div>
  );
};

export default HexItem;
