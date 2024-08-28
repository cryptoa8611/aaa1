'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import React from 'react'
import HeaderVi from '../components/vi/Header';
import FooterVi from '../components/vi/Footer';



export default function EnglishLayout({ children }) {
  
  const pathname = usePathname();
  const [locale, setLocale] = useState('en'); // Mặc định là 'en'

  useEffect(() => {
    if (pathname) {
      const newLocale = pathname.startsWith('/vi') ? 'vi' : 'en';
      setLocale(newLocale);
    }
  }, [pathname]);

    return (
      <html lang={locale}>
        <body>
        <HeaderVi />
          {children}
        <FooterVi />
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
        </body>
      </html>
    );
  }