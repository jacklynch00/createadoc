'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';

export function Navigation() {
	const handleJoinWaitlist = () => {
		const waitlistSection = document.getElementById('waitlist-section');
		waitlistSection?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<Link href='/'>
						<div className='flex items-center gap-2'>
							<div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
								<span className='text-primary-foreground font-bold text-sm'>📝</span>
							</div>
							<span className='text-xl font-bold text-foreground'>CreateADoc</span>
						</div>
					</Link>

					<div className='hidden md:flex items-center gap-8'>
						<a href='#how-it-works' className='text-muted-foreground hover:text-foreground transition-colors'>
							How It Works
						</a>
						<a href='#examples' className='text-muted-foreground hover:text-foreground transition-colors'>
							Examples
						</a>
					</div>

					<div className='flex items-center gap-4'>
						<SignedOut>
							<Button variant='outline' onClick={handleJoinWaitlist}>
								Join Waitlist
							</Button>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</div>
			</div>
		</nav>
	);
}
