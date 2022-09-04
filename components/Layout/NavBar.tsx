import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Divider, HStack, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useDisclosure } from '@chakra-ui/hooks';
import { CenterContainer } from './CenterContainer';
import { Icon } from '../Icons';
import { Format, getToday } from '../../utils';
import { SearchModal } from '../SearchModal/SearchModal';

export function NavBar() {
    const primaryColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const dividerColor = useColorModeValue('divider.light', 'divider.dark');
    const iconColor = useColorModeValue('text.placeholder.light', 'text.placeholder.dark');
    const inputBgColor = useColorModeValue('secondary.light', 'secondary.dark');
    const dateFormat = useBreakpointValue({ base: 'short', md: 'long' });

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box width="100%">
            <CenterContainer paddingY="space12">
                <HStack spacing={{ base: 'space16', sm: 'space40' }}>
                    <Text variant="large600" color={primaryColor}>
                        Anime
                    </Text>
                    <HStack
                        role="button"
                        onClick={onOpen}
                        spacing={0}
                        bgColor={inputBgColor}
                        borderRadius="radius30"
                        width="100%"
                    >
                        <Center height="100%" paddingLeft="space16">
                            <Icon name="search" color={iconColor} boxSize={16.8} />
                        </Center>
                        <Input
                            placeholder="Search..."
                            paddingLeft="space8"
                            borderTopLeftRadius={0}
                            borderBottomLeftRadius={0}
                            width="100%"
                        />
                    </HStack>
                    <Text variant="small500" whiteSpace="nowrap">
                        {/* TODO: underline */}
                        {getToday(dateFormat as Format)}
                    </Text>
                </HStack>
            </CenterContainer>
            <Divider orientation="horizontal" height={1} bgColor={dividerColor} width="100%" />
            <SearchModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
}
