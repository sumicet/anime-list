import { GetStaticProps } from 'next';
import { loadAnime, loadAllAnime } from '../../lib';
import { Anime as AnimeType } from '../../types';
import { Anime as AnimeView, AnimeProps } from '../../views/Anime';

function Anime(props: AnimeProps) {
    return <AnimeView {...props} />;
}

export const getStaticPaths = async () => {
    const results = await loadAllAnime(0, 100);

    return {
        paths: results?.data?.map((anime: AnimeType) => ({
            params: { id: anime?.mal_id?.toString() },
        })),
        fallback: true,
    };
};

// Because the api is rate limited, not all pages will be rendered at build time
export const getStaticProps: GetStaticProps = async (context) => {
    const results = await loadAnime(context.params?.id as string);

    if (results?.error || results?.status === 404) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            ...results,
        },
        revalidate: 6000,
    };
};

export default Anime;
