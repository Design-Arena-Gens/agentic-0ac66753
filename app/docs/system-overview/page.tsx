import { cookies } from 'next/headers';
import { t, type Locale } from '@/lib/i18n';

export default function Page() {
  const localeCookie = (cookies().get('locale')?.value as Locale) || 'en';
  const locale: Locale = localeCookie === 'ar' ? 'ar' : 'en';
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{t(locale, 'system_overview')}</h1>
      <p>
        An enterprise-grade, bilingual LMS + ERP + CRM + AI platform serving learners in Sudan and worldwide. 
        Prioritizes equity, accessibility (orphans, special needs), resilience, and privacy.
      </p>
      <ul>
        <li>Adaptive learning pathways</li>
        <li>Secure certificates and verification</li>
        <li>Observability-first, multi-region resilience</li>
        <li>Privacy by design, compliant data handling</li>
      </ul>
    </article>
  );
}
