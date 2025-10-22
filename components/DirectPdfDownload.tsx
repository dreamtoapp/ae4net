"use client";

import { Button } from '@/components/ui/button';
import { FileDown, Loader2, CheckCircle2 } from 'lucide-react';
import { useState, ReactNode, useEffect } from 'react';
import { useLocale } from 'next-intl';

interface DirectPdfDownloadProps {
  label: string | ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

type ProgressStage = 'idle' | 'preparing' | 'generating' | 'downloading' | 'complete';

export function DirectPdfDownload({ label, size = "lg", className }: DirectPdfDownloadProps) {
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
      // Simulate preparation time
      await new Promise(resolve => setTimeout(resolve, 500));
      setStage('generating');

      // Call the API route to generate PDF
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

      // Get the PDF blob
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'AE4NET-Brochure.pdf';
      document.body.appendChild(link);
      link.click();

      // Cleanup
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
        return 'Generating PDF...';
      case 'downloading':
        return 'Downloading...';
      case 'complete':
        return 'Complete!';
      default:
        return typeof label === 'string' ? label : '';
    }
  };

  const getIcon = () => {
    const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

    switch (stage) {
      case 'complete':
        return <CheckCircle2 className={`${iconSize} text-green-500`} />;
      case 'preparing':
      case 'generating':
      case 'downloading':
        return <Loader2 className={`${iconSize} animate-spin`} />;
      default:
        return <FileDown className={iconSize} />;
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleDownload}
        size={size}
        variant="default"
        className={className || "gap-2 shadow-lg"}
        disabled={isGenerating}
        data-pdf-download
      >
        {getIcon()}
        {typeof label === 'string' ? getStageText() : stage !== 'idle' ? getStageText() : label}
      </Button>

      {/* Progress Bar Overlay */}
      {isGenerating && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-b-lg overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

