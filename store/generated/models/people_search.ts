/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pagination_plus } from './pagination_plus';
import type { person } from './person';

/**
 * People Search
 */
export type people_search = ({
data?: Array<person>;
} & pagination_plus);
