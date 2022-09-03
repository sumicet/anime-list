import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/color-mode';
import { theme } from '../theme';

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Inter:bold|Inter:semi-bold|Inter:medium|Inter:regular&display=optional"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    {/* Sync local storage correctly https://chakra-ui.com/getting-started/nextjs-guide#color-mode-script */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
