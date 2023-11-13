import { useRouter } from 'next/router';
import {
  NovoServico, 
 } from '../../ui-components';
import AdminLayout from '../components/minimalLayout';

export default function Servico() {
  const router = useRouter()

  function redirectSuccessPage() {
    const { typeOfService } = router.query;
    router.push(`/confirmacao?typeOfService=${typeOfService}`)
  }

  return (
    <AdminLayout>
      <div className='container mx-auto md:px-40 lg:px-96'>
        <NovoServico onSuccess={redirectSuccessPage} />
      </div>
      
    </AdminLayout>
        
  )
}