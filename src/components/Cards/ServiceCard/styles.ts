import styled from "styled-components";

export const ServiceCardStyle = styled.div`
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    border: ${(props) => props.theme.border};
    padding: 20px;
    background-color: white;

    h3 {
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 5px;
    }
`;
