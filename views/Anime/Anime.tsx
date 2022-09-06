import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Anime as AnimeType } from '../../types';
import { Icon, Metadata, Statistics } from '../../components';
import { GoBack } from './GoBack';
import { AnimeSkeleton } from './AnimeSkeleton';
import { useRateLimitToast } from '../../hooks';

export interface AnimeProps {
    data?: AnimeType;
    status?: string;
}

export function Anime({ data, status }: AnimeProps) {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const bgColor = useColorModeValue('main.light', 'main.dark');

    useRateLimitToast(status);

    if (!data) {
        return <AnimeSkeleton />;
    }

    // @ts-ignore The type for `titles` is wrong
    const title: string | null | undefined = data.titles?.[0]?.title;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={data?.synopsis || undefined} />
            </Head>
            <GoBack />
            <VStack
                spacing={{ base: 'space24', sm: 'space35' }}
                width="100%"
                alignItems="flex-start"
            >
                <Stack direction={{ base: 'column', sm: 'row' }} spacing="space20" width="100%">
                    <Box
                        height={330}
                        width={{ base: '100%', sm: '270px' }}
                        position="relative"
                        borderRadius="radius10"
                        overflow="hidden"
                    >
                        <Image
                            src={data.images?.webp?.large_image_url || ''}
                            layout="fill"
                            objectFit="cover"
                            alt={title || 'anime'}
                        />
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        height={330}
                        flex={1}
                        spacing={{ base: 'space16', sm: '0px' }}
                    >
                        <HStack spacing="space10" width="100%">
                            <Text variant="large700" color={textColor} noOfLines={1}>
                                {title || 'N/A'}
                            </Text>
                            {data.approved && (
                                <Icon name="verified" color={bgColor} boxSize="space24" />
                            )}
                        </HStack>
                        <VStack spacing="space24" width="100%">
                            <Metadata label="Type" value={data.type || 'N/A'} />
                            <Metadata label="Source" value={data.source || 'N/A'} />
                            <Metadata label="Episodes" value={data.episodes || 'N/A'} />
                            <Metadata label="Status" value={data.status || 'N/A'} />
                        </VStack>
                        <Flex
                            justifyContent="space-between"
                            paddingTop={{ base: 'space16', sm: '0px' }}
                        >
                            <Statistics label="Score" value={data.score || 'N/A'} />
                            <Statistics label="Rank" value={data.rank || 'N/A'} />
                            <Statistics label="Popularity" value={data.popularity || 'N/A'} />
                        </Flex>
                    </Stack>
                </Stack>
                <Text variant="body600" color={textColor}>
                    Description
                </Text>
                <Text variant="small500">{data.synopsis || 'N/A'}</Text>
            </VStack>
        </>
    );
}
