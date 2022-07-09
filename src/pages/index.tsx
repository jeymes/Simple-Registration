import * as J from './Pages.styles'
import Layout from '../components/Layout/Layout'
import Tabela from '../components/Tabela/Tabela'
import Cliente from '../core/Cliente/Cliente'
import Button from '../components/Button/Button'
import Formulario from '../components/Formulario/Formulario'
import { useState } from 'react'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Rosa', 20, '2'),
    new Cliente('Pedro', 44, '3'),
    new Cliente('Joao', 52, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <J.Container>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <J.ButtonContainer>
              <Button 
              cor='green'
              onClick={() => setVisivel('form')}>Novo Cliente</Button>
            </J.ButtonContainer>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clinteExcluido={clienteExcluido}
            />
          </>
        ) : <Formulario cliente={clientes[0]}
        clienteMudou={salvarCliente}
        cancelado={() => setVisivel('tabela')}
         /> }

        
      </Layout>
    </J.Container>
  )
}
