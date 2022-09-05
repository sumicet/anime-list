import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Anime as AnimeType } from '../../types';
import { Icon, Metadata, Statistics } from '../../components';
import { GoBack } from './GoBack';
import { AnimeSkeleton } from './AnimeSkeleton';

export function Anime({ data }: { data: AnimeType }) {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const bgColor = useColorModeValue('main.light', 'main.dark');

    if (!data) {
        return <AnimeSkeleton />;
    }

    // @ts-ignore The type for `titles` is wrong
    const title = data.titles?.[0]?.title;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={data?.synopsis || undefined} />
            </Head>
            <GoBack />
            <VStack spacing="space35" width="100%" alignItems="flex-start">
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
                            // @ts-ignore The type for `titles` is wrong
                            alt={title}
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
                                {title}
                            </Text>
                            <Icon name="verified" color={bgColor} boxSize="space24" />
                        </HStack>
                        <VStack spacing="space24" width="100%">
                            <Metadata label="Type" value={data.type || 'Unknown'} />
                            <Metadata label="Source" value={data.source || 'Unknown'} />
                            <Metadata label="Episodes" value={data.episodes || 'Unknown'} />
                            <Metadata label="Status" value={data.status || 'Unknown'} />
                        </VStack>
                        <Flex justifyContent="space-between">
                            <Statistics label="Score" value={data.score || 'Unknown'} />
                            <Statistics label="Rank" value={data.rank || 'Unknown'} />
                            <Statistics label="Popularity" value={data.popularity || 'Unknown'} />
                        </Flex>
                    </Stack>
                </Stack>
                <Text variant="body600" color={textColor}>
                    Description
                </Text>
                <Text variant="small500">{data.synopsis}</Text>
            </VStack>
        </>
    );
}
