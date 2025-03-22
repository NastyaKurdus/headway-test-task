'use client'

import styles from './answers.module.scss';
import { useEffect, useState } from 'react';
import Answer from './answer';
import { redirect } from 'next/navigation';
import { cleanLevel, cleanScore, setLevel, setScore } from '../../utils/state';
import { AnswersProps } from '../../utils/types';

const redirectTotal = async () => {
  await cleanLevel();
  redirect('/total');
}

export default function Answers({ answers, level, correctAnswersCount, price, isLastLevel }: AnswersProps) {
  const [selectedAnswers, setSelectedAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const isAllSelected = selectedAnswers === correctAnswersCount;

  const handleSelect = (delta: number) => {
    setSelectedAnswers((selectedAnswers) => selectedAnswers + delta)
  };

  const handleCorrect = (delta: number) => {
    setCorrectAnswers((correctAnswers) => correctAnswers + delta)
  };

  const handleAnswer = async(isCorrect:boolean) => {
    if (isCorrect) {
      await setScore(price)
      if (!isLastLevel) {
        const nextLevel = level + 1;
        await setLevel(nextLevel);
        redirect(`/questions/${nextLevel}`)
      } else {
        await redirectTotal();
      }
    } else {
      await redirectTotal();
    }
  };
  // this useEffect is needed to be sure that  score is reset before the game starts
  // because user might visit questions/0 page by changing url instead of start button
  useEffect(() => {
    const cleanScoreTotaly = (async () => await cleanScore());
    if (level === 0) {
      cleanScoreTotaly();
    }
  }, []);

  useEffect(()=>{
    if(isAllSelected){
      const isCorrect = correctAnswersCount === correctAnswers;
      setTimeout(()=>handleAnswer(isCorrect), 50); // setTimeout is used so that you can see the color change
    }
  },[selectedAnswers])

  return (
    <div className={styles.answersList}>
      {answers.map((answer, index) => (
        <Answer 
          key={index} 
          index={index} 
          answer={answer} 
          isAllSelected={isAllSelected}  
          onSelectAnswer={handleSelect} 
          onSelectCorrect={handleCorrect}/>
      ))}
    </div>
  );
};
