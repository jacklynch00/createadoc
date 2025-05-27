import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import Image from 'next/image';

export function HeroSection() {
	const scrollToWaitlist = () => {
		const waitlistSection = document.getElementById('waitlist-section');
		waitlistSection?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className='min-h-screen flex flex-col bg-background'>
			{/* Main Hero Content */}
			<div className='flex flex-col items-center justify-center pt-20'>
				<div className='flex items-center justify-center'>
					<Badge variant='outline' className='text-sm hover:cursor-pointer' onClick={scrollToWaitlist}>
						😱 Join Our Waitlist - Perfect for AI Builders!
						<span className='text-primary font-medium cursor-pointer'>→</span>
					</Badge>
				</div>
				<div className='flex-1 flex items-center justify-center px-6 pb-20'>
					<div className='max-w-5xl mx-auto text-center'>
						<h1 className='text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight'>
							Build Smarter with AI — <br />
							<span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>No Templates Needed</span>
						</h1>
						<p className='text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed'>
							CreateADoc asks you a few simple questions to generate crystal-clear docs that help AI tools <b>stay on track</b>.
						</p>
						<Button variant='default' onClick={scrollToWaitlist} size='lg'>
							Request Early Access
						</Button>
					</div>
				</div>
			</div>

			{/* Partner Logos Section */}
			<div className='border-t border-border bg-muted/30 py-12 overflow-hidden'>
				<div className='max-w-7xl mx-auto px-6'>
					<p className='text-center text-muted-foreground'>Works with your favorite tools</p>
					<div className='relative w-full overflow-hidden'>
						<div className='flex animate-scroll items-center whitespace-nowrap'>
							{/* First set of logos */}
							<div className='flex items-center gap-8 md:gap-12 flex-shrink-0 px-4'>
								<Image src='/cursor.png' alt='Cursor logo' width={60} height={60} className='flex-shrink-0' />
								<Image src='/chatgpt.png' alt='ChatGPT logo' width={120} height={80} className='flex-shrink-0' />
								<Image src='/claude.png' alt='Claude logo' width={140} height={80} className='flex-shrink-0' />
								<Image src='/bolt.png' alt='Bolt logo' width={90} height={80} className='flex-shrink-0' />
								<Image src='/gemini.png' alt='Gemini logo' width={100} height={80} className='flex-shrink-0' />
								<Image src='/github-copilot.png' alt='GitHub Copilot logo' width={150} height={80} className='flex-shrink-0' />
								<Image src='/replit.png' alt='Replit logo' width={100} height={80} className='flex-shrink-0' />
								<Image src='/vscode.png' alt='VSCode logo' width={40} height={40} className='flex-shrink-0' />
								<Image src='/windsurf.png' alt='Windsurf logo' width={140} height={80} className='flex-shrink-0' />
								<Image src='/v0.png' alt='V0 logo' width={80} height={80} className='flex-shrink-0' />
								<Image src='/lovable.png' alt='Lovable logo' width={130} height={80} className='flex-shrink-0' />
							</div>
							{/* Duplicate set for seamless loop */}
							<div className='flex items-center gap-8 md:gap-12 flex-shrink-0 px-4'>
								<Image src='/cursor.png' alt='Cursor logo' width={60} height={60} className='flex-shrink-0' />
								<Image src='/chatgpt.png' alt='ChatGPT logo' width={120} height={80} className='flex-shrink-0' />
								<Image src='/claude.png' alt='Claude logo' width={140} height={80} className='flex-shrink-0' />
								<Image src='/bolt.png' alt='Bolt logo' width={90} height={80} className='flex-shrink-0' />
								<Image src='/gemini.png' alt='Gemini logo' width={100} height={80} className='flex-shrink-0' />
								<Image src='/github-copilot.png' alt='GitHub Copilot logo' width={150} height={80} className='flex-shrink-0' />
								<Image src='/replit.png' alt='Replit logo' width={100} height={80} className='flex-shrink-0' />
								<Image src='/vscode.png' alt='VSCode logo' width={40} height={40} className='flex-shrink-0' />
								<Image src='/windsurf.png' alt='Windsurf logo' width={140} height={80} className='flex-shrink-0' />
								<Image src='/v0.png' alt='V0 logo' width={80} height={80} className='flex-shrink-0' />
								<Image src='/lovable.png' alt='Lovable logo' width={130} height={80} className='flex-shrink-0' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
