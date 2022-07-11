import '../styles/globals.css';
import '../styles/timeline.scss';

import type { AppProps } from 'next/app';
import ThemeProvider from '../context/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
