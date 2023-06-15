import styled from "styled-components";

const StyledForm  = styled.div`

    width: 500px;
    height: 100vh;
    display: flex;
    flex-flow: column ;
    justify-content: center;
    align-items: center;

`;

const StyledLabel = styled.label`

    width: 381px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px;
    
`;
const StyledInput = styled.input`

    width: 75%;
    height: 50px;
    border: 1px solid #DFDEE0;
    border-radius: 8px;

`;

const StyledInputM = styled.input`

    display:flex;
    width: 40%;
    height: 50px;
    border: 1px solid #DFDEE0;
    border-radius: 8px;
    margin-left: 50px;

`;

const StyledBtn = styled.button`

    background: #21092F;
    border-radius: 8px;
    color: white;
    padding: 20px 144px;
    margin-top: 40px;

`;

const StyledConInp = styled.div `

    width: 500px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-items: center;

`;

export {StyledForm , StyledLabel, StyledInput, StyledBtn , StyledConInp , StyledInputM };