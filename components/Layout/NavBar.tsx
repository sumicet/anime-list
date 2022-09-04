import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Divider, HStack, Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useDisclosure } from '@chakra-ui/hooks';
import Link from 'next/link';
import { Button } from '@chakra-ui/button';
import { CenterContainer } from './CenterContainer';
import { Icon } from '../Icons';
import { Format, getToday } from '../../utils';
import { SearchModal } from '../SearchModal/SearchModal';

export function NavBar() {
    const bgColor = useColorModeValue('main.light', 'main.dark');
    const primaryColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const dividerColor = useColorModeValue('divider.light', 'divider.dark');
    const iconColor = useColorModeValue('text.placeholder.light', 'text.placeholder.dark');
    const inputBgColor = useColorModeValue('secondary.light', 'secondary.dark');
    const dateFormat = useBreakpointValue({ base: 'short', md: 'long' });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { toggleColorMode } = useColorMode();

    return (
        <Box width="100%" position="sticky" top={0} zIndex={10} bgColor={bgColor}>
            <CenterContainer paddingY="space12">
                <HStack spacing={{ base: 'space16', sm: 'space40' }}>
                    <Link href="/home/1">
                        <Text variant="large600" color={primaryColor} cursor="pointer">
                            Anime
                        </Text>
                    </Link>
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
                    <Button bg="transparent" paddingRight={0} onClick={toggleColorMode}>
                        <Icon name="theme" boxSize="space24" color={primaryColor} />
                    </Button>
                </HStack>
            </CenterContainer>
            <Divider orientation="horizontal" height={1} bgColor={dividerColor} width="100%" />
            <SearchModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
}
