'use client';

import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { SignupCounter } from './SignupCounter';
import Image from 'next/image';

export function HeroSection() {
	const scrollToWaitlist = () => {
		const waitlistSection = document.getElementById('waitlist-section');
		waitlistSection?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='flex flex-col bg-background'>
			{/* Main Hero Content */}
			<div className='flex flex-col items-center justify-center pt-20 pb-12'>
				<div className='flex items-center justify-center'>
					<Badge variant='outline' className='text-sm hover:cursor-pointer' onClick={scrollToWaitlist}>
						😱 Join Our Waitlist - Perfect for AI Builders!
						<span className='text-primary font-medium cursor-pointer'>→</span>
					</Badge>
				</div>
				<div className='flex-1 flex items-center justify-center px-4 md:px-6'>
					<div className='max-w-5xl mx-auto text-center'>
						<h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-2 leading-tight'>
							Vibe code the right way
							<br />
							<span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>No Templates Needed</span>
						</h1>
						<p className='text-lg text-muted-foreground mb-4 md:mb-8 max-w-4xl mx-auto leading-relaxed'>
							Answer a few simple questions to create
							<br className='hidden md:block' /> <b>simple docs</b> that help AI tools <i>stay on track</i>.
						</p>
						<Button variant='default' onClick={scrollToWaitlist} size='lg'>
							Request Early Access
						</Button>
					</div>
				</div>

				{/* Signup Counter */}
				<div className='flex justify-center py-2 md:py-4'>
					<SignupCounter className='max-w-sm mx-auto' />
				</div>
			</div>

			{/* Partner Logos Section */}
			<div className='overflow-hidden'>
				<div className='max-w-7xl mx-auto px-4 md:px-6'>
					<div className='relative w-full overflow-hidden'>
						<div className='flex animate-scroll items-center whitespace-nowrap'>
							{/* First set of logos */}
							<div className='flex items-center gap-6 md:gap-8 lg:gap-12 flex-shrink-0 px-4'>
								<Image src='/cursor.png' alt='Cursor logo' width={60} height={60} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/chatgpt.png' alt='ChatGPT logo' width={120} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/claude.png' alt='Claude logo' width={140} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/bolt.png' alt='Bolt logo' width={90} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/gemini.png' alt='Gemini logo' width={100} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image
									src='/github-copilot.png'
									alt='GitHub Copilot logo'
									width={150}
									height={80}
									className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain'
								/>
								<Image src='/replit.png' alt='Replit logo' width={100} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/vscode.png' alt='VSCode logo' width={40} height={40} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/windsurf.png' alt='Windsurf logo' width={140} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/v0.png' alt='V0 logo' width={80} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/lovable.png' alt='Lovable logo' width={130} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
							</div>
							{/* Duplicate set for seamless loop */}
							<div className='flex items-center gap-6 md:gap-8 lg:gap-12 flex-shrink-0 px-4'>
								<Image src='/cursor.png' alt='Cursor logo' width={60} height={60} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/chatgpt.png' alt='ChatGPT logo' width={120} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/claude.png' alt='Claude logo' width={140} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/bolt.png' alt='Bolt logo' width={90} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/gemini.png' alt='Gemini logo' width={100} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image
									src='/github-copilot.png'
									alt='GitHub Copilot logo'
									width={150}
									height={80}
									className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain'
								/>
								<Image src='/replit.png' alt='Replit logo' width={100} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/vscode.png' alt='VSCode logo' width={40} height={40} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/windsurf.png' alt='Windsurf logo' width={140} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/v0.png' alt='V0 logo' width={80} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
								<Image src='/lovable.png' alt='Lovable logo' width={130} height={80} className='flex-shrink-0 h-8 md:h-12 w-16 md:w-24 object-contain' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
