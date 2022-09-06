import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/layout';
import { Icon } from '../Icons';
import { CenterContainer } from './CenterContainer';

export function Footer() {
    const mainColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const fadedTextColor = useColorModeValue('text.label.light', 'text.label.dark');
    const dividerColor = useColorModeValue('divider.light', 'divider.dark');

    const handleScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Box width="100%">
            <Divider orientation="horizontal" height={1} bgColor={dividerColor} width="100%" />
            <CenterContainer height="fit-content" paddingY="space24">
                <Flex justifyContent="space-between">
                    <VStack spacing="space10" width="100%" alignItems="flex-start">
                        <Text variant="body600" color={mainColor}>
                            Made by Cristina Mihailescu
                        </Text>
                        <Text variant="extraSmall500" color={fadedTextColor}>
                            Twitter.
                        </Text>
                        <Text variant="extraSmall500" color={fadedTextColor}>
                            404. Spacing system + color palette not found. :D
                        </Text>
                    </VStack>
                    <Button onClick={handleScroll}>
                        <Icon name="smallArrowRight" boxSize="space24" transform="rotate(-90deg)" />
                    </Button>
                </Flex>
            </CenterContainer>
        </Box>
    );
}
