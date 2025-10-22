import { useTranslations } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('common');

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('legalNotice')}</h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <h2>Terms and Conditions</h2>
            <p>
              Welcome to Arabian Eagle International. By accessing and using our services, you agree to be bound by these terms and conditions.
            </p>

            <h3>1. Membership</h3>
            <p>
              Arabian Eagle International membership provides access to exclusive travel benefits, including hotel discounts, airport lounge access, and car rental savings.
            </p>

            <h3>2. Hotel Discounts</h3>
            <p>
              Discounts of up to 75% are available on participating hotels worldwide. Actual discounts may vary depending on location, season, and availability.
            </p>

            <h3>3. Priority Pass</h3>
            <p>
              New members receive complimentary Priority Pass for one year with their first trip. Terms and conditions apply.
            </p>

            <h3>4. Arabian Eagle MasterCard</h3>
            <p>
              The Arabian Eagle MasterCard is a prepaid debit card. You control your spending through pre-deposits. Standard MasterCard terms apply.
            </p>

            <h3>5. Privacy Policy</h3>
            <p>
              We are committed to protecting your privacy. All personal information is handled in accordance with applicable data protection laws.
            </p>

            <h3>6. Contact Information</h3>
            <p>
              For questions about our legal notice or terms of service, please contact us at info@ae4net.net.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              {t('copyright')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}




