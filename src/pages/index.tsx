import * as J from './Pages.styles'
import Layout from '../components/Layout/Layout'
import Tabela from '../components/Tabela/Tabela'
import Cliente from '../core/Cliente'
import Button from '../components/Button/Button'
import Formulario from '../components/Formulario/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])
  

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
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
