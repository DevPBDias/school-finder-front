import styled from "styled-components";

const GoRegisterBtn = styled.button`
    width: 15%;
    height: 2.2em;
    background-color: #FABC2A;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                // https://getcssscan.com/css-box-shadow-examples
    
`;

function RegisterBtn() {
  return (
    <GoRegisterBtn type='button'>Cadastrar escola</GoRegisterBtn>
  )
}

export default RegisterBtn