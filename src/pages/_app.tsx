import { ThemeProvider } from "styled-components";

// Styles
import { GlobalStyle } from "../styles/GlobalStyle";
import { DefaultTheme } from "../styles/Themes/Default";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyle />

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
