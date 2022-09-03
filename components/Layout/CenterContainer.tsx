import { Center, CenterProps, Container } from '@chakra-ui/layout';

export function CenterContainer({ children, ...rest }: CenterProps) {
    return (
        <Center {...rest} width="100%" height="100%" paddingX={{ base: 'space10', sm: 'space20' }}>
            <Container maxWidth={{ base: '100%', xs: 712 }} width="100%" height="100%">
                {children}
            </Container>
        </Center>
    );
}
