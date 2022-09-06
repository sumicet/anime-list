import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import Link from 'next/link';

export interface AnimeCardProps {
    image: string;
    title: string;
    id: number | string;
}

export function AnimeCard({ image, title, id }: AnimeCardProps) {
    return (
        <Link href={`/anime/${id}`}>
            <Flex
                cursor="pointer"
                overflow="hidden"
                borderRadius="radius10"
                height={{ base: 500, xs: 280 }}
                position="relative"
                alignItems="flex-end"
                transitionProperty="all"
                transitionDuration="faster"
                transitionTimingFunction="ease-in-out"
                _hover={{
                    transform: 'scale(1.05)',
                }}
            >
                <Box padding="space12" zIndex={2}>
                    <Text variant="body600" color="text.primary.dark" noOfLines={1}>
                        {title}
                    </Text>
                </Box>

                <Box position="absolute" width="100%" height="100%" top={0}>
                    <Image src={image} layout="fill" objectFit="cover" alt={title} />
                </Box>

                {/* Overlay */}
                <Box position="absolute" bottom={0} width="100%" height="33%" bg="cardOverlay" />
            </Flex>
        </Link>
    );
}
