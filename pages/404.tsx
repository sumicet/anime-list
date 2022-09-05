import { Center, Text, VStack } from '@chakra-ui/layout';

export default function Error404() {
    return (
        <Center width="100%" height="100%">
            <VStack spacing="space10">
                <Text variant="large700">Oops! Dead end.</Text>
                <Text variant="body">This page doesn&apos;t exist.</Text>
            </VStack>
        </Center>
    );
}
