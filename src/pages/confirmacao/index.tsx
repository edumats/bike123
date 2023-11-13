import AdminLayout from "../components/minimalLayout";
import { Card } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

interface PurchaseLinks {
  [key: string]: string
}

export default function Confirmacao() {
  const router = useRouter();
  const { typeOfService } = router.query;

  let purchaseLink;

  switch(typeOfService) {
    case 'montagemBikeNova':
      purchaseLink = 'https://pag.ae/7ZY2bDMsR'
      break;
    case 'montagemBikeErgo':
      purchaseLink = 'https://pag.ae/7ZY2eYBpr';
      break;
    case 'revisaoExpert':
      purchaseLink = 'https://pag.ae/7ZY2ideEt';
      break;
    case 'pneuFurado':
      purchaseLink = 'https://pag.ae/7ZY2mBM-o';
      break;
    case 'pneuFuradoEletrica':
      purchaseLink = 'https://pag.ae/7ZY2nAfcP';
      break;
    case 'desmontaBike':
      purchaseLink = 'https://pag.ae/7ZY2uV8G3';
      break;
  }

  return (
    <AdminLayout>
      <section className="h-screen md:mx-56 my-10">
        <Card variation="elevated" className="mx-8 px-10">
          <h1 className="text-black">Obrigado! Recebemos o seu pedido</h1>
          <p className="text-black">
            Para prosseguir com o pagamento, <a className="text-blue-500" href={purchaseLink} target="_blank">clique aqui</a>
          </p>
        </Card>
      </section>
    </AdminLayout>
  )
}