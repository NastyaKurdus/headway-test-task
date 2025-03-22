import { useState } from 'react';
import styles from './answers.module.scss';
import HexItem from './hexItem';
import { AnswerProps } from '../../utils/types';

const initAsciiCode = 65; // ascii code for A

export default function Answer({ answer, isAllSelected, index, onSelectAnswer, onSelectCorrect}: AnswerProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const newClicked = !clicked;
    if(answer.correct) {
        onSelectCorrect(newClicked? 1 : -1)
    }
    onSelectAnswer(newClicked? 1 : -1)
    setClicked(newClicked); 
  };

  const getStatus = () => {
    if(clicked) {
      if (isAllSelected) {
        if(answer.correct){
          return 'correct';
        }else{
          return 'wrong';
        } 
      }
      return 'select';
    }
    return '';
  }
  
  return (
    <HexItem status={getStatus()} size='lg' >
      <div className={styles.answerItem} onClick={handleClick}>
        <p className={styles.answerOption}>{String.fromCharCode(initAsciiCode + index)}</p>
        {answer.text}
      </div>
    </HexItem>
  );
};
