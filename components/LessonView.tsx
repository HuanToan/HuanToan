import React, { useState, useEffect } from 'react';
import { Lesson, Exercise, QuizQuestion, QuizLevel } from '../types';
import { BookOpen, PenTool, CheckCircle, HelpCircle, Menu, Lightbulb, GraduationCap, ChevronRight, Info, AlertTriangle, BrainCircuit, Play, RotateCcw, Lock, Eye, EyeOff, BarChart } from 'lucide-react';
import MathWrapper from './MathWrapper';

interface LessonViewProps {
  lesson: Lesson;
  toggleSidebar: () => void;
  onLessonComplete: (score: number) => void;
  isCompleted: boolean;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, toggleSidebar, onLessonComplete, isCompleted }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'exercise' | 'quiz'>('theory');
  
  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: number}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Exercise Solution State
  const [visibleSolutions, setVisibleSolutions] = useState<{[key: string]: boolean}>({});

  // Reset quiz state when lesson changes
  useEffect(() => {
    setActiveTab('theory');
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setVisibleSolutions({});
  }, [lesson.id]);

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmitQuiz = () => {
    if (!lesson.quiz || lesson.quiz.length === 0) return;

    let correctCount = 0;
    lesson.quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / lesson.quiz.length) * 100);
    setQuizScore(scorePercentage);
    setQuizSubmitted(true);

    if (scorePercentage >= 80) {
      onLessonComplete(scorePercentage);
    }
  };

  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const toggleSolution = (id: string) => {
    setVisibleSolutions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper to get Level Info
  const getLevelInfo = (level: QuizLevel) => {
    switch (level) {
      case 'nhan-biet':
        return { label: 'Nhận biết', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
      case 'thong-hieu':
        return { label: 'Thông hiểu', color: 'bg-blue-100 text-blue-700 border-blue-200' };
      case 'van-dung':
        return { label: 'Vận dụng', color: 'bg-orange-100 text-orange-700 border-orange-200' };
      case 'van-dung-cao':
        return { label: 'Vận dụng cao', color: 'bg-purple-100 text-purple-700 border-purple-200' };
      default:
        return { label: 'Cơ bản', color: 'bg-gray-100 text-gray-700' };
    }
  };

  // Sort quiz questions by level
  const sortedQuiz = lesson.quiz ? [...lesson.quiz].sort((a, b) => {
    const levels = ['nhan-biet', 'thong-hieu', 'van-dung', 'van-dung-cao'];
    return levels.indexOf(a.level) - levels.indexOf(b.level);
  }) : [];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50">
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <div>
            <span className="text-xs uppercase tracking-wider text-teal-600 font-bold hidden sm:block">Toán Học 8</span>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 truncate max-w-[200px] sm:max-w-md">
                {lesson.title}
              </h2>
              {isCompleted && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold border border-green-200 flex items-center gap-1">
                  <CheckCircle size={12} /> Hoàn thành
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-8">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap sm:flex-nowrap space-y-2 sm:space-y-0 sm:space-x-2 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 mb-8 w-full sm:w-fit mx-auto sm:mx-0">
            <button
              onClick={() => setActiveTab('theory')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'theory'
                  ? 'bg-teal-600 text-white shadow-md transform scale-[1.02]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <BookOpen size={18} />
              Lý Thuyết
            </button>
            <button
              onClick={() => setActiveTab('exercise')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'exercise'
                  ? 'bg-teal-600 text-white shadow-md transform scale-[1.02]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <PenTool size={18} />
              Luyện Tập
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'quiz'
                  ? 'bg-teal-600 text-white shadow-md transform scale-[1.02]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <BrainCircuit size={18} />
              Trắc Nghiệm
            </button>
          </div>

          {/* Content Container */}
          <div className="animate-fadeIn pb-20">
            
            {activeTab === 'theory' && (
              <div className="grid gap-8">
                {/* THEORY SECTION */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                     <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                       <GraduationCap size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-800">Kiến Thức Trọng Tâm</h3>
                   </div>

                   <div className="grid gap-6">
                    {lesson.theory.map((point, index) => {
                      // Logic to style different types of theory points
                      const isDefinition = point.includes('**') && (point.toLowerCase().startsWith('**định nghĩa') || point.toLowerCase().includes('là '));
                      const isNote = point.toLowerCase().includes('chú ý') || point.toLowerCase().includes('lưu ý');
                      
                      const cleanContent = point.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                         if (part.startsWith('**') && part.endsWith('**')) {
                           return <span key={i} className="font-bold text-teal-800">{part.slice(2, -2)}</span>;
                         }
                         return part;
                      });

                      if (isNote) {
                        return (
                          <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg shadow-sm flex gap-4">
                            <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                            <MathWrapper className="text-slate-700 leading-relaxed">{cleanContent}</MathWrapper>
                          </div>
                        )
                      }
                      
                      if (isDefinition) {
                        return (
                          <div key={index} className="bg-white border-l-4 border-teal-500 p-5 rounded-r-lg shadow-sm border border-gray-100 flex flex-col gap-2">
                            <h4 className="text-xs font-bold text-teal-600 uppercase tracking-wide flex items-center gap-1">
                              <Info size={14}/> Định nghĩa / Khái niệm
                            </h4>
                            <MathWrapper className="text-slate-800 text-lg leading-relaxed">{cleanContent}</MathWrapper>
                          </div>
                        )
                      }

                      return (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-teal-200 transition-all group">
                          <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm font-bold group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                               {index + 1}
                             </div>
                             <MathWrapper className="text-slate-700 leading-relaxed mt-1">{cleanContent}</MathWrapper>
                          </div>
                        </div>
                      );
                    })}
                   </div>
                </section>

                {/* EXAMPLES SECTION */}
                {lesson.illustrativeExamples && lesson.illustrativeExamples.length > 0 && (
                  <section className="mt-8 border-t border-slate-200 pt-8">
                     <div className="flex items-center gap-3 mb-6">
                       <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                         <Lightbulb size={24} />
                       </div>
                       <h3 className="text-xl font-bold text-slate-800">Ví Dụ Minh Họa</h3>
                     </div>

                     <div className="grid md:grid-cols-2 gap-6">
                       {lesson.illustrativeExamples.map((ex) => (
                         <div key={ex.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                           <div className="bg-orange-50/50 px-6 py-4 border-b border-orange-100 flex justify-between items-center">
                              <span className="font-bold text-orange-800 text-sm bg-orange-100 px-3 py-1 rounded-full">{ex.title}</span>
                           </div>
                           <div className="p-6">
                              <div className="mb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase mb-1 block">Đề bài</span>
                                <MathWrapper className="font-medium text-slate-800 text-lg">{ex.content}</MathWrapper>
                              </div>
                              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <span className="text-xs font-bold text-teal-600 uppercase mb-2 block flex items-center gap-1">
                                  <ChevronRight size={14}/> Hướng dẫn giải
                                </span>
                                <MathWrapper className="text-slate-600 whitespace-pre-line leading-relaxed">
                                  {ex.explanation}
                                </MathWrapper>
                              </div>
                           </div>
                         </div>
                       ))}
                     </div>
                  </section>
                )}
              </div>
            )}

            {activeTab === 'exercise' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl p-8 text-white shadow-lg mb-8">
                  <h3 className="text-2xl font-bold mb-2">Bài Tập Tự Luyện</h3>
                  <p className="opacity-90">Rèn luyện kỹ năng giải toán với các bài tập từ cơ bản đến nâng cao.</p>
                </div>

                <div className="grid gap-6">
                  {lesson.exercises.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                      <HelpCircle className="mx-auto mb-4 text-slate-300" size={64} />
                      <p className="text-slate-500 font-medium">Nội dung bài tập đang được cập nhật.</p>
                    </div>
                  ) : (
                    lesson.exercises.map((ex: Exercise, index) => (
                      <div key={ex.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="p-6 border-b border-gray-100">
                           <div className="flex justify-between items-start mb-4">
                             <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm font-bold border border-slate-200 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-200 transition-colors">
                               Bài {index + 1}
                             </span>
                           </div>
                           <MathWrapper className="text-lg font-medium text-slate-800 leading-relaxed">{ex.question}</MathWrapper>
                        </div>
                        <div className="p-6 bg-slate-50/50">
                          <button
                            onClick={() => toggleSolution(ex.id)}
                            className={`mb-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                visibleSolutions[ex.id] 
                                ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' 
                                : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                            }`}
                          >
                            {visibleSolutions[ex.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                            {visibleSolutions[ex.id] ? 'Ẩn Lời Giải' : 'Xem Lời Giải'}
                          </button>

                          {visibleSolutions[ex.id] && (
                            <div className="flex items-start gap-4 animate-fadeIn">
                              <div className="mt-1">
                                <CheckCircle className="text-green-500" size={24} />
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2 block">Đáp án chi tiết</span>
                                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                  <MathWrapper className="text-slate-700 leading-relaxed">{ex.solution}</MathWrapper>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="animate-fadeIn">
                 {!sortedQuiz || sortedQuiz.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
                      <HelpCircle className="mx-auto mb-4 text-slate-300" size={64} />
                      <p className="text-slate-500 font-medium">Chưa có câu hỏi trắc nghiệm cho bài này.</p>
                    </div>
                 ) : (
                    <div className="max-w-3xl mx-auto">
                       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
                          <div className="bg-slate-900 text-white p-6">
                            <div className="flex justify-between items-center">
                              <h3 className="text-xl font-bold flex items-center gap-2">
                                <BrainCircuit className="text-purple-400"/> Trắc Nghiệm Kiến Thức
                              </h3>
                              {quizSubmitted && (
                                <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                                  quizScore >= 80 ? 'bg-green-50 text-white' : 'bg-red-50 text-white'
                                }`}>
                                  Điểm: {quizScore}/100
                                </span>
                              )}
                            </div>
                            <p className="text-slate-400 text-sm mt-2">
                              Hoàn thành trên 80% để mở khóa bài học tiếp theo. Các câu hỏi được sắp xếp từ dễ đến khó.
                            </p>
                          </div>
                          
                          <div className="p-6 space-y-8">
                            {sortedQuiz.map((q: QuizQuestion, index) => {
                              const isCorrect = selectedAnswers[q.id] === q.correctAnswerIndex;
                              const isSelected = selectedAnswers[q.id] !== undefined;
                              const levelInfo = getLevelInfo(q.level);

                              return (
                                <div key={q.id} className="space-y-4">
                                  <div className="flex justify-between items-start gap-4">
                                    <div className="flex gap-3">
                                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center mt-1">
                                        {index + 1}
                                      </span>
                                      <div className="pt-1.5">
                                        <MathWrapper className="text-lg font-medium text-slate-800">{q.question}</MathWrapper>
                                      </div>
                                    </div>
                                    <span className={`flex-shrink-0 text-xs px-2 py-1 rounded border font-medium whitespace-nowrap ${levelInfo.color}`}>
                                      {levelInfo.label}
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-11">
                                    {q.options.map((opt, optIdx) => {
                                      let btnClass = "border border-gray-200 bg-white hover:bg-slate-50 text-slate-700";
                                      
                                      if (quizSubmitted) {
                                        if (optIdx === q.correctAnswerIndex) {
                                          btnClass = "border-green-500 bg-green-50 text-green-800 font-medium";
                                        } else if (selectedAnswers[q.id] === optIdx) {
                                          btnClass = "border-red-500 bg-red-50 text-red-800";
                                        } else {
                                          btnClass = "border-gray-100 bg-gray-50 text-gray-400";
                                        }
                                      } else if (selectedAnswers[q.id] === optIdx) {
                                        btnClass = "border-teal-500 bg-teal-50 text-teal-800 ring-1 ring-teal-500";
                                      }

                                      return (
                                        <button
                                          key={optIdx}
                                          onClick={() => handleAnswerSelect(q.id, optIdx)}
                                          disabled={quizSubmitted}
                                          className={`p-4 rounded-xl text-left transition-all ${btnClass}`}
                                        >
                                          <div className="flex items-center gap-2">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                                              selectedAnswers[q.id] === optIdx || (quizSubmitted && optIdx === q.correctAnswerIndex) 
                                              ? 'border-current' 
                                              : 'border-gray-300'
                                            }`}>
                                              {(selectedAnswers[q.id] === optIdx || (quizSubmitted && optIdx === q.correctAnswerIndex)) && (
                                                <div className="w-2.5 h-2.5 rounded-full bg-current" />
                                              )}
                                            </div>
                                            <MathWrapper>{opt}</MathWrapper>
                                          </div>
                                        </button>
                                      );
                                    })}
                                  </div>
                                  
                                  {quizSubmitted && (
                                    <div className={`ml-11 p-4 rounded-lg text-sm ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                      <p className="font-bold mb-1 flex items-center gap-1">
                                        {isCorrect ? <CheckCircle size={14}/> : <Info size={14}/>} 
                                        Giải thích:
                                      </p>
                                      <MathWrapper>{q.explanation}</MathWrapper>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          <div className="bg-slate-50 p-6 border-t border-gray-100 flex justify-end gap-4">
                            {!quizSubmitted ? (
                              <button 
                                onClick={handleSubmitQuiz}
                                disabled={Object.keys(selectedAnswers).length < lesson.quiz.length}
                                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                <CheckCircle size={20} /> Nộp Bài
                              </button>
                            ) : (
                              <div className="flex gap-4 w-full justify-between items-center">
                                <div className="text-sm">
                                   {quizScore >= 80 ? (
                                     <span className="text-green-600 font-bold flex items-center gap-1">
                                       <Lock size={16} className="text-green-600"/> Đã mở khóa bài tiếp theo!
                                     </span>
                                   ) : (
                                     <span className="text-red-500 font-medium">Cần đạt 80% để mở khóa bài sau.</span>
                                   )}
                                </div>
                                <button 
                                  onClick={handleRetryQuiz}
                                  className="bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-sm"
                                >
                                  <RotateCcw size={18} /> Làm Lại
                                </button>
                              </div>
                            )}
                          </div>
                       </div>
                    </div>
                 )}
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonView;