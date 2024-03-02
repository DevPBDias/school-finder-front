import NavigateBtn from './NavigateBtn'
import { arrayCardTexts } from '../helpers/contentText'
import { styled } from 'styled-components';

const HomeCardContainer = styled.section`
    width: 70%;
    height: 32em;
    margin: 2em auto;
    border: none;
    border-radius: 8px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    justify-items: center;

    .card_container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        justify-items: center;
        width: 30%;
        height: 100%;
        background-color: #CEF9F2;
        padding: 2em;
        border-radius: 8px;

        div {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            justify-items: center;
            height: 100%;
        }

        h3 {
            font-size: 1.3rem;
            font-weight: 600;
        }

        p {
            font-size: 0.85rem;
        }

        button {
            width: 10em;
            height: 2em;
            background-color: #FABC2A;
            font-size: .85rem;
            font-weight: 600;
            border-radius: 8px;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    // https://getcssscan.com/css-box-shadow-examples
        }
    }
`;

function HomeCard() {
    return (
        <HomeCardContainer>
            {
                arrayCardTexts.map((elem: any) => (
                    <div
                    className='card_container'
                    key={elem.routeBtn}>
                        <div>
                            <h3>{elem.title}</h3>
                            {elem.text.map((item: string, index: number) => <p key={index}>{item}</p>)}
                            <NavigateBtn route={elem.routeBtn} text={elem.btnText} />
                        </div>
                    </div>
                ))
            }
        </HomeCardContainer>
    )
}

export default HomeCard