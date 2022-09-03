import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export interface AnimeCardProps {
    image: string;
    title: string;
}

export function AnimeCard({ image, title }: AnimeCardProps) {
    return (
        <Flex
            overflow="hidden"
            borderRadius="radius10"
            height={{ base: 500, xs: 280 }}
            position="relative"
            alignItems="flex-end"
            transitionProperty="all"
            transitionDuration="faster"
            transitionTimingFunction="ease-in-out"
            _hover={{
                transform: 'scale(1.1)',
            }}
        >
            <Box padding="space12">
                <Text variant="body600" color="text.primary.dark" noOfLines={1}>
                    {title}
                </Text>
            </Box>

            <Box position="absolute" width="100%" height="100%" top={0} zIndex={-1}>
                <Image src={image} layout="fill" objectFit="cover" />
            </Box>
            <Box
                position="absolute"
                bottom={0}
                width="100%"
                height="33%"
                bg="cardOverlay"
                zIndex={-1}
            />
        </Flex>
    );
}
