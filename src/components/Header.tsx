import Logo from './Logo'
import styled from "styled-components";
import SearchBar from './SearchBar';
import RegisterBtn from './RegisterBtn';

const HeaderContainer = styled.header`
    width: 100%;
    height: 5.5em;
    background-color: #989EC2;

    .header_content {
      width: 70%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      margin: auto;
    }
`;

function Header() {
  return (
    <HeaderContainer>
      <div className='header_content'>
        <Logo />
        <SearchBar />
        <RegisterBtn />
      </div>
    </HeaderContainer>
  )
}

export default Header