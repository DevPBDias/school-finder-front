import { Link } from "react-router-dom"
import { styled } from "styled-components"

const CardContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    
    .link {
        width: 25em;
        height: 18em;
        border: none;
        border-radius: 8px;
        position: relative;
        margin-block: .5em;
        
        .img-bg {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;

            img {
                border-radius: 8px;
                width: 100%;
                height: 100%;   
                }
        }

    .text-content {
        position: absolute;
        z-index: 2;
        margin-left: 40%;
        width: 60%;
        height: 100%;
        background-color: #2B335B;
        opacity: 75%;
        border-radius: 8px;
        padding: .5em;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        justify-items: center;
        align-items: flex-start;
        
        h1 {
            color: #FABC2A;
            font-size: 1.5rem;
            font-weight: 600;
        }

        h2 {
            color: #FABC2A;
            font-size: 1.1rem;
        }

        p {
            color: #FABC2A;
            font-size: .9rem;
        }
    }
}
`

function SchoolCard({ data }: any) {
    return (
        <CardContainer>
            {
                data?.map((elem: any, index: number) => (
                    <Link className="link" key={index} to={`/school/${elem._id}`}>
                        <div className="img-bg">
                            <img src={elem.image} alt="school image" />
                        </div>
                        <div className="text-content">
                            <div>
                                <h1>{elem.name}</h1>
                            </div>
                            <div>
                                <p>{elem.city}</p>
                                <p>{elem.neighborhood}</p>
                            </div>
                            <div>
                                <h2>Ensinos:</h2>
                                <p>Jardim de infância: {elem.educationType.kindergarten.vacancies} vagas</p>
                                <p>Escola Fundamental I: {elem.educationType.primarySchool.vacancies} vagas</p>
                                <p>Escola Fundamental II: {elem.educationType.secondarySchool.vacancies} vagas</p>
                                <p>Ensino médio: {elem.educationType.highSchool.vacancies} vagas</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </CardContainer>
    )
}

export default SchoolCard