import { SimpleGrid, VStack } from '@chakra-ui/layout';
import Head from 'next/head';
import { Anime, Pagination as PaginationType } from '../../types';
import { AnimeCard, Pagination } from '../../components';
import { HomeSkeleton } from './HomeSkeleton';
import { useRateLimitToast } from '../../hooks';

export interface HomeProps {
    data?: Anime[];
    pagination?: PaginationType;
    status?: string;
}

export function Home(props: HomeProps) {
    const { data, pagination, status } = props;

    useRateLimitToast(status);

    if (!data) {
        return <HomeSkeleton />;
    }

    return (
        <>
            <Head>
                <title>Anime List</title>
                <meta name="description" content="A list of anime" />
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
                            title={anime.titles?.[0]?.title || 'Unknown'}
                        />
                    ))}
                </SimpleGrid>
                <Pagination hasNext={pagination?.has_next_page || false} />
            </VStack>
        </>
    );
}
