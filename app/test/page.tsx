"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { quizQuestions, type QuizOption } from "@/lib/quiz-data";
import { ChevronLeft, ChevronRight, TreePine, Sparkles, Award, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface AnswerRecord {
  question: string;
  selectedOption: string;
  impact: 'low' | 'medium' | 'high';
  feedback: string;
}

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [currentFeedback, setCurrentFeedback] = useState<string>("");
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState(false);
  const [finalSummary, setFinalSummary] = useState<string | null>(null);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [userFeedback, setUserFeedback] = useState<string>("");
  const [isSavingFeedback, setIsSavingFeedback] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  const handleOptionSelect = async (option: QuizOption) => {
    if (isFlipped) return; // Prevent selecting after flip
    
    setSelectedOption(option);
    setIsFlipped(true);
    setIsGeneratingFeedback(true);
    
    // Show toast based on impact (only on desktop, not mobile)
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      if (option.impact === 'low') {
        toast.success("Great choice!", {
          description: "You're making a positive impact! 🌱",
        });
      } else if (option.impact === 'medium') {
        toast.info("Good effort!", {
          description: "There's room for improvement! 🌿",
        });
      } else {
        toast.warning("Consider this...", {
          description: "Let's find more sustainable alternatives! 🌍",
        });
      }
    }

    // Try to get AI-generated feedback
    try {
      const response = await fetch('/api/generate-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.question,
          options: question.options.map(opt => ({ text: opt.text, impact: opt.impact })),
          selectedOption: { text: option.text, impact: option.impact }
        })
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentFeedback(data.feedback);
      } else {
        throw new Error('API failed');
      }
    } catch (error) {
      // Fallback to hardcoded feedback
      setCurrentFeedback(option.feedback);
    } finally {
      setIsGeneratingFeedback(false);
    }
  };

  const handleNext = async () => {
    if (!selectedOption || !currentFeedback) return;
    
    // Store the answer with the feedback (AI or hardcoded)
    const newAnswer: AnswerRecord = {
      question: question.question,
      selectedOption: selectedOption.text,
      impact: selectedOption.impact,
      feedback: currentFeedback
    };
    
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    
    if (isLastQuestion) {
      // Generate final AI summary
      setIsGeneratingSummary(true);
      
      const lowImpact = updatedAnswers.filter(a => a.impact === 'low').length;
      const mediumImpact = updatedAnswers.filter(a => a.impact === 'medium').length;
      const highImpact = updatedAnswers.filter(a => a.impact === 'high').length;
      const score = Math.round((lowImpact / quizQuestions.length) * 100);
      
      toast.success(`Quiz Complete! Your sustainability score: ${score}%`, {
        description: score >= 70 ? "You're a sustainability champion! 🏆" : score >= 40 ? "You're on the right track! Keep learning! 🌱" : "Every journey starts with a single step! 🌍",
        duration: 5000,
      });

      // Try to get AI-generated summary
      try {
        const response = await fetch('/api/generate-summary', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            answers: updatedAnswers,
            score,
            lowImpact,
            mediumImpact,
            highImpact
          })
        });

        if (response.ok) {
          const data = await response.json();
          setFinalSummary(data.summary);
        } else {
          throw new Error('API failed');
        }
      } catch (error) {
        // Fallback to hardcoded summary
        if (score >= 70) {
          setFinalSummary("Excellent work! You're already making fantastic sustainable choices this holiday season. Keep inspiring others with your eco-friendly practices! Share your knowledge and help others make better choices too. 🏆  <strong>We’d love to hear what you’d do differently after taking this quiz, share a comment below.</strong>");
        } else if (score >= 40) {
          setFinalSummary("You're on the right track! You've made some great sustainable choices, and there's opportunity to do even more. Review the feedback from the quiz and try implementing one new sustainable practice this holiday season. Every small change counts! 🌱  <strong>We’d love to hear what you’d do differently after taking this quiz, share a comment below.</strong>");
        } else {
          setFinalSummary("Every sustainability journey starts with awareness, and you've taken the first step! Use the insights from this quiz to make small changes in your holiday habits. Even changing one or two practices can make a real difference. You've got this! 🌍 <strong>We’d love to hear what you’d do differently after taking this quiz, share a comment below.</strong>");
        }
      } finally {
        setIsGeneratingSummary(false);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsFlipped(false);
      setCurrentFeedback("");
    }
  };

  const handlePrevious = () => {
    if (isFirstQuestion) return;
    
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption(null);
    setIsFlipped(false);
    setCurrentFeedback("");
    if (answers.length > 0) {
      setAnswers(answers.slice(0, -1));
    }
  };

  const calculateResults = () => {
    const lowImpact = answers.filter(a => a.impact === 'low').length;
    const mediumImpact = answers.filter(a => a.impact === 'medium').length;
    const highImpact = answers.filter(a => a.impact === 'high').length;
    const score = Math.round((lowImpact / quizQuestions.length) * 100);
    
    return { lowImpact, mediumImpact, highImpact, score };
  };

  const handleFeedbackSubmit = async () => {
    if (!userFeedback.trim()) {
      toast.error("Please share your thoughts!", {
        description: "We'd love to hear what you'll do differently."
      });
      return;
    }

    setIsSavingFeedback(true);

    try {
      const results = calculateResults();
      const response = await fetch('/api/save-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          feedback: userFeedback,
          timestamp: new Date().toISOString(),
          score: results.score
        })
      });

      if (response.ok) {
        toast.success("Thank you for sharing!", {
          description: "Your feedback helps us improve sustainability efforts! 🌱"
        });
        setFeedbackSubmitted(true);
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      toast.error("Couldn't save your feedback", {
        description: "Please try again or contact us directly."
      });
    } finally {
      setIsSavingFeedback(false);
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low': return 'bg-secondary text-white';
      case 'medium': return 'bg-yellow-500 text-gray-900';
      case 'high': return 'bg-primary text-white';
      default: return '';
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'low': return '🌱';
      case 'medium': return '⚡';
      case 'high': return '⚠️';
      default: return '';
    }
  };

  if (answers.length === quizQuestions.length) {
    const results = calculateResults();
    
    return (
      <main className="min-h-screen pt-16 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary">
                <Award className="size-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">Quiz Complete!</h1>
              <p className="text-xl text-muted-foreground">Here's your sustainability report</p>
            </div>

            <Card className="p-8 mb-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {results.score}%
                </div>
                <p className="text-lg text-muted-foreground">Sustainability Score</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-secondary/10 text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="text-2xl font-bold text-secondary">{results.lowImpact}</div>
                  <div className="text-sm text-muted-foreground">Low Impact Choices</div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-yellow-600">{results.mediumImpact}</div>
                  <div className="text-sm text-muted-foreground">Medium Impact Choices</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 text-center">
                  <div className="text-3xl mb-2">⚠️</div>
                  <div className="text-2xl font-bold text-primary">{results.highImpact}</div>
                  <div className="text-sm text-muted-foreground">High Impact Choices</div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  Your Sustainability Journey
                </h3>
                {isGeneratingSummary ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="size-5 animate-spin" />
                    <span>Generating your personalized sustainability report...</span>
                  </div>
                ) : (
                  <p 
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: finalSummary || '' }}
                  />
                )}
              </div>
            </Card>

            {/* Feedback Form */}
            <Card className="p-6 md:p-8 mb-8">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                Thanks for engaging with this test!
              </h3>
              <p className="text-muted-foreground mb-4">
                Tell us one thing (or more!) that you think you will do differently:
              </p>
              
              {!feedbackSubmitted ? (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Share your thoughts on what you'll change this holiday season..."
                    value={userFeedback}
                    onChange={(e) => setUserFeedback(e.target.value)}
                    className="min-h-[100px] resize-none"
                    disabled={isSavingFeedback}
                  />
                  <Button 
                    onClick={handleFeedbackSubmit}
                    disabled={isSavingFeedback || !userFeedback.trim()}
                    className="w-full sm:w-auto"
                  >
                    {isSavingFeedback ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4" />
                        Submit Feedback
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-secondary p-4 bg-secondary/10 rounded-lg">
                  <Sparkles className="size-5" />
                  <p className="font-medium">Thank you for your valuable feedback! 🌱</p>
                </div>
              )}
            </Card>

            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/">
                  <TreePine className="mr-2 size-4" />
                  Back to Home
                </Link>
              </Button>
              <Button 
                size="lg" 
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedOption(null);
                  setIsFlipped(false);
                  setCurrentFeedback("");
                  setAnswers([]);
                  setFinalSummary(null);
                  setUserFeedback("");
                  setFeedbackSubmitted(false);
                  toast.info("Let's try again!", { description: "See if you can improve your score! 🎯" });
                }}
              >
                <Sparkles className="mr-2 size-4" />
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 px-4 text-foreground">
              {question.question}
            </h2>

            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
              <div className="flip-card-inner min-h-[400px]">
                {/* Front of card - Options */}
                <div className="flip-card-front">
                  <div className="space-y-4">
                    {question.options.map((option, index) => (
                      <Card
                        key={index}
                        className={`p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] border-2 ${
                          selectedOption === option && !isFlipped
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <p className="text-lg flex-1">{option.text}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Back of card - Feedback */}
                <div className="flip-card-back">
                  {selectedOption && (
                    <Card className={`p-8 md:p-12 min-h-[400px] ${getImpactColor(selectedOption.impact)}`}>
                      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                        <div className="text-6xl">{getImpactIcon(selectedOption.impact)}</div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            {selectedOption.impact === 'low' && 'Excellent Choice!'}
                            {selectedOption.impact === 'medium' && 'Good Effort!'}
                            {selectedOption.impact === 'high' && 'Room for Improvement'}
                          </h3>
                          <div className="inline-block px-5 py-2 rounded-full bg-white/30 text-sm font-bold mb-6">
                            {selectedOption.impact.toUpperCase()} IMPACT
                          </div>
                        </div>
                        {isGeneratingFeedback ? (
                          <div className="flex items-center gap-2 text-base md:text-lg">
                            <Loader2 className="size-5 animate-spin" />
                            <span>Generating personalized feedback...</span>
                          </div>
                        ) : (
                          <p className="text-base md:text-lg leading-relaxed max-w-2xl px-4">
                            {currentFeedback || selectedOption.feedback}
                          </p>
                        )}
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 pt-6 mt-8 border-t">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className="min-w-[120px]"
            >
              <ChevronLeft className="mr-2 size-4" />
              Previous
            </Button>

            <Button
              size="lg"
              onClick={handleNext}
              disabled={!selectedOption || !isFlipped || isGeneratingFeedback}
              className="min-w-[120px]"
            >
              {isLastQuestion ? 'See Results' : 'Next'}
              {isGeneratingFeedback ? (
                <Loader2 className="ml-2 size-4 animate-spin" />
              ) : (
                <ChevronRight className="ml-2 size-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

