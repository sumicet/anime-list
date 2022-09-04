import { config } from '../config';

export async function loadAnimes(page: string | number, limit?: string | number) {
    const response = await fetch(
        `${config.animeUri}/top/anime?limit=${limit || 21}${page ? `&page=${page}` : ''}`
    );
    return response.json();
}
