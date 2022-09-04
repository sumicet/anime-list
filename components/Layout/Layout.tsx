import { useColorModeValue } from '@chakra-ui/color-mode';
import { VStack } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { CenterContainer } from './CenterContainer';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }: { children: ReactNode }) {
    const bgColor = useColorModeValue('main.light', 'main.dark');
    return (
        <VStack
            spacing="space40"
            bgColor={bgColor}
            width="100%"
            alignItems="flex-start"
            height="100%"
            position="relative"
        >
            <Header />
            <CenterContainer>{children}</CenterContainer>
            <Footer />
        </VStack>
    );
}
