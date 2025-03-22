import styles from '../page.module.scss';
import Image from 'next/image';
import { getLevel, getScore } from '../../utils/state';
import Button from '../../components/Button/button';
import Link from 'next/link';

export default async function Page() {
  const score = await getScore();
  const level = await getLevel();

  return (
    <main className={styles.mainTotal}>
      <div className={styles.mainContentBox}>
        <Image
          src="/images/mainLogo.png"
          width={450}
          height={350}
          className={styles.imgLogo}
          alt="main logo"
        />
        <div className={styles.infoBox}>
          <div>
            <p className={styles.resultTitle}>Total score:</p>
            <h1 className={styles.result}>${score}</h1>
          </div>
          <Link className={styles.link} href='/'>
            <Button>{level !== 0 ? 'Go to menu' : 'Try again'}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
