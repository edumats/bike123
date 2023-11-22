import "@aws-amplify/ui-react/styles.css";

import React, { ReactNode } from 'react';
import Head from "next/head";

import {
  Bike123NavBar,
  Bike123Footer
} from '../../ui-components';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navBarCustomization = {
    'Bike123': {
      style: {cursor: 'pointer'}
    },
    'Sobre': {
      style: {cursor: 'pointer'}
    },
    'Products': {
      style: {cursor: 'pointer'}
    },
    'Pricing': {
      style: {cursor: 'pointer'}
    },
    'Contact': {
      style: {cursor: 'pointer'}
    },
    'Contato': {
      style: {cursor: 'pointer'}
    }
  }

  return (
    <>
      <Head>
        <title>Sua bicicleta nas mãos de especialistas</title>
        <meta name='description' content="Consertos e montagens de bicicleta à domicílio em todo Brasil. Temos a maior rede de mecânicos de bicicleta profissionais." />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Bike123NavBar width={'100%'} overrides={navBarCustomization}/>
      {children}
      <Bike123Footer width={'100%'} />
    </>
  )
}

export default Layout;