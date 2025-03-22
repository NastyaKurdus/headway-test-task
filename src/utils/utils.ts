import { Answer, Questions } from './types';
import  questions from './questions.json';


const sortedQuestions: Questions = questions.sort((a,b) => a.price - b.price); 
sortedQuestions[sortedQuestions.length - 1].isLast = true;
export const getQuestionByLevel = (level: number) => sortedQuestions[level];
export const prices: number[] = sortedQuestions.map(({price}) => price);

export const getAllCorrectAnswers = (answers: Answer[]) => answers.filter(({correct}) => correct);
export const countOfCorrectAnswers = (answers: Answer[]) => getAllCorrectAnswers(answers).length;
