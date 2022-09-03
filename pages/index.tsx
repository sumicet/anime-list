import { SimpleGrid } from '@chakra-ui/layout';
import Head from 'next/head';
import { AnimeCard } from '../components';
import { Anime, Pagination } from '../store';

function Home({ data }: { data: { data: Anime[]; pagination: Pagination } }) {
    const { data: animes } = data;
    return (
        <>
            <Head>
                <title>Anime List</title>
                <meta name="description" content="A list of animes" />
            </Head>
            <SimpleGrid minChildWidth={{ base: '100%', xs: 200 }} spacing="space50">
                {animes.map((anime) => (
                    <AnimeCard
                        image={anime.images?.webp?.large_image_url || ''}
                        // @ts-ignore The type for `titles` is wrong
                        title={anime.titles[0].title}
                    />
                ))}
            </SimpleGrid>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=21');
    const animes = await res.json();

    return {
        props: {
            data: animes,
        },
        revalidate: 10,
    };
}

export default Home;
