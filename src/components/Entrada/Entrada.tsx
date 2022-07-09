import * as J from './Entrada.styles'

interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    const tipo =props.tipo ?? 'text'
    return(
        <J.Container>
            <label className='Label'>
                {props.texto}
            </label>
            <input className={`Input-${tipo}-Cliente`}
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)} />
        </J.Container>
    )
}