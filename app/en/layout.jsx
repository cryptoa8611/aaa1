'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from "react";
import HeaderEn from "../components/en/Header";
import FooterEn from "../components/en/Footer";


export default function EnglishLayout({ children }) {
  
  const pathname = usePathname();
  const [locale, setLocale] = useState('en'); // Mặc định là 'en'

  useEffect(() => {
    if (pathname) {
      const newLocale = pathname.startsWith('/vi/') ? 'vi' : 'en';
      setLocale(newLocale);
    }
  }, [pathname]);

  return (
    <html lang={locale}>
      <body>
        <HeaderEn />
        {children}
        <FooterEn />
        <a href="#" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </body>
    </html>
  );
}
