import { Stack, VStack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { GoBack } from './GoBack';

export function AnimeSkeleton() {
    return (
        <>
            <GoBack />
            <VStack spacing="space35" width="100%" alignItems="flex-start">
                <Stack direction={{ base: 'column', sm: 'row' }} spacing="space20" width="100%">
                    <Skeleton
                        height={330}
                        width={{ base: '100%', sm: '270px' }}
                        position="relative"
                        borderRadius="radius10"
                        overflow="hidden"
                    />
                    <Skeleton display="flex" justifyContent="space-between" height={330} flex={1} />
                </Stack>
                <Skeleton width="100%" height={200} />
            </VStack>
        </>
    );
}
