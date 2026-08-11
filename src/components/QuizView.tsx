'use client';

import React, { useState, useEffect } from 'react';
import { quizQuestions } from '@/data/quizData';
import { 
  CheckCircle, 
  XCircle, 
  Award, 
  Printer, 
  ArrowRight,
  ArrowLeft,
  RotateCcw, 
  User, 
  Hash, 
  CheckCircle2,
  Mail,
  Layers,
  FileText,
  Copy,
  Check,
  Send
} from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface QuizViewProps {
  questions?: Question[];
  title?: string;
}

export const QuizView: React.FC<QuizViewProps> = ({ questions, title }) => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentSection, setStudentSection] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  
  const [googleClientId, setGoogleClientId] = useState('');
  const [allowedDomain, setAllowedDomain] = useState('');
  const [loginError, setLoginError] = useState('');
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [copied, setCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('vid_webhook_url') || '';
    }
    return '';
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const activeQuestions = questions && questions.length > 0 ? questions : quizQuestions;
  const totalQuestions = activeQuestions.length;
  const currentQuestion = activeQuestions[currentIdx];

  // Hydrate client-side variables and load Google GIS SDK
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClientId = localStorage.getItem('vid_google_client_id') || '';
      setGoogleClientId(storedClientId);
      const storedDomain = localStorage.getItem('vid_google_allowed_domain') || '';
      setAllowedDomain(storedDomain);

      if ((window as any).google) {
        setSdkLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => setSdkLoaded(true);
      document.body.appendChild(script);

      return () => {
        // clean up script on unmount if needed
        try {
          document.body.removeChild(script);
        } catch (e) {}
      };
    }
  }, []);

  // Initialize and Render Google Sign-in button
  useEffect(() => {
    if (googleClientId && sdkLoaded && !isRegistered && studentSection.trim() !== '' && typeof window !== 'undefined' && (window as any).google) {
      const initializeAndRender = () => {
        try {
          (window as any).google.accounts.id.initialize({
            client_id: googleClientId,
            callback: handleGoogleLoginResponse
          });
          const btnParent = document.getElementById('google-login-btn');
          if (btnParent) {
            btnParent.innerHTML = ''; // Clear previous button instance
            (window as any).google.accounts.id.renderButton(
              btnParent,
              { theme: 'outline', size: 'large', width: 280 }
            );
          }
        } catch (e) {
          console.error("Error rendering Google button:", e);
        }
      };

      const timer = setTimeout(initializeAndRender, 120);
      return () => clearTimeout(timer);
    }
  }, [googleClientId, sdkLoaded, isRegistered, studentSection]);

  const handleGoogleLoginResponse = (response: any) => {
    try {
      const token = response.credential;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const payload = JSON.parse(jsonPayload);
      const name = payload.name;
      const email = payload.email;

      // Restrict domain if configured
      if (allowedDomain.trim()) {
        const domainFilter = allowedDomain.trim().toLowerCase();
        if (!email.toLowerCase().endsWith(domainFilter)) {
          setLoginError(`Access Denied: You must sign in using a Google account ending in ${domainFilter}`);
          return;
        }
      }

      setStudentName(name);
      setStudentEmail(email);
      setLoginError('');
      setIsRegistered(true);
    } catch (err) {
      console.error(err);
      setLoginError('Authentication parsing error. Please try again.');
    }
  };

  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleSubmitQuiz = async () => {
    if (Object.keys(selectedAnswers).length < totalQuestions) {
      alert("Please answer all questions before submitting your quiz.");
      return;
    }

    // Compute score
    let finalScore = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);

    const newScoreRecord = {
      name: studentName,
      email: studentEmail,
      section: studentSection,
      score: finalScore,
      total: totalQuestions,
      percent: Math.round((finalScore / totalQuestions) * 100),
      date: new Date().toLocaleDateString()
    };

    // Save locally
    if (typeof window !== 'undefined') {
      const existingScores = JSON.parse(localStorage.getItem('vid_student_scores') || '[]');
      const alreadyLogged = existingScores.some((s: any) => 
        s.name === studentName && s.score === finalScore && s.date === newScoreRecord.date
      );
      if (!alreadyLogged) {
        existingScores.push(newScoreRecord);
        localStorage.setItem('vid_student_scores', JSON.stringify(existingScores));
      }
    }

    // Submit webhook
    if (webhookUrl.trim()) {
      setIsSubmitting(true);
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newScoreRecord)
        });
        setSubmitStatus("Success! Your score has been submitted to your teacher's Google Sheet.");
      } catch (err) {
        console.error(err);
        setSubmitStatus("Submission attempted. (Verify webhook configurations if issues arise.)");
      } finally {
        setIsSubmitting(false);
      }
    }

    setQuizFinished(true);
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizFinished(false);
    setSubmitStatus(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const percent = Math.round((score / totalQuestions) * 100);
  const scoreTextSummary = `STUDENT QUIZ REPORT\nName: ${studentName}\nEmail: ${studentEmail}\nSection: ${studentSection}\nQuiz: ${title || 'Week 1 Video Editing'}\nScore: ${score} / ${totalQuestions} (${percent}%)\nDate: ${new Date().toLocaleDateString()}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(scoreTextSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. REGISTRATION GATEWAY (Requires Google Login)
  if (!isRegistered) {
    return (
      <div className="w-full max-w-xl mx-auto p-5 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative z-10 text-slate-800">
        <div className="text-center mb-5 sm:mb-6">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 text-sky-600 mx-auto mb-2 sm:mb-3" />
          <h2 className="font-lexend text-xl sm:text-2xl font-extrabold text-slate-900">Interactive Quiz</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Please sign in with your student Google Account to begin the {title || 'Week 1'} quiz assessment.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-650 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              Class Section
            </label>
            <input
              type="text"
              required
              value={studentSection}
              onChange={(e) => setStudentSection(e.target.value)}
              placeholder="e.g. Grade 12 - Diamond"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-850 placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          {loginError && (
            <p className="text-xs text-rose-600 text-center font-bold bg-rose-50 border border-rose-200/50 py-2 rounded-xl">
              {loginError}
            </p>
          )}

          {googleClientId ? (
            <div className="pt-2 flex flex-col items-center">
              {studentSection.trim() ? (
                <div className="flex justify-center my-2" id="google-login-btn"></div>
              ) : (
                <p className="w-full text-center py-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs text-slate-400 font-semibold select-none">
                  Please enter your Class Section above to enable Google Sign-In.
                </p>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-200 text-center text-xs text-amber-800 leading-relaxed font-semibold">
              Google Sign-In is not configured.
              <p className="font-medium text-[10px] text-slate-500 mt-1">
                Please log in as Admin to configure the Google Client ID.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. QUIZ FINISHED / SCORE CARD & CERTIFICATE
  if (quizFinished) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative z-10 text-slate-800 print:border-none print:shadow-none print:p-0">
        
        {/* Certificate Section for Printing */}
        <div id="certificate-print" className="p-4 sm:p-8 border-4 border-double border-slate-300 rounded-xl text-center bg-slate-50 relative overflow-hidden shadow-inner mb-6 print:mb-0">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.03] rounded-full blur-xl pointer-events-none" />
          
          <Award className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-sky-600 mx-auto mb-3 sm:mb-4" />
          <span className="font-lexend text-[9px] sm:text-[10px] tracking-widest text-slate-400 font-bold uppercase">Certificate of Completion</span>
          
          <h2 className="font-lexend text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">{title || 'Week 1: Video Editing Basics'}</h2>
          <p className="text-xs text-slate-500 mt-1">This document certifies that</p>
          
          <h3 className="font-lexend text-lg sm:text-xl md:text-2xl font-bold text-sky-700 underline decoration-sky-400/40 my-3 sm:my-4">
            {studentName}
          </h3>
          
          {studentSection && <p className="text-[11px] sm:text-xs text-slate-450 -mt-2 mb-3">Class Section: {studentSection}</p>}
          
          <p className="text-[11px] sm:text-xs text-slate-655 max-w-md mx-auto leading-relaxed">
            Has successfully finished the multiple-choice assessment covering video timelines, A-Roll/B-Roll layering, frame speeds, aspect ratios, and editor quadrants.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col items-center justify-center border-t border-slate-200/80 pt-3 sm:pt-4">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-505">Assessment Score Received</span>
            <span className="font-lexend text-xl sm:text-2xl font-black text-slate-900 mt-1">
              {score} / {totalQuestions} ({percent}%)
            </span>
            <span className="text-[10px] text-slate-455 mt-1">Completed on {new Date().toLocaleDateString()}</span>
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
            <h4 className="text-xs font-bold text-slate-755 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-sky-600" />
              Submit Score to Teacher
            </h4>
            
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="text"
                readOnly
                value={`${studentName} - Score: ${score}/${totalQuestions} (${percent}%)`}
                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-655"
              />
              <button
                onClick={handleCopySummary}
                className={`px-4 py-2 sm:py-0 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                  copied
                    ? 'bg-emerald-500/10 text-emerald-700 border-emerald-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-250'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Score'}
              </button>
            </div>

            {/* Webhook Auto-Submit Status Panel */}
            {webhookUrl ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                  {isSubmitting ? (
                    <span className="animate-pulse text-sky-650">Submitting score to spreadsheet...</span>
                  ) : submitStatus ? (
                    <span className="text-emerald-650 flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" /> Score Auto-Submitted
                    </span>
                  ) : (
                    <span className="text-slate-500">Auto-submitting score...</span>
                  )}
                </div>
                {submitStatus && (
                  <p className="text-[11px] font-medium text-slate-500 mt-1">{submitStatus}</p>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-200 text-center">
                <p className="text-[11px] font-semibold text-amber-700">
                  Global Webhook URL not configured.
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Copy the score above and send it to your teacher, or ask them to configure the Webhook URL in the Admin Portal.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 3. QUIZ ACTIVE TEST VIEW
  const currentSelectedOpt = selectedAnswers[currentIdx];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative z-10 text-slate-800">
      
      {/* Quiz Progress Header */}
      <div className="flex justify-between items-center pb-2.5 border-b border-slate-200 mb-4 sm:mb-5">
        <span className="text-xs font-semibold text-slate-500">
          Question <strong className="text-sky-600 font-bold">{currentIdx + 1}</strong> of {totalQuestions}
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-700">
          Answers: {Object.keys(selectedAnswers).length} / {totalQuestions}
        </span>
      </div>

      {/* Quiz Question Statement */}
      <h3 className="font-lexend text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-relaxed mb-4 sm:mb-6">
        {currentQuestion.question}
      </h3>

      {/* Multiple-Choice Options Grid */}
      <div className="space-y-2.5 sm:space-y-3">
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = currentSelectedOpt === idx;
          let optStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-350 text-slate-850';
          if (isSelected) {
            optStyle = 'border-sky-500 bg-sky-50/75 text-sky-850 font-semibold ring-2 ring-sky-500/20';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition ${optStyle}`}
            >
              <span>{opt}</span>
              {isSelected && <Check className="w-4 h-4 text-sky-600 flex-shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center">
        <button
          onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 border border-slate-250 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Previous
        </button>

        {currentIdx < totalQuestions - 1 ? (
          <button
            onClick={() => setCurrentIdx(prev => prev + 1)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5"
          >
            Next
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleSubmitQuiz}
            disabled={Object.keys(selectedAnswers).length < totalQuestions}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-1.5"
            title={Object.keys(selectedAnswers).length < totalQuestions ? "Please answer all questions before submitting." : "Submit your quiz answers"}
          >
            Submit Quiz
            <Send className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
