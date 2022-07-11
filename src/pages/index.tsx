import * as J from './Pages.styles'
import Layout from '../components/Layout/Layout'
import Tabela from '../components/Tabela/Tabela'
import Cliente from '../core/Cliente/Cliente'
import Button from '../components/Button/Button'
import Formulario from '../components/Formulario/Formulario'
import { useState } from 'react'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Rosa', 20, '2'),
    new Cliente('Pedro', 44, '3'),
    new Cliente('Joao', 52, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <J.Container>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
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
        cancelado={() => setVisivel('tabela')}
         /> }

        
      </Layout>
    </J.Container>
  )
}
