import { useState } from "react";
import Link from "next/link";

// Styles
import { HeaderStyle } from "./styles";
import { Container } from "../../styles/GlobalStyle";

// Icons
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <HeaderStyle>
            <Container className="header__container">
                <div className="header__logo">
                    <h2>Logo</h2>
                </div>

                <nav
                    className={
                        menuOpened
                            ? "header__menu header__menu--opened"
                            : "header__menu"
                    }
                >
                    <ul>
                        <li>
                            <Link href="/">INÍCIO</Link>
                        </li>

                        <li className="header__menu--divider">|</li>

                        <li>
                            <Link href="/">ESTRUTURA</Link>
                        </li>

                        <li className="header__menu--divider">|</li>

                        <li>
                            <Link href="/">SERVIÇO</Link>
                        </li>

                        <li className="header__menu--divider">|</li>

                        <li>
                            <Link href="/">QUEM SOMOS</Link>
                        </li>

                        <li className="header__menu--divider">|</li>

                        <li>
                            <Link href="/">CONTATO</Link>
                        </li>
                    </ul>
                </nav>

                <div className="header__menu--mobile">
                    <button
                        onClick={() => {
                            setMenuOpened(!menuOpened);
                        }}
                    >
                        {menuOpened ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </Container>
        </HeaderStyle>
    );
};

export default Header;
