import { useRouter } from 'next/router';

import {
  NovoServico 
 } from '../../ui-components';
import Layout from '../components/layout';

export default function Servico() {
  const router = useRouter()

  function redirectSuccessPage() {
    router.push('/confirmacao')
  }

  return (
    <Layout>
      <div className='container mx-auto md:px-40 lg:px-96'>
        <NovoServico onSuccess={redirectSuccessPage} />
      </div>
      
    </Layout>
        
  )
}