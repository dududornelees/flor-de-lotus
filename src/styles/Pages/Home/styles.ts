import styled from "styled-components";
import { shade } from "polished";

export const HomeStyle = styled.main`
    padding-top: 60px;

    /* Banner */
    .home__banner {
        background-image: url("/images/main-banner.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 420px;

        .home__banner__container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100%;

            h2 {
                font-size: 42px;
                font-weight: 500;
                color: white;
                margin-bottom: 15px;
                max-width: 700px;
                text-align: center;
            }

            button {
                background-color: ${(props) => props.theme.colors.primary};
                border-radius: ${(props) => props.theme.borderRadius};
                transition: ${(props) => props.theme.transition};
                width: 170px;
                height: 55px;
                font-size: 22px;
                color: white;
                font-weight: 500;
                cursor: pointer;
                border: none;

                &:hover {
                    background-color: ${(props) =>
                        shade(0.2, props.theme.colors.primary)};
                }
            }
        }
    }

    /* Structure */
    .home__structure {
        .home__structure__container {
            .home__structure__quality-cards {
                display: grid;
                grid-gap: 20px;
                grid-template-columns: 1fr 1fr 1fr;
                margin-bottom: 20px;
            }

            .home__structure__images {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 20px;

                img {
                    border-radius: ${(props) => props.theme.borderRadius};
                    object-fit: cover;
                    cursor: pointer;
                }
            }
        }
    }

    /* Services */
    .home__services {
        .home__services__container {
            margin-bottom: 30px;

            .home__services__service-cards {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px;
            }
        }
    }

    /* Who we are */
    .home__who-we-are {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 620px;

        .home__who-we-are__text {
            background-color: ${(props) => props.theme.colors.primary};
            padding: 0px 55px 30px 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            article {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 12px;

                p {
                    color: white;
                    font-size: 16px;
                    text-align: justify;
                }

                ul {
                    margin-left: 28px;

                    li {
                        color: white;
                        font-size: 16px;
                        text-align: justify;
                    }
                }
            }

            button {
                border-radius: ${(props) => props.theme.borderRadius};
                color: ${(props) => props.theme.colors.primary};
                transition: ${(props) => props.theme.transition};
                background-color: white;
                border: none;
                width: 140px;
                height: 30px;
                margin-top: 12px;
                font-weight: 500;
                font-size: 16px;
                cursor: pointer;

                &:hover {
                    background-color: ${shade(0.1, "#ffffff")};
                }
            }
        }

        .home__who-we-are__image {
            background-image: url("/images/who-we-are/banner.webp");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    /* Contact */
    .home__contact {
        display: flex;
        flex-direction: row-reverse;
        height: 620px;

        .home__contact__text {
            background-image: url("/images/contact/banner.webp");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 50%;

            .contact__text__location {
                margin-bottom: 30px;

                p {
                    font-size: 18px;
                    text-align: center;
                }
            }

            .contact__text__cellphone {
                font-size: 24px;
                font-weight: 500;
            }
        }

        .home__contact__form {
            background-color: ${(props) => props.theme.colors.primary};
            width: 50%;
            padding: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h3 {
                width: 470px;
                font-size: 24px;
                color: white;
                font-weight: 500;
                margin-bottom: 30px;
            }

            form {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 15px;
                width: 100%;

                input,
                textarea {
                    border-radius: ${(props) => props.theme.borderRadius};
                    border: none;
                    width: 100%;
                    padding: 14px;
                    outline: none;
                    font-size: 16px;
                    resize: none;
                }

                textarea {
                    height: 175px;
                }

                button {
                    border-radius: ${(props) => props.theme.borderRadius};
                    transition: ${(props) => props.theme.transition};
                    width: 100%;
                    padding: 14px;
                    border: none;
                    background-color: black;
                    color: white;
                    font-weight: 500;
                    font-size: 16px;
                    cursor: pointer;

                    &:hover {
                        background-color: #151515;
                    }
                }
            }
        }
    }

    /* Tablet */
    ${(props) => props.theme.media.tablet} {
        /* Banner */
        .home__banner {
            background-position-y: 0px;
        }

        /* Structure */
        .home__structure {
            .home__structure__container {
                .home__structure__quality-cards {
                    grid-template-columns: 1fr;
                }

                .home__structure__images {
                    grid-template-columns: 1fr 1fr;
                }
            }
        }

        /* Who we are */
        .home__who-we-are {
            height: 100%;
            grid-template-columns: 1fr;

            .home__who-we-are__image {
                display: none;
            }
        }

        /* Contact */
        .home__contact {
            flex-direction: column-reverse;
            height: 980px;

            .home__contact__text {
                width: 100%;
                height: 800px;

                .contact__text__cellphone {
                    font-size: 20px;
                }
            }

            .home__contact__form {
                width: 100%;

                h3 {
                    width: 100%;
                    font-size: 18px;
                }

                form {
                    width: 100%;

                    input,
                    textarea {
                        width: 100%;
                        padding: 10px;
                    }

                    button {
                        padding: 10px;
                        width: 100%;
                    }
                }
            }
        }
    }

    /* Mobile */
    ${(props) => props.theme.media.mobile} {
        /* Banner */
        .home__banner {
            height: 280px;

            .home__banner__container {
                h2 {
                    font-size: 22px;
                    margin-bottom: 10px;
                }

                button {
                    width: 140px;
                    height: 50px;
                    font-size: 18px;
                }
            }
        }

        /* Structure */
        .home__structure {
            .home__structure__container {
                .home__structure__quality-cards {
                    grid-template-columns: 1fr;
                }

                .home__structure__images {
                    grid-template-columns: 1fr;
                }
            }
        }

        /* Services */
        .home__services {
            .home__services__container {
                .home__services__service-cards {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 20px;
                }
            }
        }

        /* Who we are */
        .home__who-we-are {
            .home__who-we-are__text {
                padding: 0px 22px 22px 22px;

                article {
                    ul {
                        margin-left: 18px;
                    }
                }
            }
        }

        /* Contact */
        .home__contact {
            flex-direction: column-reverse;
            height: 900px;

            .home__contact__text {
                .contact__text__location {
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
    }
`;
