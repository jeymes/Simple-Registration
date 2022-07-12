import Cliente from "../../core/Cliente";
import { IconeEdicao, IconeLixo } from "../Icons/Icons";
import * as J from './Tabela.styles';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clinteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clinteExcluido

    function renderizarCabecalho() {
        return (

            <J.ContainerTr>
                <th className="Cod">Código</th>
                <th>Nome</th>
                <th>Idade</th>
                {exibirAcoes ? <th className="Aco">Ações</th> : false}
                
            </J.ContainerTr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <J.ContainerTr key={'cliente.id'}>

                    <td className={`${i % 2 === 0 ? 'Zeb' : 'Zec'}`}>{cliente.id}</td>
                    <td className={`${i % 2 === 0 ? 'Zeb' : 'Zec'}`}>{cliente.nome}</td>
                    <td className={`${i % 2 === 0 ? 'Zeb' : 'Zec'}`}>{cliente.idade}</td>
                    {exibirAcoes ? <td className={`${i % 2 === 0 ? 'Zeb' : 'Zec'}`}>{renderizarAcoes(cliente)}</td> : false}
                    
                </J.ContainerTr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <J.ContainerTd>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className="ButtonEdicao">
                        {IconeEdicao}
                    </button>
                ) : false}

                {props.clinteExcluido ? (
                    <button onClick={() => props.clinteExcluido?.(cliente)} className="ButtonLixo">
                        {IconeLixo}
                    </button>
                ) : false}


            </J.ContainerTd>
        )
    }

    return (
        <J.ContainerTable>
            <J.ContainerThead>
                {renderizarCabecalho()}
            </J.ContainerThead>
            <J.ContainerTbody>
                {renderizarDados()}
            </J.ContainerTbody>

        </J.ContainerTable>
    )
}