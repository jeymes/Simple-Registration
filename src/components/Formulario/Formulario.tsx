import * as J from './Formulario.styles'
import { useState } from 'react';
import Cliente from '../../core/Cliente/Cliente';
import Entrada from '../Entrada/Entrada';
import Button from '../Button/Button'

interface FormularioProps {
    cliente: Cliente
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
                    valor={id}/>
            ) : false}
            <Entrada
                texto='Nome'
                tipo='text'
                valor={nome}
                valorMudou={setNome}/>

            <Entrada
                texto='Idade'
                tipo='number'
                valor={idade}
                valorMudou={setIdade}/>

                <J.ContainerButton>
                    <Button cor='blue'>{id ? 'Alterar' : 'Salvar'}</Button>
                    <Button cor='gray'>Cancelar</Button>
                </J.ContainerButton>
        </div>
    )
}