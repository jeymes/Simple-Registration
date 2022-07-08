import styled from 'styled-components';

export const ContainerTable = styled.table`
width: 860px;
border-collapse: collapse;
/* border: 1px solid red; */

`;
export const ContainerThead = styled.thead`
background-image: radial-gradient( circle 939px at 94.7% 50%,  rgba(0,178,169,1) 0%, rgba(0,106,101,1) 76.9% );
border-radius: 10px;
`;
export const ContainerTbody = styled.tbody`
/* background-color: whitesmoke; */
border-radius: 10px;
`;
export const ContainerTr = styled.tr`

.Zec{
    background-color: #20B2AA;
    opacity: 90%;
}
.Zeb{
    background-color:#66CDAA;
    opacity: 90%;

}


th{
padding: 10px;
color: white;
text-align: left;
}
.Cod{
    border-top-left-radius: 10px;
}
.Aco{
    border-top-right-radius: 10px;
    text-align: center;
}
td{
padding: 10px;
padding-left: 10px;
color: black;
text-align: left;
}
`;

export const ContainerTd = styled.td`
display: flex;
justify-content: center;
align-items: center;
/* border: 1px solid red; */

button{
    width: 35px;
    border: none;
    background-color: transparent;
}

.ButtonEdicao{
    color: green;
    padding: 5px;


    :hover{
        background-color: white;
        border-radius: 100%;

    }
}
.ButtonLixo{
    color: red;
    padding: 5px;


    :hover{
        background-color: white;
        border-radius: 100%;  
    }
}
`;