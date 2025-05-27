export function ProblemSection() {
	const problems = ['The AI builds the wrong thing', "You don't know what to ask next", 'You get stuck in loops or fixing vague bugs'];

	return (
		<section className='py-20 px-8 bg-muted/30'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-8'>Are you spending more time fixing AI mistakes than building?</h2>
				<p className='text-xl text-muted-foreground mb-12 leading-relaxed'>
					AI tools like Cursor are powerful — but if you don&apos;t tell them exactly what you want, things can go off the rails.
				</p>

				<div className='grid md:grid-cols-3 gap-6'>
					{problems.map((problem, index) => (
						<div key={index} className='bg-card p-6 rounded-xl border border-destructive/20'>
							<div className='w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-destructive text-xl'>⚠️</span>
							</div>
							<p className='text-foreground font-medium'>{problem}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
