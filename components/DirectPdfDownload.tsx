"use client";

import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface DirectPdfDownloadProps {
  label: string | ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function DirectPdfDownload({ label, size = "lg", className }: DirectPdfDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const jsPDF = (await import('jspdf')).default;
      const html2canvas = (await import('html2canvas')).default;

      const pdfContainer = document.querySelector('.pdf-container') as HTMLElement;
      if (!pdfContainer) {
        console.error('PDF container not found');
        return;
      }

      const pages = pdfContainer.querySelectorAll('.pdf-page');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;

        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        if (i > 0) {
          pdf.addPage();
        }

        if (imgHeight > pdfHeight) {
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, pdfHeight);
        } else {
          pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        }
      }

      pdf.save('AE4NET-Brochure.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      size={size}
      variant="default"
      className={className || "gap-2 shadow-lg"}
      disabled={isGenerating}
      data-pdf-download
    >
      {isGenerating ? (
        <>
          <FileDown className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
          جاري التحميل...
        </>
      ) : (
        typeof label === 'string' ? (
          <>
            <FileDown className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
            {label}
          </>
        ) : (
          label
        )
      )}
    </Button>
  );
}

