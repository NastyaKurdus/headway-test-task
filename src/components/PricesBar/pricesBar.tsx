'use client'

import React, { useEffect, useState } from "react";
import HexItem from "../Answers/hexItem";
import styles from './pricesBar.module.scss';
import cx from 'classnames'
import Image from 'next/image';
import { prices } from '../../utils/utils';

const PricesBar = ({ level }: {
  level: number;
}) => {
  const [pricesValue, setPricesValue] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const reversePrices = [...pricesValue].reverse();
  
  const toggleSidebar = (status: boolean) => setIsOpen(status)

  useEffect(()=>{
    // fetch GET prices
    setPricesValue(prices);
  },[])

  const getStatus = (price: number) => {
    if(price === pricesValue[level]) {
      return 'hover';
    }
    if(price < pricesValue[level]) {
      return 'disactive'
    }
    return '';
  };

  return (
    <>
      <button className={styles.openPricesBar} onClick={() => toggleSidebar(true)}>
        <Image
          src="/images/menu.png"
          alt="hamburger menu"
          width={24}
          height={24}
        />
      </button>
      <div className={cx(styles.pricesBarBox, {[styles.open]: isOpen})}>
        <button className={styles.closeBtn} onClick={() => toggleSidebar(false)}>
          <Image
            src="/images/close.png"
            alt="close btn"
            width={24}
            height={24}
          />
        </button>
        <div className={styles.pricesBarList}>
          {reversePrices.map((price) =>
            <HexItem key={price} status={getStatus(price)} >${price}</HexItem>
          )}
        </div>
      </div>
    </>
  );
};

export default PricesBar;
