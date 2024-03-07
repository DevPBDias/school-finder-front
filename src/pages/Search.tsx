import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { SchoolContext } from '../context/SchoolContext'
import SchoolCard from '../components/SchoolCard'

function Search() {
    const { schools } = useContext(SchoolContext)

    return (
        <>
            <Header />
            <SchoolCard data={schools.items} />
            <Footer />
        </>
    )
}

export default Search