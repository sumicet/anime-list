import { GetStaticProps } from 'next';
import { loadAllAnime } from '../../lib';
import { Home as HomeView, HomeProps } from '../../views/Home';

function Home(props: HomeProps) {
    return <HomeView {...props} />;
}

export const getStaticPaths = async () => {
    const results = await loadAllAnime('1');

    return {
        paths: [...Array(results?.pagination?.last_visible_page)].map((_, index) => ({
            params: { page: (index + 1).toString() },
        })),
        fallback: true,
    };
};

// The api is rate limited to 3 requests per second
// This will cause some issues, see `README.md`
export const getStaticProps: GetStaticProps = async (context) => {
    const results = await loadAllAnime(context.params?.page as string);

    const pagination = results?.pagination;

    const pageBeyondMax =
        pagination?.current_page &&
        pagination?.last_visible_page &&
        pagination.current_page > pagination?.last_visible_page;

    // It sometimes doesn't return an `error` field
    if (results?.error || pageBeyondMax) {
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

export default Home;
