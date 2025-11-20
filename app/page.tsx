import { cookies } from 'next/headers';
import Link from 'next/link';
import { t, type Locale } from '@/lib/i18n';

export default function Home() {
  const localeCookie = (cookies().get('locale')?.value as Locale) || 'en';
  const locale: Locale = localeCookie === 'ar' ? 'ar' : 'en';

  const toc = [
    { href: '/docs/system-overview', key: 'system_overview' },
    { href: '/docs/architecture', key: 'architecture' },
    { href: '/docs/data-models', key: 'data_models' },
    { href: '/docs/api-contracts', key: 'api_contracts' },
    { href: '/docs/ai-layer', key: 'ai_layer' },
    { href: '/docs/cms', key: 'cms' },
    { href: '/docs/crm', key: 'crm' },
    { href: '/docs/certificates', key: 'certificates' },
    { href: '/docs/security', key: 'security' },
    { href: '/docs/anti-cheat', key: 'anti_cheat' },
    { href: '/docs/offline', key: 'offline' },
    { href: '/docs/media', key: 'media' },
  ];

  return (
    <div className="space-y-8">
      <div className="card">
        <div className="card-header">{t(locale, 'toc')}</div>
        <div className="card-body grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {toc.map((item) => (
            <Link key={item.href} href={item.href} className="card hover:outline outline-1 outline-brand-500">
              <div className="card-body text-lg font-semibold">{t(locale, item.key)}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">Demo: OpenAPI Summary</div>
          <div className="card-body">
            <Link className="btn" href="/docs/api-contracts">{t(locale, 'view_docs')}</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Demo: Certificate Verify</div>
          <div className="card-body">
            <Link className="btn" href="/tools/cert-verify">Open Tool</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
