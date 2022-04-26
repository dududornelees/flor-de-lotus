import styled from "styled-components";

export const HomeStyle = styled.main`
    .home__banner {
        background-image: url("/images/main-banner.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-position-y: -140px;
        background-size: cover;
        height: 480px;

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
`;
