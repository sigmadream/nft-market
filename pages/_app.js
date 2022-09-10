import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '../components';

import '../styles/globals.css';


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute='class'>
    <div className='dark:bf-nft-dark bg-white-min-h-screen'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/9526206854.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
