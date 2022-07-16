import * as J from './Pages.styles'
import Layout from '../components/Layout/Layout'
import Tabela from '../components/Tabela/Tabela'
import Button from '../components/Button/Button'
import Formulario from '../components/Formulario/Formulario'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    tabelaVisivel,
    cliente,
    clientes,
    novoCliente,
    exibirTabela,
    clienteSelecionado,
    clienteExcluido,
    salvarCliente,

     } = useClientes()

  return (
    <J.Container>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <J.ButtonContainer>
              <Button
                cor='green'
                onClick={novoCliente}>Novo Cliente</Button>
            </J.ButtonContainer>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clinteExcluido={clienteExcluido}
            />
          </>
        ) : <Formulario cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={exibirTabela}
        />}


      </Layout>
    </J.Container>
  )
}
