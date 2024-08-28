'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function RootLayout({ children }) {

  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.origin + window.location.pathname);
    }
  }, []);

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
        <head>
        {/* Meta SEO */}
        <meta property="og:url" content={currentUrl} />
        <meta name="robots" content="index, follow" />
        {/* Favicon */}
        <link rel="icon" href="/assets/img/daces-ico.ico" type="image/x-icon" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Cabin:ital,wght@0,400..700;1,400..700&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* CSS Libraries */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/assets/lib/flaticon/font/flaticon.css" rel="stylesheet" />
        <link href="/assets/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="/assets/lib/slick/slick.css" rel="stylesheet" />
        <link href="/assets/lib/slick/slick-theme.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="/assets/css/custom.module.css" rel="stylesheet" />
           {/* JavaScript Libraries */}
           <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          strategy="beforeInteractive"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <script src="/assets/lib/easing/easing.min.js" strategy="lazyOnload" />
        <script src="/assets/lib/wow/wow.min.js" strategy="lazyOnload" />
        <script
          src="/assets/lib/owlcarousel/owl.carousel.min.js"
          strategy="lazyOnload"
        />
        <script
          src="/assets/lib/isotope/isotope.pkgd.min.js"
          strategy="lazyOnload"
        />
        <script
          src="/assets/lib/lightbox/js/lightbox.min.js"
          strategy="lazyOnload"
        />
        <script
          src="/assets/lib/waypoints/waypoints.min.js"
          strategy="lazyOnload"
        />
        <script
          src="/assets/lib/counterup/counterup.min.js"
          strategy="lazyOnload"
        />
        <script src="/assets/lib/slick/slick.min.js" strategy="lazyOnload" />

        {/* Template Javascript */}
        <script src="/assets/js/main.js" strategy="lazyOnload" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
