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
            .home__services__service-cards {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px;
            }
        }
    }

    /* Tablet */
    ${(props) => props.theme.media.tablet} {
        .home__banner {
            background-position-y: 0px;
        }

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
    }

    /* Mobile */
    ${(props) => props.theme.media.mobile} {
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

        .home__services {
            .home__services__container {
                .home__services__service-cards {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-gap: 20px;
                }
            }
        }
    }
`;
