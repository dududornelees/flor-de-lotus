// Styles
import { DividerStyle } from "./styles";

// Interfaces
interface Props {
    title: string;
    white?: boolean;
}

const Divider = ({ title, white }: Props) => {
    return (
        <DividerStyle>
            <div className={white ? "divider divider--white" : "divider"}>
                <span className="divider__out--left">
                    <span className="divider__in--left"></span>
                </span>

                <h3 className="divider__title">{title}</h3>

                <span className="divider__out--right">
                    <span className="divider__in--right"></span>
                </span>
            </div>
        </DividerStyle>
    );
};

export default Divider;
