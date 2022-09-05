import { useColorModeValue } from '@chakra-ui/color-mode';
import { Center, Text, VStack } from '@chakra-ui/layout';

export default function Error404() {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');

    return (
        <Center width="100%" height="100%">
            <VStack spacing="space10">
                <Text variant="large700" color={textColor}>
                    Oops! Dead end.
                </Text>
                <Text variant="body" color={textColor}>
                    This page doesn&apos;t exist.
                </Text>
            </VStack>
        </Center>
    );
}
