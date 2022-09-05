/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pagination } from './pagination';

/**
 * Anime Episodes Resource
 */
export type anime_episodes = ({
data?: Array<{
/**
 * MyAnimeList ID
 */
mal_id?: number;
/**
 * MyAnimeList URL
 */
url?: string;
/**
 * Title
 */
title?: string;
/**
 * Title Japanese
 */
title_japanese?: string | null;
/**
 * title_romanji
 */
title_romanji?: string | null;
/**
 * Episode duration in seconds
 */
duration?: number | null;
/**
 * Aired Date ISO8601
 */
aired?: string | null;
/**
 * Filler episode
 */
filler?: boolean;
/**
 * Recap episode
 */
recap?: boolean;
/**
 * Episode discussion forum URL
 */
forum_url?: string | null;
}>;
} & pagination);