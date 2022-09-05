/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { anime } from './anime';
import type { pagination_plus } from './pagination_plus';

/**
 * Anime Collection Resource
 */
export type anime_search = ({
data?: Array<anime>;
} & pagination_plus);
