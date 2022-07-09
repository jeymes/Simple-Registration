import * as J from './Button.styles'

interface ButtonProps {
    cor?:'green' | 'blue' | 'gray'
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    const cor = props.cor ?? 'gray'
    return(
      
        <J.ContainerButton>
            <button onClick={props.onClick} className={`Button-${cor}-color`}>{props.children}</button>
        </J.ContainerButton>
      
    )
}