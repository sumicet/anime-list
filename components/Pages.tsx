import { HStack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useRouter } from 'next/router';
import { Icon } from './Icons';

export function Pages({ page }: { page: number }) {
    const primaryColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const router = useRouter();

    const navigate = (direction: 'back' | 'forward') =>
        router.push(direction === 'back' ? `${page - 1}` : `${page + 1}`);

    return (
        <HStack spacing="space12">
            <Button variant="square" onClick={() => navigate('back')}>
                <Icon name="arrowLeft" />
            </Button>
            <Text variant="body600" color={primaryColor}>
                {page}
            </Text>
            <Button variant="square" onClick={() => navigate('forward')}>
                <Icon name="arrowLeft" transform="rotate(180deg)" />
            </Button>
        </HStack>
    );
}
