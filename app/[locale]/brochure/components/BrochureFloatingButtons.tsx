"use client";

import { Printer, Download } from 'lucide-react';
import { DirectPdfDownload } from '@/components/DirectPdfDownload';

export function BrochureFloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 print:hidden">
      <button
        onClick={() => document.querySelector<HTMLButtonElement>('[data-pdf-download]')?.click()}
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-2xl transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 flex items-center justify-center group relative"
        aria-label="Download PDF"
        title="Download PDF"
      >
        <Download className="h-6 w-6" />
        <span className="absolute right-16 whitespace-nowrap bg-brand-navy text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Download PDF
        </span>
      </button>
      
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
      
      <div className="hidden">
        <DirectPdfDownload 
          label="Download"
          size="sm"
        />
      </div>
    </div>
  );
}

