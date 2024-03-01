import kidsImage from '../assets/kids.png'
import styled from "styled-components";
import NavigateBtn from './NavigateBtn';

const GradientContainer = styled.section`
    width: 70%;
    height: 20em;
    margin: 2em auto;
    border: none;
    border-radius: 8px;
    background: linear-gradient(to left, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: relative;

    .kids_container {
        width: 40%;
        height: 90%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .text_btn_container {
        width: 55%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        justify-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;

        h1 {
            width: 80%;
            color: #CDD3CE;
            font-size: 2.4em;
            font-weight: 600;
        }

        button {
            width: 30%;
            height: 2.2em;
            background-color: #FABC2A;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 8px;
            border: none;
            margin-left: 50%;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    // https://getcssscan.com/css-box-shadow-examples
        }

    }

`;

function GradientImage() {
    return (
        <GradientContainer>
            <div className='kids_container'>
                <img src={kidsImage} alt="little students" />
            </div>
            <div className='text_btn_container'>
                <h1>Seus filhos merecem estudar na melhor escola.</h1>
                <NavigateBtn route='search' text='Encontrar escola' />
            </div>
        </GradientContainer>
    )
}

export default GradientImage