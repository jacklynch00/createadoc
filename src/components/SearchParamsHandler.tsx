'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export function SearchParamsHandler() {
	const searchParams = useSearchParams();

	useEffect(() => {
		const success = searchParams.get('success');
		if (success === 'true') {
			toast.success('🎉 Thanks for joining the waitlist!', {
				description: "We'll notify you as soon as CreateADoc is ready!",
				duration: 3_000,
			});
		}
	}, [searchParams]);

	return null;
}
