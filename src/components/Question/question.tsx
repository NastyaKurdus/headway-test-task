import styles from './question.module.scss';
import { QuestionProps } from '../../utils/types';
import { countOfCorrectAnswers, getQuestionByLevel } from '../../utils/utils';
import Answers from '../Answers/answers';

export default function Question({ level }: QuestionProps) {
  const { answers, question, price, isLast } = getQuestionByLevel(level); // GET by current level
  const correctAnswersCount = countOfCorrectAnswers(answers);
  
  return (
    <div className={styles.questionBox}>
      <h2>{question}</h2>
      <div>
        {correctAnswersCount > 1 && <div className={styles.notify}>{`Сhoose ${correctAnswersCount} correct answers`}</div>}
        <Answers answers={answers} level={level} correctAnswersCount={correctAnswersCount} price={price} isLastLevel={isLast}/>
      </div>
    </div>
  );
};
