export function HowItWorksSection() {
	const steps = [
		{
			number: '1',
			title: 'Answer a few structured questions',
			description: 'We guide you through understanding exactly what you want to build, no technical expertise required.',
		},
		{
			number: '2',
			title: 'CreateADoc turns your answers into a crystal-clear prompt',
			description: 'Get a focused, detailed specification that removes all the guesswork for AI tools.',
		},
		{
			number: '3',
			title: 'Paste it into your favorite AI dev tool',
			description: 'Build better, faster, with fewer detours. Your AI assistant finally knows exactly what you want.',
		},
	];

	return (
		<section className='py-20 px-8 bg-background'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-bold text-center text-foreground mb-16'>How It Works</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{steps.map((step, index) => (
						<div key={index} className='text-center'>
							<div className='mb-6'>
								<div className='w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
									{step.number}
								</div>
								<h3 className='text-xl font-semibold text-foreground mb-4'>{step.title}</h3>
								<p className='text-muted-foreground leading-relaxed'>{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
