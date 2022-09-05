import { useColorModeValue } from '@chakra-ui/color-mode';
import { HStack, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { Icon } from '../../components';

export function GoBack() {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const router = useRouter();

    // Could've added a useHistory hook that memorizes the previous route
    // Using the hook, we can check if the previously accessed page was one of
    // the pages inside the Anime List app
    // If it is => router.back()
    // Else => router.push('home/1')
    const handleGoBack = () => {
        router.push('/home/1');
    };

    return (
        <HStack
            spacing="space4"
            paddingBottom={{ base: 'space24', sm: 'space50' }}
            onClick={handleGoBack}
            cursor="pointer"
            width="fit-content"
        >
            <Icon
                name="smallArrowRight"
                transform="rotate(180deg)"
                color={textColor}
                boxSize="24px"
            />
            <Text variant="body600" color={textColor}>
                Go back to Main
            </Text>
        </HStack>
    );
}
