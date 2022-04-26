import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="pt-BR">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
