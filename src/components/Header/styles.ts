import styled from "styled-components";
import { shade } from "polished";

export const HeaderStyle = styled.header`
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: ${(props) => props.theme.boxShadow};
    position: fixed;
    width: 100%;
    z-index: 1;

    .header__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;

        .header__logo {
            h2 {
                color: ${(props) => props.theme.colors.primary};
            }
        }

        .header__menu {
            ul {
                display: flex;
                align-items: center;
                justify-content: space-around;

                li {
                    color: ${(props) => props.theme.colors.primary};
                    font-size: ${(props) => props.theme.fontSize.small};
                    list-style: none;
                    padding-left: 5px;

                    a {
                        font-size: ${(props) => props.theme.fontSize.small};
                        color: ${(props) => props.theme.colors.primary};
                        padding: 5px;
                        text-decoration: none;
                    }
                }
            }
        }

        .header__menu--mobile {
            display: none;
        }
    }

    /* Tablet */
    ${(props) => props.theme.media.tablet} {
        .header__container {
            .header__menu {
                background-color: ${(props) => props.theme.colors.primary};
                position: fixed;
                width: 100%;
                height: 100vh;
                top: 60px;
                left: -100%;
                text-align: center;
                transition: all 0.5s ease-in-out;

                ul {
                    flex-direction: column;
                    width: 100%;

                    .header__menu--divider {
                        display: none;
                    }

                    li {
                        padding: 0px;
                        width: 100%;

                        a {
                            display: block;
                            color: white;
                            width: 100%;
                            padding: 18px 0px;

                            &:hover {
                                background-color: ${(props) =>
                                    shade(0.2, props.theme.colors.primary)};
                            }
                        }
                    }
                }
            }

            .header__menu--opened {
                display: block;
                left: 0;
            }

            .header__menu--mobile {
                display: block;

                button {
                    display: flex;
                    background-color: transparent;
                    border: none;

                    svg {
                        color: ${(props) => props.theme.colors.primary};
                        width: 26px;
                        height: 26px;
                    }
                }
            }
        }
    }
`;
