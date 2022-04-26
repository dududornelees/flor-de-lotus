import styled from "styled-components";

export const HomeStyle = styled.main`
    .home__banner {
        background-image: url("/images/main-banner.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-position-y: -100px;
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
            }

            button {
                background-color: ${(props) => props.theme.colors.primary};
                border-radius: ${(props) => props.theme.borderRadius};
                width: 200px;
                height: 60px;
                font-size: 22px;
                color: white;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }

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
                }
            }
        }
    }
`;
