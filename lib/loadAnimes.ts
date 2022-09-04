import { config } from '../config';

export async function loadAnimes(page: string | number) {
    const response = await fetch(`${config.animeUri}/top/anime?limit=21&page=${page}`);
    return response.json();
}
