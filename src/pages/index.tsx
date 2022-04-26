// Styles
import { HomeStyle } from "../styles/Pages/Home/styles";
import { Container } from "../styles/GlobalStyle";

const Home = () => {
    return (
        <HomeStyle>
            <div className="home__banner">
                <Container className="home__banner__container">
                    <h2>
                        Proporcionando saúde e bem estar
                        <br />
                        para quem sempre cuidou de você.
                    </h2>

                    <button>Cuidado 24h</button>
                </Container>
            </div>
        </HomeStyle>
    );
};

export default Home;
