import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/provider';
import { ToastContainer } from 'react-toastify';
import { theme } from '../theme';
import { Layout } from '../components';
import 'react-toastify/dist/ReactToastify.css';

// Only configured the toast to show "warnings"
// Didn't use the default toast.warn style because this was faster to style
const toastStyle = {
    padding: 10,
    background: '#ffd952',
    fontFamily: 'Inter',
    borderRadius: '10px',
    fontSize: '16px',
    lineHeight: '19px',
    color: 'black',
};

function Wrapper({ Component, pageProps }: AppProps) {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={6000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastStyle={toastStyle}
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
