import styled from 'styled-components'

export const ContainerButton = styled.div`

button{
background-color: green;
border: none;
padding: 15px;
color: white;
font-size: 16px;
font-weight: 900;
border-radius: 10px;

:hover{
    border: rgba(0,178,169,1) ;
    box-shadow: 0.6px 0.6px 3.5px 3px rgba(0,178,169,1) ;
}
}
.Button-green-color{
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% );
}
.Button-blue-color{
    background-image: linear-gradient( 111.5deg, rgba(20,100,196,1) 0.4%, rgba(33,152,214,1) 100.2% );
}
.Button-gray-color{
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
}
`;