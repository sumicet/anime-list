import { SimpleGrid, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { AnimeCard, Pages } from '../components';
import { loadAnimes } from '../lib';
import { Anime, Pagination } from '../store';

interface HomeProps {
    data: Anime[];
    pagination: Pagination;
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
                            image={anime.images?.webp?.large_image_url || ''}
                            // @ts-ignore The type for `titles` is wrong
                            title={anime.titles[0].title}
                        />
                    ))}
                </SimpleGrid>
                <Pages page={pagination?.current_page || 1} />
            </VStack>
        </>
    );
}

export const getStaticPaths = async () => {
    const results = await loadAnimes('1');
    return {
        paths: Array(results.pagination.last_visible_page).map((_, index) => ({
            params: { page: index },
        })),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const results = await loadAnimes((context.params?.page as string) || '1');

    return {
        props: {
            ...results,
            params: context.params?.page,
        },
        revalidate: 6000,
    };
};

export default Home;
