import { pagination_plus } from './generated';

// Doesn't have the correct types
export type Pagination = pagination_plus & { current_page: number | undefined };

export type { anime as Anime, anime_images as AnimeImages } from './generated';
