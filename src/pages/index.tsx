import * as J from './Pages.styles'
import Layout from '../components/Layout/Layout'
import Tabela from '../components/Tabela/Tabela'
import Cliente from '../core/Cliente/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Rosa', 20, '2'),
    new Cliente('Pedro', 44, '3'),
    new Cliente('Pedro', 44, '4')
  ]
  return (
    <J.Container>
    <Layout titulo="Cadastro Simples">
      <Tabela clientes={clientes}></Tabela>
    </Layout>
  </J.Container>
  )
}
