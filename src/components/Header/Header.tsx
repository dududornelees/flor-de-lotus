import Link from "next/link";

// Styles
import { HeaderStyle } from "./styles";
import { Container } from "../../styles/GlobalStyle";

const Header = () => {
    return (
        <HeaderStyle>
            <Container className="header__container">
                <div className="header__logo">
                    <h2>Logo</h2>
                </div>

                <nav className="header__menu">
                    <ul>
                        <li>
                            <Link href="/">INÍCIO</Link>
                        </li>

                        <li>|</li>

                        <li>
                            <Link href="/">ESTRUTURA</Link>
                        </li>

                        <li>|</li>

                        <li>
                            <Link href="/">SERVIÇO</Link>
                        </li>

                        <li>|</li>

                        <li>
                            <Link href="/">QUEM SOMOS</Link>
                        </li>

                        <li>|</li>

                        <li>
                            <Link href="/">CONTATO</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </HeaderStyle>
    );
};

export default Header;
