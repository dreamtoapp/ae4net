"use client";

import { Printer, Download, Loader2, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

type ProgressStage = 'idle' | 'preparing' | 'generating' | 'downloading' | 'complete';

export function BrochureFloatingButtons() {
  const [stage, setStage] = useState<ProgressStage>('idle');
  const [progress, setProgress] = useState(0);
  const locale = useLocale();

  const isGenerating = stage !== 'idle' && stage !== 'complete';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (stage === 'preparing') {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 30));
      }, 200);
    } else if (stage === 'generating') {
      setProgress(30);
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 5, 85));
      }, 300);
    } else if (stage === 'downloading') {
      setProgress(85);
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 5, 95));
      }, 100);
    } else if (stage === 'complete') {
      setProgress(100);
      setTimeout(() => {
        setStage('idle');
        setProgress(0);
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [stage]);

  const handleDownload = async () => {
    setStage('preparing');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setStage('generating');

      const response = await fetch(`/api/brochure-pdf?locale=${locale}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'Failed to generate PDF');
      }

      setStage('downloading');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'AE4NET-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setStage('complete');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
      setStage('idle');
      setProgress(0);
    }
  };

  const getStageText = () => {
    switch (stage) {
      case 'preparing':
        return 'Preparing...';
      case 'generating':
        return 'Generating...';
      case 'downloading':
        return 'Downloading...';
      case 'complete':
        return 'Complete!';
      default:
        return 'Download PDF';
    }
  };

  const getIcon = () => {
    switch (stage) {
      case 'complete':
        return <CheckCircle2 className="h-6 w-6 text-green-400" />;
      case 'preparing':
      case 'generating':
      case 'downloading':
        return <Loader2 className="h-6 w-6 animate-spin" />;
      default:
        return <Download className="h-6 w-6" />;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 print:hidden">
      {/* Download PDF Button with Progress */}
      <div className="relative">
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-2xl transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 flex items-center justify-center group relative disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Download PDF"
          title={getStageText()}
        >
          {getIcon()}
          <span className="absolute right-16 whitespace-nowrap bg-brand-navy text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {getStageText()}
          </span>
        </button>
        
        {/* Circular Progress Ring */}
        {isGenerating && (
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 56 56"
          >
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-200 opacity-20"
            />
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        )}
        
        {/* Progress Percentage Badge */}
        {isGenerating && (
          <div className="absolute -top-2 -right-2 bg-brand-gold text-brand-navy text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-pulse">
            {Math.round(progress)}%
          </div>
        )}
      </div>
      
      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-2xl transition-all bg-brand-navy text-white hover:bg-brand-navy/90 hover:scale-110 flex items-center justify-center group relative"
        aria-label="Print"
        title="Print"
      >
        <Printer className="h-6 w-6" />
        <span className="absolute right-16 whitespace-nowrap bg-brand-navy text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Print
        </span>
      </button>
    </div>
  );
}

