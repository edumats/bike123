import Layout from "./components/layout";
import {
  Bike123HandsPros,
  Bike123SellingPoints,
  Bike123WhatIsIt,
  Bike123OurServices,
  Bike123OtherServices,
  Bike123LargestNetwork,
  Bike123Media,
  Bike123CustomerTestimonials,
  ServicoCustomizadoCreateFormCustom,
} from '../ui-components';

export default function Home() {
  const pointerCursor = {style: {cursor: 'pointer'}}
  const mediaSectionCustomize = {
    'Reference Container': {wrap: "wrap"},
    'bike-e-legal 1': pointerCursor,
    'brasil-cycle-fair 1': pointerCursor,
    'catraca-livre 1': pointerCursor,
    'uol 1': pointerCursor,
    'pedal-logo 1': pointerCursor,
    'transporte-ativo 1': pointerCursor,
    'vamos-pedalar 1': pointerCursor,
  }

  const contactFormCustomize = {
    'ServicoCustomizadoCreateForm': {id: 'contato'}
  }
  
  return (
    <Layout>
      <div className="font-roboto">
        <Bike123HandsPros width={'100%'} />
        <Bike123WhatIsIt width={'100%'} id="sobre"/>
        <Bike123SellingPoints width={'100%'} />
        <Bike123CustomerTestimonials width={'100%'} id="clientes" />
        <Bike123OurServices width={'100%'} id="servicos" />
        <Bike123OtherServices width={'100%'} />
        <Bike123LargestNetwork width={'100%'} />
        <Bike123Media width={'100%'} id="midia" overrides={mediaSectionCustomize} />
        <ServicoCustomizadoCreateFormCustom width={'100%'} overrides={contactFormCustomize} />
      </div>
    </Layout>
  )
}
