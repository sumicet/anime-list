import { useState, useCallback } from 'react';
import useSWR from 'swr';
import { Anime, Pagination } from '../types';
import { useDebounce } from './useDebounce';

export type Input = string | null;

const fetcher = async (query: Input) =>
    (await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=5`)).json();

/**
 * @returns `input` The input value
 * @returns `query` The current search query
 * @returns `data` The search results
 * @returns `error`
 * @returns `isLoading`
 */
export function useSearch() {
    const [input, setInput] = useState<Input>(null);
    const [query, setQuery] = useState<Input>(null);

    const results = useSWR<{ data: Anime[]; pagination: Pagination }>(query, () => fetcher(query));
    const { data, error } = results;
    // Too bad swr doesn't provide an `isLoading` prop
    const isLoading = !error && !data;

    const setDebouncedQuery = useDebounce(setQuery, 300);

    const handleChange = useCallback(
        (newInput: Input) => {
            setInput(newInput);
            setDebouncedQuery(newInput);
        },
        [setDebouncedQuery]
    );

    return { input, onChange: handleChange, query, ...results, isLoading };
}
