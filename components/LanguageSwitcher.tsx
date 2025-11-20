"use client";

import { useEffect, useState } from 'react';

function setCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
    const cookie = match ? decodeURIComponent(match[1]) : undefined;
    if (cookie === 'ar' || cookie === 'en') setLocale(cookie);
  }, []);

  const switchTo = (value: 'en' | 'ar') => {
    setLocale(value);
    setCookie('locale', value);
    if (typeof window !== 'undefined') window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      <button className={`btn-secondary ${locale==='en' ? 'opacity-100' : 'opacity-70'}`} onClick={() => switchTo('en')}>English</button>
      <button className={`btn-secondary ${locale==='ar' ? 'opacity-100' : 'opacity-70'}`} onClick={() => switchTo('ar')}>???????</button>
    </div>
  );
}
