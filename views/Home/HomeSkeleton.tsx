import { SimpleGrid } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

export function HomeSkeleton() {
    return (
        <SimpleGrid minChildWidth={{ base: '100%', xs: 200 }} spacing="space50" width="100%">
            {[...Array(9)].map(() => (
                <Skeleton width="100%" height={{ base: 500, xs: 280 }} />
            ))}
        </SimpleGrid>
    );
}
