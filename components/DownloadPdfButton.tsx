"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Link } from '@/i18n/routing';

interface DownloadPdfButtonProps {
  label: string;
}

export function DownloadPdfButton({ label }: DownloadPdfButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className="no-print gap-2"
    >
      <Link href="/brochure">
        <Download className="h-5 w-5" />
        {label}
      </Link>
    </Button>
  );
}

