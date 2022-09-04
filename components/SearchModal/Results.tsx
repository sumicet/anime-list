import { Box, BoxProps, Center, HStack, Text, VStack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Image from 'next/image';
import { Spinner } from '@chakra-ui/spinner';
import { Anime } from '../../store';
import { Input } from '../../hooks';

function Wrapper(props: BoxProps) {
    const bgColor = useColorModeValue('main.light', 'main.dark');
    return (
        <Box {...props} width="100%" bgColor={bgColor} padding="space35" borderRadius="radius30" />
    );
}

export function Results({
    data,
    error,
    query,
    isLoading,
}: {
    data: Anime[] | undefined;
    error: any;
    query: Input;
    isLoading: boolean;
}) {
    const titleColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const fadedColor = useColorModeValue('text.label.light', 'text.label.dark');
    const bgColor = useColorModeValue('main.light', 'main.dark');

    if (isLoading) {
        return (
            <Wrapper>
                <Center width="100%">
                    <Spinner />
                </Center>
            </Wrapper>
        );
    }

    if (error) {
        return (
            <Wrapper>
                <Text variant="body500">
                    Looks like an error ocurred. Please try searching for something else.
                </Text>
            </Wrapper>
        );
    }

    if (!data?.length) {
        return (
            <Wrapper>
                <Text variant="body500">
                    Oops! It looks like we couldn&apos;t find any results for ‘{query}’.
                </Text>
            </Wrapper>
        );
    }

    return (
        <VStack
            spacing="space24"
            alignItems="flex-start"
            width="100%"
            bgColor={bgColor}
            padding="space35"
            borderRadius="radius30"
        >
            {data.map((anime) => (
                <HStack spacing="space16">
                    <Box
                        borderRadius="radius5"
                        overflow="hidden"
                        width="50px"
                        height="50px"
                        minWidth="50px"
                        minHeight="50px"
                        position="relative"
                    >
                        <Image
                            src={anime.images?.webp?.large_image_url || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Box>
                    <VStack spacing={0} alignItems="flex-start" width="100%">
                        <Text variant="body500" color={titleColor} noOfLines={1}>
                            {/* @ts-ignore The type for `titles` is wrong */}
                            {anime.titles?.[0]?.title}
                        </Text>
                        <Text variant="small500" color={fadedColor}>
                            {anime.type} ·{' '}
                            {anime.episodes === 1
                                ? `${anime.episodes} Episode`
                                : `${anime.episodes} Episodes`}{' '}
                            · {anime.status}
                        </Text>
                    </VStack>
                </HStack>
            ))}
        </VStack>
    );
}
