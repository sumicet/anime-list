import { Center, CenterProps, Container } from '@chakra-ui/layout';

export function CenterContainer({ children, ...rest }: CenterProps) {
    return (
        <Center width="100%" height="100%" paddingX={{ base: '15px', sm: 'space20' }} {...rest}>
            <Container
                maxWidth={{ base: '100%', xs: '712px' }}
                width="100%"
                height="100%"
            >
                {children}
            </Container>
        </Center>
    );
}
