import { useColorModeValue } from '@chakra-ui/color-mode';
import { Divider, HStack, Text } from '@chakra-ui/layout';

export function Metadata({ label, value }: { label: string; value: string | number }) {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const fadedTextColor = useColorModeValue('text.secondary.light', 'text.secondary.dark');
    const dividerColor = useColorModeValue('divider.light', 'divider.dark');

    return (
        <HStack spacing="space10" width="100%">
            <Text variant="small600" color={fadedTextColor}>
                {label}
            </Text>
            <Divider width="100%" height={1} bgColor={dividerColor} />
            <Text variant="small600" color={textColor} whiteSpace="nowrap">
                {value}
            </Text>
        </HStack>
    );
}
