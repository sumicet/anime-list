import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, VStack } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { CenterContainer } from './CenterContainer';
import { NavBar } from './NavBar';

function Footer() {
    return <Box>Footer</Box>;
}

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
            <NavBar />
            <CenterContainer>{children}</CenterContainer>
            <Footer />
        </VStack>
    );
}
