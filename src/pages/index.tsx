import dynamic from "next/dynamic";
import Layout from "./components/layout";
import {
  Bike123HandsPros,
  Bike123SellingPoints,
  Bike123WhatIsIt,
  Bike123LargestNetwork,
  Bike123Media,
  Bike123CustomerTestimonials,
} from '../ui-components';

const DynamicOurServices = dynamic(() => import('../ui-components').then((module) => module.Bike123OurServices), {
  loading: () => <p>Carregando serviços...</p>
})

const DynamicOtherServices = dynamic(() => import('../ui-components').then((module) => module.Bike123OtherServices), {
  loading: () => <p>Carregando outros serviços...</p>
})

const DynamicServicoCustom = dynamic(() => import('../ui-components').then(module => module.ServicoCustomizadoCreateForm), {
  loading: () => <p>Carregando formulário...</p>
})

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
        <DynamicOurServices width={'100%'} id="servicos" />
        <DynamicOtherServices width={'100%'} />
        <Bike123LargestNetwork width={'100%'} />
        <Bike123Media width={'100%'} id="midia" overrides={mediaSectionCustomize} />
        <DynamicServicoCustom width={'100%'} overrides={contactFormCustomize} />
      </div>
    </Layout>
  )
}
