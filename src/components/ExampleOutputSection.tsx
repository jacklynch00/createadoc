import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ExampleOutputSection() {
	return (
		<section className='py-20 px-8 bg-background'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-bold text-center text-foreground mb-16'>See the difference</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<Card className='border-0 shadow-lg rounded-xl bg-card'>
						<CardHeader className='pb-4'>
							<CardTitle className='text-xl font-semibold text-foreground flex items-center gap-2'>
								<span className='w-3 h-3 bg-destructive rounded-full'></span>
								You say:
							</CardTitle>
						</CardHeader>
						<CardContent className='pt-0'>
							<div className='bg-muted p-6 rounded-lg'>
								<p className='text-muted-foreground italic'>
									&quot;I want to build a signup page that checks for duplicate emails and sends a confirmation email.&quot;
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className='border-0 shadow-lg rounded-xl bg-card'>
						<CardHeader className='pb-4'>
							<CardTitle className='text-xl font-semibold text-foreground flex items-center gap-2'>
								<span className='w-3 h-3 bg-green-500 rounded-full'></span>
								CreateADoc builds:
							</CardTitle>
						</CardHeader>
						<CardContent className='pt-0'>
							<div className='bg-accent/20 p-6 rounded-lg'>
								<p className='text-foreground font-mono text-sm leading-relaxed'>
									# Signup Endpoint Specification Turn this into a working endpoint using your preferred stack (Node, Python, etc.). This prompt is designed to
									work well with AI dev tools like Cursor or GPT-based agents. <br />
									<br />
									--- ## 1. **Endpoint** `POST /signup` --- <br />
									### 2. **Request Body** (JSON)
									<br />
									{'{'}
									<br />
									&quot;email&quot;: &quot;string&quot;,
									<br /> &quot;password&quot;: &quot;string&quot;
									<br />
									{'}'}
									<br />
									...
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
