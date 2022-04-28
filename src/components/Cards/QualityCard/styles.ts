import styled from "styled-components";

export const QualityCardStyle = styled.div`
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.boxShadow};
    border: ${(props) => props.theme.border};
    padding: 20px;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    justify-items: center;

    .quality-card__icon {
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 100px;
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: white;
            width: 28px;
            height: 28px;
        }
    }

    .quality-card__title {
        h3 {
            color: ${(props) => props.theme.colors.primary};
        }
    }

    .quality-card__description {
        p {
            text-align: center;
            font-size: 14px;
        }
    }
`;

