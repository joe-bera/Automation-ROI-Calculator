'use client';

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';

interface SuccessStateProps {
  email: string;
  onReset?: () => void;
}

export function SuccessState({ email, onReset }: SuccessStateProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      window.removeEventListener('resize', updateSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          colors={['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']}
        />
      )}

      <FadeIn>
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30">
            <CheckCircle2 className="h-8 w-8 text-emerald-500" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-50">
              Your Blueprint is On The Way!
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              We&apos;ve sent your custom AI automation blueprint to{' '}
              <span className="text-slate-200 font-medium">{email}</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <Mail className="h-4 w-4" />
            <span>Check your inbox (and spam folder, just in case)</span>
          </div>

          <div className="pt-4 space-y-4">
            <p className="text-sm text-slate-400">
              Want to discuss your automation opportunities?
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() =>
                window.open('https://aibizautomate.com/contact', '_blank')
              }
            >
              Schedule a Free Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {onReset && (
            <button
              onClick={onReset}
              className="text-sm text-slate-500 hover:text-slate-400 underline"
            >
              Calculate another scenario
            </button>
          )}
        </div>
      </FadeIn>
    </>
  );
}
