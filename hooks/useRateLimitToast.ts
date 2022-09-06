import { useEffect } from 'react';
import { toast } from 'react-toastify';

/**
 * @param status
 *
 * Shows a message that tells the user to refresh the page when rate limits occur
 */
export function useRateLimitToast(status?: string) {
    useEffect(() => {
        if (status === '429') {
            toast('Experiencing rate-limiting issues. Please refresh the page.', {
                toastId: 'rate-limit',
            });
        }
    }, [status]);
}
