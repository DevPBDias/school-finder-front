import { styled } from "styled-components"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    width: 90%;
    margin: auto;
    
    .link {
        width: 15em;
        height: 14em;
        border: none;
        border-radius: 8px;
        position: relative;

        
        .img-bg {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            padding: .3em;

            img {
                border-radius: 8px;
                width: 100%;
                height: 100%;   
                }
        }

    .text-content {
        position: absolute;
        z-index: 2;
        top: .3em;
        right: .3em;
        margin-left: 50%;
        width: 50%;
        height: 95%;
        background-color: #2B335B;
        opacity: 80%;
        border-radius: 8px;
        padding: .5em;
        display: flex;
        flex-flow: column nowrap;
        gap: .2em;
        
        h1 {
            color: #FABC2A;
            font-size: .9rem;
            font-weight: 600;
            margin-bottom: 1em;
        }

        h2 {
            color: #FABC2A;
            font-size: .85rem;
            margin-top: 1em;
        }

        p {
            color: #FABC2A;
            font-size: .75rem;
        }
    }
}
`

function SliderSchoolCards({ data }: any) {
    const getSchools = data?.map((elem: any) => elem)

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function (index: any) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
            <CardContainer className="div-slider">
                <Slider {...settings}>
                    {
                        getSchools?.map((elem: any, index: number) => (
                            <Link className="link" key={index} to={`/school/${elem._id}`}>
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
                            </Link>
                        ))
                    }
                </Slider>
            </CardContainer>
    )
}

export default SliderSchoolCards