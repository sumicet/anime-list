/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { mal_url } from './mal_url';

/**
 * Related resources
 */
export type relation = {
    /**
     * Relation type
     */
    relation?: string;
    /**
     * Related entries
     */
    entry?: Array<mal_url>;
};
