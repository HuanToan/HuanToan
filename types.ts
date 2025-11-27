export interface Exercise {
  id: string;
  question: string;
  solution: string;
}

export interface Example {
  id: string;
  title: string;
  content: string;
  explanation: string;
}

export type QuizLevel = 'nhan-biet' | 'thong-hieu' | 'van-dung' | 'van-dung-cao';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0-3
  explanation: string;
  level: QuizLevel; // New field for difficulty classification
}

export interface Lesson {
  id: string;
  title: string;
  theory: string[]; // Array of paragraphs/bullet points
  illustrativeExamples: Example[]; // New field for specific examples
  exercises: Exercise[];
  quiz: QuizQuestion[]; // New field for MCQs
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface UserProgress {
  [lessonId: string]: {
    score: number;
    completed: boolean; // True if score >= 80
  };
}