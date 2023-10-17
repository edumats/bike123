import '@/styles/globals.css';

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { studioTheme } from '@/ui-components';

import '@aws-amplify/ui-react/styles.css';

import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

Amplify.configure(awsconfig)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      <main className={`${roboto.variable} font-sans h-screen`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
    
    
  )
}
