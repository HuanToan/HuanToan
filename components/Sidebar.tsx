import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { TEXTBOOK_DATA } from '../constants';
import { Chapter, Lesson, UserProgress } from '../types';

interface SidebarProps {
  currentLessonId: string;
  onSelectLesson: (lesson: Lesson) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  userProgress: UserProgress;
  isLessonLocked: (lessonId: string) => boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentLessonId, 
  onSelectLesson, 
  isOpen, 
  toggleSidebar,
  userProgress,
  isLessonLocked
}) => {
  // Initialize with the first chapter open
  const [expandedChapters, setExpandedChapters] = useState<string[]>([TEXTBOOK_DATA[0].id]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId) 
        : [...prev, chapterId]
    );
  };

  return (
    <>
       {/* Mobile Overlay */}
       {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className={`
        fixed md:static inset-y-0 left-0 z-30
        w-80 bg-white border-r border-teal-100 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-teal-100 bg-teal-50">
          <BookOpen className="text-teal-700 mr-2" size={24} />
          <h1 className="font-bold text-teal-900 text-lg">Toán 8</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4">
          {TEXTBOOK_DATA.map((chapter: Chapter) => (
            <div key={chapter.id} className="mb-2">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-teal-50 transition-colors group"
              >
                <span className="font-semibold text-sm text-teal-800 group-hover:text-teal-900 line-clamp-1 flex-1 pr-2">
                  {chapter.title}
                </span>
                {expandedChapters.includes(chapter.id) ? (
                  <ChevronDown size={16} className="text-teal-400 shrink-0" />
                ) : (
                  <ChevronRight size={16} className="text-teal-400 shrink-0" />
                )}
              </button>

              {expandedChapters.includes(chapter.id) && (
                <div className="bg-slate-50 border-y border-slate-100">
                  {chapter.lessons.map((lesson: Lesson) => {
                    const locked = isLessonLocked(lesson.id);
                    const completed = userProgress[lesson.id]?.completed;
                    
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          if (!locked) {
                            onSelectLesson(lesson);
                            if (window.innerWidth < 768) toggleSidebar();
                          }
                        }}
                        disabled={locked}
                        className={`w-full pl-8 pr-4 py-3 text-sm text-left flex items-center justify-between transition-all border-l-4 ${
                          currentLessonId === lesson.id
                            ? 'border-teal-500 bg-teal-100 text-teal-900 font-medium'
                            : locked 
                              ? 'border-transparent text-gray-400 cursor-not-allowed bg-gray-50'
                              : 'border-transparent text-slate-600 hover:text-teal-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate mr-2">{lesson.title}</span>
                        {locked ? (
                          <Lock size={14} className="text-gray-400 shrink-0" />
                        ) : completed ? (
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-teal-100 bg-teal-50">
          <p className="text-xs text-center text-teal-600">
            Kết nối tri thức với cuộc sống
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;