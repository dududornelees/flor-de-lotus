import styled from "styled-components";

export const HeaderStyle = styled.header`
    .header__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 75px;

        .header__logo {
            h2 {
                color: ${(props) => props.theme.colors.primary};
            }
        }

        nav {
            ul {
                display: flex;
                align-items: center;
                justify-content: space-around;

                li {
                    color: ${(props) => props.theme.colors.primary};
                    font-size: ${(props) => props.theme.fontSize.small};
                    list-style: none;
                    padding-left: 10px;

                    a {
                        font-size: ${(props) => props.theme.fontSize.small};
                        color: ${(props) => props.theme.colors.primary};
                        padding: 5px;
                    }
                }
            }
        }
    }
`;
