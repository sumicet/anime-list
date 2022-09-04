import { config } from '../config';

// Fetching "recommended" anime from
// `https://docs.api.jikan.moe/#tag/recommendations/operation/getRecentAnimeRecommendations`
// returns pairs of anime that are similar to each other. I doubt this is what
// was needed for this app

/**
 * @param page
 * @param limit
 * @returns A list of top anime
 */
export async function loadAllAnime(page: string | number, limit?: string | number) {
    const response = await fetch(
        `${config.animeUri}/top/anime?limit=${limit || 21}${page ? `&page=${page}` : ''}`
    );
    return response.json();
}
