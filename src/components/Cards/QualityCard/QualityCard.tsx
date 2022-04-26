// Styles
import { QualityCardStyle } from "./styles";

// Interfaces
interface Props {
    icon: Node;
    title: string;
    description: string;
}

const QualityCard = ({ icon, title, description }) => {
    return (
        <QualityCardStyle>
            <div className="quality-card__icon">{icon}</div>

            <div className="quality-card__title">
                <h3>{title}</h3>
            </div>

            <div className="quality-card__description">
                <p>{description}</p>
            </div>
        </QualityCardStyle>
    );
};

export default QualityCard;
