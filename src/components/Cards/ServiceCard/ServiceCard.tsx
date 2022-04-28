// Styles
import { ServiceCardStyle } from "./styles";

// Interfaces
interface Props {
    title: string;
    description: string;
}

const ServiceCard = ({ title, description }: Props) => {
    return (
        <ServiceCardStyle>
            <h3>{title}</h3>
            <p>{description}</p>
        </ServiceCardStyle>
    );
};

export default ServiceCard;
