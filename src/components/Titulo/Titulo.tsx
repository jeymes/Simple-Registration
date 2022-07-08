import * as J from './Titulo.styles'
export default function Titulo(props){
    return(
        <J.Container>
            <J.Title>{props.children}</J.Title>
            <hr />
        </J.Container>
    )
}