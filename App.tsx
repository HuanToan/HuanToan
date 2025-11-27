import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import Chatbot from './components/Chatbot';
import { TEXTBOOK_DATA } from './constants';
import { Lesson, UserProgress } from './types';

function App() {
  // Default to the first lesson of the first chapter
  const [currentLesson, setCurrentLesson] = useState<Lesson>(TEXTBOOK_DATA[0].lessons[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // User Progress State
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('toan8_progress');
    return saved ? JSON.parse(saved) : {};
  });

  // Save progress to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('toan8_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Handle lesson completion
  const handleLessonComplete = (score: number) => {
    setUserProgress(prev => {
      const currentProgress = prev[currentLesson.id];
      // Only update if not previously completed or if new score is higher
      if (!currentProgress || score > currentProgress.score) {
        return {
          ...prev,
          [currentLesson.id]: {
            score: score,
            completed: score >= 80
          }
        };
      }
      return prev;
    });
  };

  // Logic to determine if a lesson is locked
  // A lesson is locked if the previous lesson in the sequence is not completed
  const isLessonLocked = (lessonId: string): boolean => {
    // Flatten all lessons into a single array to determine order
    const allLessons: Lesson[] = TEXTBOOK_DATA.flatMap(chapter => chapter.lessons);
    const index = allLessons.findIndex(l => l.id === lessonId);

    // First lesson is always unlocked
    if (index <= 0) return false;

    // Check if previous lesson is completed
    const prevLessonId = allLessons[index - 1].id;
    return !userProgress[prevLessonId]?.completed;
  };

  // Construct context string for the AI based on current lesson
  const contextString = `
    Học sinh đang học bài: ${currentLesson.title}.
    
    Lý thuyết chính:
    ${currentLesson.theory.join('\n')}
    
    Bài tập mẫu:
    ${currentLesson.exercises.map(e => `Câu hỏi: ${e.question}\nLời giải: ${e.solution}`).join('\n')}
  `;

  return (
    <div className="flex h-screen bg-white text-slate-900 font-sans">
      <Sidebar 
        currentLessonId={currentLesson.id}
        onSelectLesson={setCurrentLesson}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        userProgress={userProgress}
        isLessonLocked={isLessonLocked}
      />
      
      <LessonView 
        lesson={currentLesson} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onLessonComplete={handleLessonComplete}
        isCompleted={userProgress[currentLesson.id]?.completed || false}
      />
      
      <Chatbot currentContext={contextString} />
    </div>
  );
}

export default App;