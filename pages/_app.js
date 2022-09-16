import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute='class'>
    <div className='dark:bf-nft-dark bg-white-min-h-screen'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
