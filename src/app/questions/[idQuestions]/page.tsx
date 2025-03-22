import { getLevel } from '../../../utils/state';
import PricesBar from '../../../components/PricesBar/pricesBar';
import Question from '../../../components/Question/question';
import styles from './page.module.scss';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { idQuestions: string } }) {
  const level = await getLevel();
  const { idQuestions } = await params
  const currentQuestionIndex = +idQuestions;

  if(level !== currentQuestionIndex){
    redirect(`/questions/${level}`)
  }
  
  return (
    <div className={styles.questionsBox}>
      <Question
        key={currentQuestionIndex}
        level={currentQuestionIndex}
      />
      <PricesBar level={currentQuestionIndex}/>
    </div>
  );
};
