// Styles
import { DividerStyle } from "./styles";

// Interfaces
interface Props {
    title: string;
}

const Divider = ({ title }: Props) => {
    return (
        <DividerStyle>
            <span className="divider__out--left">
                <span className="divider__in--left"></span>
            </span>

            <h3 className="divider__title">{title}</h3>

            <span className="divider__out--right">
                <span className="divider__in--right"></span>
            </span>
        </DividerStyle>
    );
};

export default Divider;
