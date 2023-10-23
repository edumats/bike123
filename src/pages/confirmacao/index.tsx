import AdminLayout from "../components/minimalLayout"
import { Card } from "@aws-amplify/ui-react"

export default function Confirmacao() {
    return (
      <AdminLayout>
        <section className="h-screen md:mx-56 my-10">
          <Card variation="elevated" className="mx-8 px-10">
            <h1 className="text-black">Obrigado! Recebemos o seu pedido</h1>
            <p className="text-black">Para prosseguir com o pagamento, <a className="text-blue-500" href="https://sacola.pagseguro.uol.com.br/8938e1d6-70f0-4574-8d2c-b78ce6f93a45" target="_blank">clique aqui</a> </p>
          </Card>
        </section>
      </AdminLayout>
    )
}