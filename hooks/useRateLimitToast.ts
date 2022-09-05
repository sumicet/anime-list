import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function useRateLimitToast(status?: string) {
    useEffect(() => {
        if (status === '429') {
            toast('Experiencing rate-limiting issues. Please refresh the page.', {
                toastId: 'rate-limit',
            });
        }
    }, [status]);
}
