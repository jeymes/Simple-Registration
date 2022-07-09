import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 860px;
margin-top: 20px;

.Label{
    font-size: 20px;
    margin-block: 10px;
    font-weight: 500;
}

.Input-text-Cliente{
    border-radius: 10px;
    border: 0.5px solid #111;
    outline: none;
    background-color: #4321;
    height: 45px;
    padding: 20px;
    :focus{
        background-color: white;
    }
}
.Input-number-Cliente{
    border-radius: 10px;
    border: 0.5px solid #111;
    outline: none;
    background-color: #4321;
    height: 45px;
    padding: 20px;
}
`;