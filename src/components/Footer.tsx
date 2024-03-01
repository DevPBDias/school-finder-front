import LinkFooter from './LinkFooter'
import Logo from './Logo'
import facebookIcon from '../assets/Facebook.png'
import youtubeIcon from '../assets/YouTube.png'
import whatsappIcon from '../assets/WhatsApp.png'
import instagramIcon from '../assets/Instagram Circle.png'
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 15em;
    background-color: #989EC2;

    .footer_content {
        width: 70%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        justify-items: center;
        align-items: flex-start;
        margin: auto;
        gap: .5em;
    }

    .nav_icons {
        width: 100%;

        img {
            width: 1.8em;
            height: 1.8em;
        }
    }

    .nav_links {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        gap: 10%;

        nav {
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-items: center;
            gap: .2em;

            h3 {
                font-size: 1em;
                font-weight: 600;
            }

            a {
                text-decoration: none;
                font-size: .8em;
            }
        }
    }

    span {
        margin: auto;
        font-size: 0.8em;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <div className='footer_content'>
                <Logo />
                <section className='nav_links'>
                    <nav>
                        <h3>Instituição</h3>
                        <LinkFooter route='who' text='Quem somos?' />
                        <LinkFooter route='how' text='Como funciona?' />
                        <LinkFooter route='advantages' text='Vantagens' />
                    </nav>
                    <nav>
                        <h3>Ferramentas</h3>
                        <LinkFooter route='register' text='Cadastrar escola' />
                    </nav>
                    <nav>
                        <h3>Buscar por:</h3>
                        <LinkFooter route='search' text='Nome' />
                        <LinkFooter route='who' text='Cidade ou bairro' />
                        <LinkFooter route='who' text='Tipo de escola' />
                    </nav>
                </section>
                <section className='nav_icons'>
                    <img src={facebookIcon} alt="facebook Icon" />
                    <img src={youtubeIcon} alt="youtube Icon" />
                    <img src={whatsappIcon} alt="whatsapp Icon" />
                    <img src={instagramIcon} alt="instagram Icon" />
                </section>
                <span>&copy; 2024 - UX Design and Web Dev Pbdias</span>
            </div>
        </FooterContainer>
    )
}

export default Footer