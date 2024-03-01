import logo from '../assets/schoolLogo.png'
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 5em;
    height: 5em;
`;

const SchoolLogo = styled.img`
    width: 100%;
    height: 100%;
`;

function Logo() {
    return (
        <LogoContainer>
            <SchoolLogo src={logo} alt="logo website" />
        </LogoContainer>
    )
}

export default Logo