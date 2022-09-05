import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/provider';
import { ToastContainer } from 'react-toastify';
import { theme } from '../theme';
import { Layout } from '../components';
import 'react-toastify/dist/ReactToastify.css';

function Wrapper({ Component, pageProps }: AppProps) {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={6000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastStyle={{
                    padding: 10,
                    background: '#ffd952',
                    fontFamily: 'Inter',
                    borderRadius: '10px',
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: 'black',
                }}
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

function App(props: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Wrapper {...props} />
        </ChakraProvider>
    );
}

export default App;
