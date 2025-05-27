'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Waitlist, useUser } from '@clerk/nextjs';

export function CTASection() {
	const { isSignedIn } = useUser();

	return (
		<section id='waitlist-section' className='py-20 px-8 bg-muted/30'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>Ready to stop guessing and start building?</h2>
				<p className='text-xl text-muted-foreground mb-12 max-w-2xl mx-auto'>Join the waitlist and be the first to use CreateADoc.</p>

				<Card className='border-0 shadow-lg rounded-xl bg-card max-w-md mx-auto'>
					<CardContent className='p-8'>
						{isSignedIn ? (
							<div className='text-center'>
								<p className='text-lg text-muted-foreground mb-4'>
									You&apos;re all set! We&apos;ll notify you when CreateADoc is ready to help you build better with AI.
								</p>
								<div className='w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto'>✓</div>
							</div>
						) : (
							<div className='waitlist-container'>
								<Waitlist
									afterJoinWaitlistUrl='/'
									appearance={{
										elements: {
											formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl',
											card: 'shadow-none border-0',
											headerTitle: 'hidden',
											headerSubtitle: 'hidden',
										},
									}}
								/>
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
