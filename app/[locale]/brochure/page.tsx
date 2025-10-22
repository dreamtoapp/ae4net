import { useTranslations } from 'next-intl';
import { Printer } from 'lucide-react';
import { PrintButton } from '@/components/PrintButton';
import { DirectPdfDownload } from '@/components/DirectPdfDownload';
import { BrochurePage1Cover } from './components/BrochurePage1Cover';
import { BrochurePage2Stats } from './components/BrochurePage2Stats';
import { BrochurePage3Benefits } from './components/BrochurePage3Benefits';
import { BrochurePage4Services } from './components/BrochurePage4Services';
import { BrochurePage5Services } from './components/BrochurePage5Services';
import { BrochurePage6Membership } from './components/BrochurePage6Membership';
import { BrochurePage7Deals } from './components/BrochurePage7Deals';
import { BrochurePage8Deals } from './components/BrochurePage8Deals';
import { BrochurePage9Contact } from './components/BrochurePage9Contact';

export default function BrochurePage() {
  const tc = useTranslations('common');

  return (
    <>
      <div className="pdf-controls">
        <DirectPdfDownload label={tc('downloadPdf')} size="sm" />
        <PrintButton label={<><Printer className="h-4 w-4" /> Print</>} />
      </div>

      <div className="pdf-container">
        <BrochurePage1Cover />
        <BrochurePage2Stats />
        <BrochurePage3Benefits />
        <BrochurePage4Services />
        <BrochurePage5Services />
        <BrochurePage6Membership />
        <BrochurePage7Deals />
        <BrochurePage8Deals />
        <BrochurePage9Contact />
      </div>
    </>
  );
}
