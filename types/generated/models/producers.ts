/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pagination } from './pagination';
import type { producer } from './producer';

/**
 * Producers Collection Resource
 */
export type producers = ({
data?: Array<producer>;
} & pagination);
