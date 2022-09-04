import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { loadAnime, loadAnimes } from '../../lib';
import { Anime } from '../../store';
import { Icon, Metadata, Statistics } from '../../components';

function AnimePage({ data }: { data: Anime }) {
    const textColor = useColorModeValue('text.primary.light', 'text.primary.dark');
    const bgColor = useColorModeValue('main.light', 'main.dark');

    // TODO: Replace with skeleton
    if (!data) {
        return <Box />;
    }

    return (
        <>
            <Head>
                <title>Anime</title>
                <meta name="description" content="A list of animes" />
            </Head>
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
                                {/* @ts-ignore The type for `titles` is wrong */}
                                {data.titles?.[0]?.title}
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

export const getStaticPaths = async () => {
    const results = await loadAnimes(undefined, 100);
    return {
        paths: results?.data?.map((anime: Anime) => ({
            params: { id: anime?.mal_id?.toString() },
        })),
        fallback: true,
    };
};

// Because the api is rate limited, not all pages will be rendered at build time
export const getStaticProps: GetStaticProps = async (context) => {
    const results = await loadAnime((context.params?.id as string) || '1');

    return {
        props: {
            ...results,
        },
        revalidate: 6000,
    };
};

export default AnimePage;
