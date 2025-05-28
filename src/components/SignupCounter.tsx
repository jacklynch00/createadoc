'use client';

import { Badge } from '@/components/ui/badge';
import { Clock, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SignupCounterProps {
	maxSignups?: number;
	showProgressBar?: boolean;
	showBadges?: boolean;
	className?: string;
}

export function SignupCounter({ maxSignups = 100, showProgressBar = true, showBadges = true, className = '' }: SignupCounterProps) {
	const [currentSignups, setCurrentSignups] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const spotsRemaining = maxSignups - currentSignups;
	const percentageFilled = (currentSignups / maxSignups) * 100;

	// Fetch real signup count from Clerk
	useEffect(() => {
		const fetchSignupCount = async () => {
			try {
				const response = await fetch('/api/waitlist-count');
				const data = await response.json();

				if (data.success && typeof data.count === 'number') {
					setCurrentSignups(Math.min(Math.max(data.count, 17), maxSignups));
				}
			} catch (error) {
				console.error('Failed to fetch signup count:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchSignupCount();
	}, [maxSignups]);

	return (
		<div className={`bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-200 dark:border-orange-800 rounded-xl p-4 md:p-6 ${className}`}>
			{showBadges && (
				<div className='flex items-center justify-center gap-2 mb-3'>
					<Badge variant='destructive' className='animate-pulse'>
						<Clock className='w-3 h-3 mr-1' />
						Limited Access
					</Badge>
					<Badge variant='outline' className='border-orange-300 text-orange-700 dark:text-orange-300'>
						<Zap className='w-3 h-3 mr-1' />
						Early Bird
					</Badge>
				</div>
			)}

			<div className='space-y-3'>
				<div className='flex items-center justify-center gap-2 text-sm md:text-base font-medium text-foreground'>
					<Users className='w-4 h-4 text-orange-500' />
					{isLoading ? (
						<span className='animate-pulse'>Loading spots...</span>
					) : (
						<span>
							{spotsRemaining} spots remaining out of {maxSignups}
						</span>
					)}
				</div>

				{showProgressBar && (
					<>
						{/* Progress Bar */}
						<div className='w-full bg-muted rounded-full h-2 overflow-hidden'>
							<div className='h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 ease-out' style={{ width: `${percentageFilled}%` }} />
						</div>

						<p className='text-xs md:text-sm text-muted-foreground'>🔥 Join now to secure your early access!</p>
					</>
				)}
			</div>
		</div>
	);
}
