import { useContext } from 'react'
import { SchoolContext } from '../context/SchoolContext'
import SchoolCard from './SchoolCard'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SchoolOptions() {
    const { schools } = useContext(SchoolContext)
    const navigage = useNavigate()

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
        <section>
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
            <Slider {...settings}>
                <div>
                    <SchoolCard data={schools.items} />
                </div>
            </Slider>
        </section>
    )
}

export default SchoolOptions