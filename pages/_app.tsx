import '../styles/globals.css';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Inter, JetBrains_Mono } from 'next/font/google';
import ThemeProvider from '../context/ThemeProvider';
import { markClientNavigation } from '../utils/navigation';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Lets the homepage skip its intro when reached from another page.
  useEffect(() => {
    router.events.on('routeChangeStart', markClientNavigation);
    return () => router.events.off('routeChangeStart', markClientNavigation);
  }, [router]);

  return (
    <ThemeProvider>
      <div className={`${sans.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
