import { ReactNode } from "react"
import Head from "next/head";

import { Bike123AdminNavBar, Bike123Footer } from "@/ui-components"

const AdminLayout = ({ children }: {children: ReactNode}) => {
  // Styling overrides for Admin Navbar
  const navBarOverrides = {
    'Bike123AdminNavBar': {
      boxShadow: 'none',
    },
    'Bike123': {
      style: { cursor: 'pointer'},
    },
    'Button': {
      isDisabled: true,
      display: 'none'
    }
  }
  return (
    <>
      <Head>
        <title>Sua bicicleta nas mãos de especialistas</title>
        <meta name='description' content="Economize tempo e pedale mais. Temos a maior rede de mecânicos de bicicleta e fazemos atendimentos à domicílio em todo Brasil" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Bike123AdminNavBar width={'100%'} overrides={navBarOverrides} />
      {children}
      <Bike123Footer width={'100%'} />
    </>
  )
    
}

export default AdminLayout;