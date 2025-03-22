export type Answer = {
  text: string;
  correct: boolean;
};

export type Question = {
  question: string;
  answers: Answer[];
  price: number;
  isLast?: boolean;
};

export type Questions = Question[];

export type NormalizedDataType = {
  [key: number]: Questions;
};

export type QuestionProps = {
  level: number;
};

export type AnswersProps = { 
  answers: Answer[];
  level: number;
  correctAnswersCount: number;
  price: number;
  isLastLevel?: boolean;
};

export type AnswerProps = { 
  answer: Answer;
  isAllSelected: boolean;
  index: number;
  onSelectAnswer: (delta: number) => void;
  onSelectCorrect: (delta: number) => void;
};
