'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Waitlist, useUser } from '@clerk/nextjs';
import { SignupCounter } from '@/components/SignupCounter';

export function CTASection() {
	const { isSignedIn } = useUser();

	return (
		<section id='waitlist-section' className='py-12 md:py-20 px-4 md:px-8 bg-muted/30'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight'>Ready to stop guessing and start building?</h2>
				<p className='text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4'>Join the waitlist and be the first to use CreateADoc.</p>

				{/* Urgency Component */}
				<div className='mb-8 md:mb-12'>
					<SignupCounter className='max-w-md mx-auto mb-4' />
				</div>

				{isSignedIn ? (
					<Card className='border-0 shadow-lg rounded-xl bg-card max-w-md mx-auto'>
						<CardContent className='p-6 md:p-8'>
							<div className='text-center'>
								<p className='text-base md:text-lg text-muted-foreground mb-4'>
									You&apos;re all set! We&apos;ll notify you when CreateADoc is ready to help you build better with AI.
								</p>
								<div className='w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto'>✓</div>
							</div>
						</CardContent>
					</Card>
				) : (
					<div className='waitlist-container mx-auto max-w-sm'>
						<Waitlist
							afterJoinWaitlistUrl='/?success=true'
							appearance={{
								elements: {
									formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm md:text-base',
									card: 'shadow-none border-0',
									headerTitle: 'hidden',
									headerSubtitle: 'hidden',
									formFieldInput: 'text-sm md:text-base py-3 px-4',
								},
							}}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
