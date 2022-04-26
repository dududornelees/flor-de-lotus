import Head from "next/head";
import Image from "next/image";
import Divider from "../components/Divider/Divider";
import QualityCard from "../components/Cards/QualityCard/QualityCard";

// Styles
import { HomeStyle } from "../styles/Pages/Home/styles";
import { Container } from "../styles/GlobalStyle";

// Icons
import { AiFillHome } from "react-icons/ai";

const Home = () => {
    const images = require("../services/images.json");

    return (
        <HomeStyle>
            <Head>
                <title>Flor de Lótus - Home</title>
                <meta name="description" content="Geriatria - Flor de Lótus" />
            </Head>

            <section className="home__banner">
                <Container className="home__banner__container">
                    <h2>
                        Proporcionando saúde e bem estar
                        <br />
                        para quem sempre cuidou de você.
                    </h2>

                    <button>Cuidado 24h</button>
                </Container>
            </section>

            <section className="home__structure">
                <Container className="home__structure__container">
                    <Divider title="ESTRUTURA" />

                    <div className="home__structure__quality-cards">
                        <QualityCard
                            icon={<AiFillHome />}
                            title="Qualidade número 1"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the."
                        />

                        <QualityCard
                            icon={<AiFillHome />}
                            title="Qualidade número 2"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the."
                        />

                        <QualityCard
                            icon={<AiFillHome />}
                            title="Qualidade número 3"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the."
                        />
                    </div>

                    <div className="home__structure__images">
                        {images.map((image: Image, idx: number) => (
                            <Image
                                key={idx}
                                src={image.path}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </HomeStyle>
    );
};

export default Home;
