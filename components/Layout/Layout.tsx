import { Box, VStack } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { CenterContainer } from './CenterContainer';
import { NavBar } from './NavBar';

function Footer() {
    return <Box>Footer</Box>;
}

export function Layout({ children }: { children: ReactNode }) {
    return (
        <VStack spacing="space40" width="100%" alignItems="flex-start">
            <NavBar />
            <CenterContainer>{children}</CenterContainer>
            <Footer />
        </VStack>
    );
}
