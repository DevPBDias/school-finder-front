import { useContext } from 'react'
import { SchoolContext } from '../context/SchoolContext'
import SchoolCard from './SchoolCard'
import { useNavigate } from 'react-router-dom'
import { styled } from "styled-components"

const OptionsContainer = styled.section`
    width: 70%;
    height: 30em;
    border: none;
    border-radius: 8px;
    margin: 1em auto;
    background-color: #CEF9F2;

`


function SchoolOptions() {
    const { schools } = useContext(SchoolContext)
    const navigage = useNavigate()

    return (
        <OptionsContainer>
            <h1>Escolas perto de você</h1>
            <div>
                <h4>{schools.total} escolas para decidir onde seu filho vai estudar</h4>
                <button
                    type='button'
                    onClick={() => navigage('/search')}
                >
                    Encontrar escola
                </button>
            </div>
            <SchoolCard data={schools.items} />
        </OptionsContainer>
    )
}

export default SchoolOptions