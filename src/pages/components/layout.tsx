import "@aws-amplify/ui-react/styles.css";

import {
  Bike123NavBar,
  Bike123Footer
} from '../../ui-components';

export default function Layout({ children }) {
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
      <Bike123NavBar width={'100%'} overrides={navBarCustomization}/>
      {children}
      <Bike123Footer width={'100%'} />
    </>
  )
}