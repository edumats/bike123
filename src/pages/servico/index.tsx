import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AdminLayout from '../components/minimalLayout';

const DynamicNovoServico = dynamic(() => import('../../ui-components').then((module) => module.NovoServico), {
  loading: () => <p>Loading...</p>,
})

export default function Servico() {
  const router = useRouter()

  function redirectSuccessPage() {
    const { typeOfService } = router.query;
    router.push(`/confirmacao?typeOfService=${typeOfService}`)
  }

  return (
    <AdminLayout>
      <div className='container mx-auto md:px-40 lg:px-96'>
        <DynamicNovoServico onSuccess={redirectSuccessPage} />
      </div>
    </AdminLayout>
        
  )
}