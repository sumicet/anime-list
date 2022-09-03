/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { common_images } from './common_images';

/**
 * Producers Resource
 */
export type producer = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    /**
     * All titles
     */
    titles?: Array<string>;
    images?: common_images;
    /**
     * Producers's member favorites count
     */
    favorites?: number;
    /**
     * Producers's anime count
     */
    count?: number;
    /**
     * Established Date ISO8601
     */
    established?: string | null;
    /**
     * About the Producer
     */
    about?: string | null;
};
