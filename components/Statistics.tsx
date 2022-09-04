import { useColorModeValue } from '@chakra-ui/color-mode';
import { Text, VStack } from '@chakra-ui/layout';

export function Statistics({ label, value }: { label: string; value: string | number }) {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const fadedTextColor = useColorModeValue('text.placeholder.light', 'text.placeholder.dark');

    return (
        <VStack spacing={0} alignItems="flex-end">
            <Text variant="large600" color={textColor}>
                {value}
            </Text>
            <Text variant="large600" color={fadedTextColor}>
                {label}
            </Text>
        </VStack>
    );
}
