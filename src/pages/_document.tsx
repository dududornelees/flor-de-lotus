import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="pt-BR">
            <Head>
                <meta name="theme-color" content="#3c89d0" />
                <link rel="apple-touch-icon" href="/static/favicon.ico" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <link rel="manifest" href="/static/manifest.json" />

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
