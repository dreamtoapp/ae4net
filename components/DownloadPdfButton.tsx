"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface DownloadPdfButtonProps {
  label: string;
}

export function DownloadPdfButton({ label }: DownloadPdfButtonProps) {
  const handleDownload = () => {
    window.print();
  };

  return (
    <Button
      onClick={handleDownload}
      size="lg"
      className="no-print gap-2"
    >
      <Download className="h-5 w-5" />
      {label}
    </Button>
  );
}

