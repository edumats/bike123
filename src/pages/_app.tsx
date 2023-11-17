import '@/styles/globals.css';

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { studioTheme } from '@/ui-components';

import '@aws-amplify/ui-react/styles.css';

import type { AppProps } from 'next/app'

Amplify.configure(awsconfig)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      <main className="font-sans h-screen">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
    
    
  )
}
