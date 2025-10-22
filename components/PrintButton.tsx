"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ReactNode } from 'react';

interface PrintButtonProps {
  label: ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

export function PrintButton({ label, size = "lg", variant = "default", className }: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      size={size}
      variant={variant}
      className={className || "no-print gap-2 shadow-lg"}
    >
      {typeof label === 'string' ? (
        <>
          <Download className="h-5 w-5" />
          {label}
        </>
      ) : (
        label
      )}
    </Button>
  );
}

