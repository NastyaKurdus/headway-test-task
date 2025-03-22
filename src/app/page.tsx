import styles from './page.module.scss';
import Image from 'next/image';
import Button from '../components/Button/button';
import { cleanLevel, getLevel } from '../utils/state';
import { redirect } from 'next/navigation';

export default async function Page() {
  const level = await getLevel();

  async function continueGame() {
    "use server";
    redirect(`/questions/${level}`)
  };

  async function startGame() {
    "use server";
    await cleanLevel();
    redirect('/questions/0');
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainContentBox}>
        <Image
          src="/images/mainLogo.png"
          width={450}
          height={350}
          className={styles.imgLogo}
          alt="main logo"
        />
        <div className={styles.infoBox}>
          <h1>Who wants to be a millionaire?</h1>
          <form className={styles.gameFlow}>
            <Button formAction={startGame}>Start</Button>
            {level !== 0 && <Button formAction={continueGame}>Continue</Button>}
          </form>
        </div>
      </div>
    </main>
  );
};
