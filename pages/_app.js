import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
  </ThemeProvider>
);

export default MyApp;
