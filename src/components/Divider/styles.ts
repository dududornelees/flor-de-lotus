import styled from "styled-components";

export const DividerStyle = styled.div`
    .divider {
        padding: 30px 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        .divider__out--left {
            border-radius: ${(props) => props.theme.borderRadius};
            width: 90px;
            height: 4px;
            background-color: #aacbe9;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .divider__in--left {
                background-color: ${(props) => props.theme.colors.primary};
                border-radius: ${(props) => props.theme.borderRadius};
                width: 60px;
                height: 8px;
            }
        }

        .divider__title {
            color: ${(props) => props.theme.colors.primary};
            font-weight: 600;
            font-size: 24px;
            padding: 0px 12px;
            text-align: center;
        }

        .divider__out--right {
            border-radius: ${(props) => props.theme.borderRadius};
            width: 90px;
            height: 4px;
            background-color: #aacbe9;
            display: flex;
            align-items: center;

            .divider__in--right {
                background-color: ${(props) => props.theme.colors.primary};
                border-radius: ${(props) => props.theme.borderRadius};
                width: 60px;
                height: 8px;
            }
        }
    }

    .divider--white {
        .divider__out--left {
            background-color: #8ab8e3;

            .divider__in--left {
                background-color: white;
            }
        }

        .divider__title {
            color: white;
        }

        .divider__out--right {
            background-color: #8ab8e3;

            .divider__in--right {
                background-color: white;
            }
        }
    }

    /* Tablet */
    ${(props) => props.theme.media.tablet} {
        .divider {
            .divider__title {
                font-size: 18px;
            }
        }
    }
`;
