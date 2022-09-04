import { Box, BoxProps, Center, HStack, Text, VStack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/spinner';
import { Anime } from '../../store';
import { Input } from '../../hooks';
import { Icon } from '../Icons';

function Wrapper(props: BoxProps) {
    const bgColor = useColorModeValue('main.light', 'divider.dark');
    return (
        <Box {...props} width="100%" bgColor={bgColor} padding="space35" borderRadius="radius30" />
    );
}

export function Results({
    data,
    error,
    query,
    isLoading,
    onClose,
}: {
    data: Anime[] | undefined;
    error: any;
    query: Input;
    isLoading: boolean;
    onClose: () => void;
}) {
    const titleColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const fadedColor = useColorModeValue('text.label.light', 'text.label.dark');
    const bgColor = useColorModeValue('main.light', 'divider.dark');
    const accentColor = useColorModeValue('accent.purple.light', 'accent.purple.dark');
    const iconColor = useColorModeValue('text.placeholder.light', 'text.placeholder.dark');

    const router = useRouter();
    const handleClick = async (id: Anime['mal_id']) => {
        await router.push(`/anime/${id}`);
        onClose();
    };

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
            spacing="space12"
            alignItems="flex-start"
            width="100%"
            bgColor={bgColor}
            padding="space24"
            borderRadius="radius30"
            cursor="pointer"
        >
            {data.map((anime) => {
                // @ts-ignore The type for `titles` is wrong
                const title = anime.titles?.[0]?.title;

                return (
                    <HStack
                        spacing="space16"
                        borderRadius="radius10"
                        padding="space12"
                        width="100%"
                        transitionProperty="all"
                        transitionTimingFunction="ease-in-out"
                        transitionDuration="ultra-fast"
                        _hover={{
                            bgColor: accentColor,
                        }}
                        onClick={() => handleClick(anime.mal_id)}
                    >
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
                                // @ts-ignore The type for `titles` is wrong
                                alt={title}
                            />
                        </Box>
                        <VStack spacing={0} alignItems="flex-start" width="100%">
                            <Text variant="body500" color={titleColor} noOfLines={1}>
                                {/* @ts-ignore The type for `titles` is wrong */}
                                {title}
                            </Text>
                            <Text variant="small500" color={fadedColor}>
                                {anime.type} ·{' '}
                                {anime.episodes === 1
                                    ? `${anime.episodes} Episode`
                                    : `${anime.episodes} Episodes`}{' '}
                                · {anime.status}
                            </Text>
                        </VStack>
                        <Icon name="smallArrowRight" boxSize="space24" color={iconColor} />
                    </HStack>
                );
            })}
        </VStack>
    );
}
