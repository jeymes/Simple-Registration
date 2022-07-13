import * as J from './Formulario.styles'
import { useState } from 'react';
import Cliente from '../../core/Cliente';
import Entrada from '../Entrada/Entrada';
import Button from '../Button/Button'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (clinete: Cliente) => void
    cancelado?: () => void
}
export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    texto='Código'
                    valor={id} />
            ) : false}
            <Entrada
                texto='Nome'
                tipo='text'
                valor={nome}
                valorMudou={setNome} />

            <Entrada
                texto='Idade'
                tipo='number'
                valor={idade}
                valorMudou={setIdade} />

            <J.ContainerButton>
                <Button
                    cor='blue'
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}</Button>

                <Button
                    cor='gray'
                    onClick={props.cancelado}>Cancelar</Button>
            </J.ContainerButton>
        </div>
    )
}