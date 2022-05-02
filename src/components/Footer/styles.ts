import styled from "styled-components";

export const FooterStyle = styled.footer`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        font-size: 14px;

        a {
            color: ${(props) => props.theme.colors.primary};
            text-decoration: none;
        }
    }
`;
