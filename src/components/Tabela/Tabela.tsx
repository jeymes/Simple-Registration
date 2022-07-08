import Cliente from "../../core/Cliente/Cliente";
import * as J from './Tabela.styles';

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props) {

    function renderizarCabecalho() {
        return (
            
                <J.ContainerTr>
                    <th className="Cod">Código</th>
                    <th>Nome</th>
                    <th className="Idad">Idade</th>
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
                  
                </J.ContainerTr>
            )
        })
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