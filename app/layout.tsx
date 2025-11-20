import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { t, type Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Agentic LMS ? ERP ? CRM ? AI',
  description: 'Bilingual learning and opportunity platform with AI orchestration',
  manifest: '/manifest.json'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const localeCookie = (cookieStore.get('locale')?.value as Locale) || 'en';
  const locale: Locale = localeCookie === 'ar' ? 'ar' : 'en';

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <header className="border-b border-white/10">
          <div className="container py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-brand-600 grid place-items-center font-bold">A</div>
              <div>
                <div className="font-bold text-lg">{t(locale, 'app_title')}</div>
                <div className="text-white/70 text-sm">{t(locale, 'tagline')}</div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </header>
        <main className="container py-8 space-y-8">{children}</main>
        <footer className="container py-10 text-white/60 text-sm">
          ? {new Date().getFullYear()} Agentic Platform. All rights reserved.
        </footer>
        <script dangerouslySetInnerHTML={{__html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{})})}`}} />
      </body>
    </html>
  );
}
