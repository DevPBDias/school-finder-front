import searchIcon from '../assets/searchIcon.png'
import styled from "styled-components";

const SearchBarContainer = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      margin: auto;
      position: relative;
      width: 50%;

    img {
        width: 1.5em;
        height: 1.5em;
        position: absolute;
        z-index: 2;
        left: 94%;
    }

    input {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 2.5em;
        border-radius: 8px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &::placeholder {
            padding-left: 1em;
            font-size: 1rem;
        }
    }
`;

function SearchBar() {
    const handleSearch = () => {
        console.log('clickou');

    }

    return (
        <SearchBarContainer>
            <input type="text" placeholder='Digite o nome da escola' />
            <img onClick={handleSearch} src={searchIcon} alt="search icon" />
        </SearchBarContainer>
    )
}

export default SearchBar