import Titulo from "../Titulo/Titulo";
import * as J from './Layout.styles'

interface LayoutProps {
    titulo: string,
    children: any

}

export default function Layout(props: LayoutProps){
    return (
        <J.Container>

            <Titulo>{props.titulo}</Titulo>
            <J.SubContainer>
                {props.children}
            </J.SubContainer>
        </J.Container>
    )
}