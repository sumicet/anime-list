import { pagination_plus } from './generated';

// Doesn't have the correct types
export type Pagination = pagination_plus['pagination'];

export type { anime as Anime, anime_images as AnimeImages } from './generated';
