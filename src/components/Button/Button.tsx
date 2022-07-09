import * as J from './Button.styles'

interface ButtonProps {
    cor?:'green' | 'blue' | 'gray'
    children: any
}

export default function Button(props: ButtonProps){
    const cor = props.cor ?? 'gray'
    return(
      
        <J.ContainerButton>
            <button className={`Button-${cor}-color`}>{props.children}</button>
        </J.ContainerButton>
      
    )
}