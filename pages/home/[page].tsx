import { SimpleGrid, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { AnimeCard, Pagination } from '../../components';
import { loadAnimes } from '../../lib';
import { Anime, Pagination as PaginationType } from '../../store';

interface HomeProps {
    data: Anime[];
    pagination: PaginationType;
}

function Home(props: HomeProps) {
    const { data, pagination } = props;
    return (
        <>
            <Head>
                <title>Anime List</title>
                <meta name="description" content="A list of animes" />
            </Head>
            <VStack spacing="space40" width="100%">
                <SimpleGrid
                    minChildWidth={{ base: '100%', xs: 200 }}
                    spacing="space50"
                    width="100%"
                >
                    {data?.map((anime) => (
                        <AnimeCard
                            key={anime.mal_id}
                            id={anime.mal_id || ''}
                            image={anime.images?.webp?.large_image_url || ''}
                            // @ts-ignore The type for `titles` is wrong
                            title={anime.titles?.[0]?.title}
                        />
                    ))}
                </SimpleGrid>
                <Pagination hasNext={pagination?.has_next_page || false} />
            </VStack>
        </>
    );
}

export const getStaticPaths = async () => {
    const results = await loadAnimes('1');
    return {
        paths: [...Array(results.pagination.last_visible_page)].map((_, index) => ({
            params: { page: (index + 1).toString() },
        })),
        fallback: true,
    };
};

// Because the api is rate limited, not all pages will be rendered at build time
export const getStaticProps: GetStaticProps = async (context) => {
    const results = await loadAnimes((context.params?.page as string) || '1');

    return {
        props: {
            ...results,
        },
        revalidate: 6000,
    };
};

export default Home;
