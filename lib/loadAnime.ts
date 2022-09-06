import { config } from '../config';

// The generated types are all over the place so I thought it was better to not
// waste time on trying to add a return type

export async function loadAnime(id: string | number) {
    const response = await fetch(`${config.animeUri}/anime/${id}`);
    return response.json();
}
