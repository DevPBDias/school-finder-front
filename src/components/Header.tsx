import Logo from './Logo'
import styled from "styled-components";
import SearchBar from './SearchBar';
import NavigateBtn from './NavigateBtn';

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

    button {
      width: 15%;
      height: 2.2em;
      background-color: #FABC2A;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 8px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
              // https://getcssscan.com/css-box-shadow-examples
      }
    }
`;

function Header() {
  return (
    <HeaderContainer>
      <div className='header_content'>
        <Logo />
        <SearchBar />
        <NavigateBtn route='search' text='Cadastrar escola' />
      </div>
    </HeaderContainer>
  )
}

export default Header