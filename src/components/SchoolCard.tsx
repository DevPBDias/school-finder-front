import { styled } from "styled-components"

const CardContent = styled.div`
    width: 28em;
    height: 18em;
    border: none;
    border-radius: 8px;
    position: relative;
    margin: 1em auto;

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
        margin-left: 50%;
        width: 50%;
        height: 100%;
        background-color: #2B335B;
        opacity: 80%;
    border-radius: 8px;
    padding: 1em;
    display: flex;
    flex-flow: column nowrap;
    gap: .2em;

        
        h1 {
            color: #FABC2A;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 2em;
        }

        h2 {
            color: #FABC2A;
            font-size: 1rem;
            margin-top: 2em;
        }

        p {
            color: #FABC2A;
            font-size: .8rem;
        }
    }
`


function SchoolCards({ data }: any) {
    const getSchools = data?.map((elem: any) => elem)

    return (
        <>
            {
                getSchools?.map((elem: any, index: number) => (
                    <CardContent key={index}>
                        <div className="img-bg">
                            <img src={elem.image} alt="school image" />
                        </div>
                        <div className="text-content">
                            <h1>{elem.name}</h1>
                            <p>{elem.city}</p>
                            <p>{elem.neighborhood}</p>
                            <h2>Ensinos:</h2>
                            <p>Jardim de infância: {elem.educationType.kindergarten.vacancies} vagas</p>
                            <p>Escola Fundamental I: {elem.educationType.primarySchool.vacancies} vagas</p>
                            <p>Escola Fundamental II: {elem.educationType.secondarySchool.vacancies} vagas</p>
                            <p>Ensino médio: {elem.educationType.highSchool.vacancies} vagas</p>
                        </div>
                    </CardContent>
                ))
            }
        </>
    )
}

export default SchoolCards