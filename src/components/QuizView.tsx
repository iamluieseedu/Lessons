'use client';

import React, { useState } from 'react';
import { quizQuestions } from '@/data/quizData';
import { 
  CheckCircle, 
  XCircle, 
  Award, 
  Printer, 
  ArrowRight, 
  RotateCcw, 
  User, 
  Hash, 
  CheckCircle2,
  FileText,
  Copy,
  Check,
  Send
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answersLog, setAnswersLog] = useState<{ qIdx: number; selected: number; correct: boolean }[]>([]);
  const [copied, setCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(''); // Allow teacher to set a Google Sheet Webhook URL
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentIdx];

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsRegistered(true);
    }
  };

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedOpt(optIdx);
    setIsAnswered(true);
    
    const isCorrect = optIdx === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersLog((prev) => [...prev, { qIdx: currentIdx, selected: optIdx, correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setAnswersLog([]);
    setSubmitStatus(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const scoreTextSummary = `STUDENT QUIZ REPORT\nName: ${studentName}\nStudent ID: ${studentId || 'N/A'}\nQuiz: Week 1 Video Editing\nScore: ${score} / ${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)\nDate: ${new Date().toLocaleDateString()}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(scoreTextSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitScore = async () => {
    if (!webhookUrl.trim()) {
      alert("Please enter a valid Google App Script Webhook URL provided by your teacher.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // standard for simple app script redirects
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName,
          studentId,
          score,
          total: totalQuestions,
          date: new Date().toLocaleDateString()
        })
      });
      setSubmitStatus("Success! Your score has been submitted to your teacher's Google Sheet.");
    } catch (err) {
      console.error(err);
      setSubmitStatus("Submission attempted. (Verify webhook configurations if issues arise.)");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isRegistered) {
    return (
      <div className="w-full max-w-xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative z-10 text-slate-800">
        <div className="text-center mb-6">
          <Award className="w-12 h-12 text-sky-600 mx-auto mb-3" />
          <h2 className="font-lexend text-2xl font-extrabold text-slate-900">Interactive Quiz</h2>
          <p className="text-sm text-slate-500 mt-1">Please enter your details below to start the Week 1 quiz assessment.</p>
        </div>

        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-650 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-sky-600" />
              Full Name
            </label>
            <input
              type="text"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-650 uppercase tracking-wider flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-sky-600" />
              Student ID / Number (Optional)
            </label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="e.g. 2026-10492"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
          >
            Start Quiz Assessment
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  if (quizFinished) {
    const percent = Math.round((score / totalQuestions) * 100);
    return (
      <div className="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative z-10 text-slate-800 print:border-none print:shadow-none print:p-0">
        
        {/* Certificate Section for Printing */}
        <div id="certificate-print" className="p-8 border-4 border-double border-slate-300 rounded-xl text-center bg-slate-50 relative overflow-hidden shadow-inner mb-6 print:mb-0">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.03] rounded-full blur-xl pointer-events-none" />
          
          <Award className="w-14 h-14 text-sky-600 mx-auto mb-4" />
          <span className="font-lexend text-[10px] tracking-widest text-slate-400 font-bold uppercase">Certificate of Completion</span>
          
          <h2 className="font-lexend text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">Week 1: Video Editing Basics</h2>
          <p className="text-xs text-slate-500 mt-1">This document certifies that</p>
          
          <h3 className="font-lexend text-xl md:text-2xl font-bold text-sky-700 underline decoration-sky-400/40 my-4">
            {studentName}
          </h3>
          
          {studentId && <p className="text-xs text-slate-450 -mt-2 mb-3">Student ID: {studentId}</p>}
          
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Has successfully finished the multiple-choice assessment covering video timelines, A-Roll/B-Roll layering, frame speeds, aspect ratios, and editor quadrants.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center border-t border-slate-200/80 pt-4">
            <span className="text-xs font-semibold text-slate-500">Assessment Score Received</span>
            <span className="font-lexend text-2xl font-black text-slate-900 mt-1">
              {score} / {totalQuestions} ({percent}%)
            </span>
            <span className="text-[10px] text-slate-400 mt-1">Completed on {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Panel (Hidden during Printing) */}
        <div className="flex flex-col gap-4 print:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handlePrint}
              className="py-2.5 px-4 rounded-xl border border-slate-250 bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 text-sm flex items-center justify-center gap-2 transition"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
            <button
              onClick={handleRestart}
              className="py-2.5 px-4 rounded-xl border border-slate-250 bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 text-sm flex items-center justify-center gap-2 transition"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>

          <hr className="border-slate-200 my-1" />

          {/* Submission options */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-750 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-sky-600" />
              Submit Score to Teacher
            </h4>
            
            <div className="flex items-stretch gap-2">
              <input
                type="text"
                readOnly
                value={`${studentName} - Score: ${score}/${totalQuestions} (${percent}%)`}
                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-650"
              />
              <button
                onClick={handleCopySummary}
                className={`px-4 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition ${
                  copied
                    ? 'bg-emerald-500/10 text-emerald-700 border-emerald-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-250'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Score'}
              </button>
            </div>

            {/* Direct Google Sheets Script Webhook Input */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                  Teacher Google Sheets Webhook URL
                </label>
                <input
                  type="text"
                  placeholder="Paste teacher's App Script Deployment URL..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>
              <button
                onClick={handleSubmitScore}
                disabled={isSubmitting}
                className="w-full py-2 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                {isSubmitting ? 'Submitting...' : 'Submit Directly to Spreadsheet'}
              </button>
              {submitStatus && (
                <p className="text-[11px] font-semibold text-sky-700 text-center">{submitStatus}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative z-10 text-slate-800">
      
      {/* Quiz Progress Header */}
      <div className="flex justify-between items-center pb-3 border-b border-slate-200 mb-5">
        <span className="text-xs font-semibold text-slate-500">
          Question <strong className="text-sky-600 font-bold">{currentIdx + 1}</strong> of {totalQuestions}
        </span>
        <span className="text-xs font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-700">
          Score: {score}
        </span>
      </div>

      {/* Quiz Question Statement */}
      <h3 className="font-lexend text-base md:text-lg font-bold text-slate-900 leading-relaxed mb-6">
        {currentQuestion.question}
      </h3>

      {/* Multiple-Choice Options Grid */}
      <div className="space-y-3">
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = selectedOpt === idx;
          const isAnswerCorrect = idx === currentQuestion.answer;
          
          let optStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-350';
          if (isAnswered) {
            if (isAnswerCorrect) {
              optStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-800 font-semibold';
            } else if (isSelected) {
              optStyle = 'border-rose-500 bg-rose-500/10 text-rose-800';
            } else {
              optStyle = 'border-slate-100 opacity-60 bg-slate-50';
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm flex items-center justify-between transition ${optStyle}`}
            >
              <span>{opt}</span>
              {isAnswered && (
                <>
                  {isAnswerCorrect && <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                  {isSelected && !isAnswerCorrect && <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />}
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Explanation Box */}
      {isAnswered && (
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-650 animate-fadeIn">
          <strong className="text-slate-900 block mb-1">Explanation:</strong>
          {currentQuestion.explanation}
        </div>
      )}

      {/* Navigation Footer */}
      {isAnswered && (
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={handleNext}
            className="py-2.5 px-5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center gap-1.5"
          >
            {currentIdx === totalQuestions - 1 ? 'Finish Assessment' : 'Next Question'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
