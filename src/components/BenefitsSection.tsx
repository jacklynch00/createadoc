export function BenefitsSection() {
	const benefits = [
		{
			icon: '🐛',
			title: 'Reduce time spent debugging',
			description: 'Get it right the first time with clear specifications',
		},
		{
			icon: '💬',
			title: 'Know exactly what to tell your AI',
			description: 'No more guessing what prompts will work',
		},
		{
			icon: '🎯',
			title: 'Avoid hallucinations and vague answers',
			description: 'Crystal-clear instructions lead to accurate results',
		},
		{
			icon: '🚀',
			title: "Build confidently, even if you're not technical",
			description: 'Our questions guide you to professional-level specs',
		},
	];

	return (
		<section className='py-20 px-8 bg-muted/30'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-bold text-center text-foreground mb-16'>Key Benefits</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{benefits.map((benefit, index) => (
						<div key={index} className='text-center'>
							<div className='text-4xl mb-4'>{benefit.icon}</div>
							<h3 className='text-lg font-semibold text-foreground mb-3'>{benefit.title}</h3>
							<p className='text-muted-foreground text-sm leading-relaxed'>{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
