import Head from "next/head";
import Image from "next/image";
import Divider from "../components/Divider/Divider";
import QualityCard from "../components/Cards/QualityCard/QualityCard";
import ServiceCard from "../components/Cards/ServiceCard/ServiceCard";

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
                        Proporcionando saúde e bem estar para quem sempre cuidou
                        de você.
                    </h2>

                    <button type="button">Cuidado 24h</button>
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

            <section className="home__services">
                <Container className="home__services__container">
                    <Divider title="SERVIÇOS" />

                    <div className="home__services__service-cards">
                        <ServiceCard
                            title="Serviço número 1"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy."
                        />

                        <ServiceCard
                            title="Serviço número 2"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy."
                        />

                        <ServiceCard
                            title="Serviço número 3"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy."
                        />

                        <ServiceCard
                            title="Serviço número 4"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy."
                        />

                        <ServiceCard
                            title="Serviço número 5"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy."
                        />

                        <ServiceCard
                            title="Serviço número 6"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy."
                        />
                    </div>
                </Container>
            </section>

            <section className="home__who-we-are">
                <div className="home__who-we-are__text">
                    <Divider title="QUEM SOMOS" white />

                    <article>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s.
                            is simply dummy text of the printing and typesetting
                            industry.
                        </p>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s.
                            is simply dummy text of the printing and typesetting
                            industry.
                        </p>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s.
                            is simply dummy text of the printing and typesetting
                            industry.
                        </p>

                        <ul>
                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>

                            <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                            </li>
                        </ul>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s.
                            is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </article>

                    <button type="button">Veja mais</button>
                </div>

                <div className="home__who-we-are__image"></div>
            </section>

            <section className="home__contact">
                <div className="home__contact__form">
                    <h3>
                        Envie suas dúvidas e solicite maiores informações.
                        Estamos a sua disposição.
                    </h3>

                    <form>
                        <input placeholder="Nome: *" type="text" />
                        <input placeholder="Telefone: *" type="text" />
                        <input placeholder="Email:" type="email" />
                        <textarea placeholder="Mensagem:"></textarea>

                        <button type="button">Enviar</button>
                    </form>
                </div>

                <div className="home__contact__text">
                    <Divider title="CONTATO" />

                    <div className="contact__text__location">
                        <p>Cuidando em Casa Hotelaria Assistida</p>
                        <p>Rua Ildefonso Simões Lopes, 50</p>
                        <p>Bairro Três Figueiras - Porto Alegre/RS</p>
                        <p>Estacionamento próprio.</p>
                    </div>

                    <h3 className="contact__text__cellphone">
                        (51) 99999-9999 & (51) 99999-999
                    </h3>
                </div>
            </section>
        </HomeStyle>
    );
};

export default Home;
