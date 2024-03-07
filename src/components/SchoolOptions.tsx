import { useContext } from 'react'
import { SchoolContext } from '../context/SchoolContext'
import SliderSchoolCards from './SliderSchoolCards'
import { useNavigate } from 'react-router-dom'
import { styled } from "styled-components"

const OptionsContainer = styled.section`
    width: 70%;
    height: 25em;
    border: none;
    border-radius: 8px;
    margin: 2em auto;
    background-color: #CEF9F2;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: flex-start;
    justify-items: center;

    .title-options {
        margin-left: 1.5em;
        margin-top: .5em;
    }

    
    .div-btn-txt {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
        justify-items: center;
        width: 95%;
        margin: 1em 0 0 0;
        
        h4 {
            margin-left: 2.2em;
        }

        button {
            width: 18%;
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
`


function SchoolOptions() {
    const { schools } = useContext(SchoolContext)
    const navigage = useNavigate()

    return (
        <OptionsContainer>
            <h1 className='title-options'>Escolas perto de você</h1>
            <div className='div-btn-txt'>
                <h4>{schools.total} escolas para decidir onde seu filho vai estudar</h4>
                <button
                    type='button'
                    onClick={() => navigage('/search')}
                >
                    Encontrar escola
                </button>
            </div>
            <SliderSchoolCards data={schools.items} />
        </OptionsContainer>
    )
}

export default SchoolOptions