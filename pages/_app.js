import Script from 'next/script';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '../components';
import { NFTProvider } from '../context/NFTContext';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);

  // Fix, Next.js >= 12.5.x
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <NFTProvider>
      <ThemeProvider attribute='class'>
        <div className='dark:bg-nft-dark bg-white min-h-screen'>
          <Navbar />
          <div className='pt-65'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <Script
          src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js'
          crossorigin='anonymous'
        />
      </ThemeProvider>
    </NFTProvider>
  );
};

export default MyApp;
