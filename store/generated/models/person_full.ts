/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { anime_meta } from './anime_meta';
import type { character_meta } from './character_meta';
import type { manga_meta } from './manga_meta';
import type { people_images } from './people_images';

/**
 * Person Resource
 */
export type person_full = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    /**
     * Person's website URL
     */
    website_url?: string | null;
    images?: people_images;
    /**
     * Name
     */
    name?: string;
    /**
     * Given Name
     */
    given_name?: string | null;
    /**
     * Family Name
     */
    family_name?: string | null;
    /**
     * Other Names
     */
    alternate_names?: Array<string>;
    /**
     * Birthday Date ISO8601
     */
    birthday?: string | null;
    /**
     * Number of users who have favorited this entry
     */
    favorites?: number;
    /**
     * Biography
     */
    about?: string | null;
    anime?: Array<{
/**
 * Person's position
 */
position?: string;
anime?: anime_meta;
}>;
    manga?: Array<{
/**
 * Person's position
 */
position?: string;
manga?: manga_meta;
}>;
    voices?: Array<{
/**
 * Person's Character's role in the anime
 */
role?: string;
anime?: anime_meta;
character?: character_meta;
}>;
};