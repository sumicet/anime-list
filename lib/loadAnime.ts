import { config } from '../config';

export async function loadAnime(id: string | number) {
    const response = await fetch(`${config.animeUri}/anime/${id}`);
    return response.json();
}
