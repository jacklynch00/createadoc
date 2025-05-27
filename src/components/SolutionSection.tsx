export function SolutionSection() {
	return (
		<section className='py-20 px-8 bg-background'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-8'>
					That&apos;s where <span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>CreateADoc</span> comes in.
				</h2>
				<p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
					Instead of just giving you templates, we ask the right questions to understand what you&apos;re trying to build.
				</p>
				<p className='text-xl text-muted-foreground leading-relaxed'>
					Then we generate a clear, focused spec you can feed into Cursor, Windsurf, or any other AI tool to guide it — and avoid confusion.
				</p>
			</div>
		</section>
	);
}
