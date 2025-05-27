export function Footer() {
	return (
		<footer className='py-12 px-8 bg-card border-t border-border'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-6 md:mb-0'>
						<h3 className='text-xl font-bold text-foreground'>Create A Doc</h3>
						<p className='text-muted-foreground mt-2'>Turn ideas into code-ready docs</p>
					</div>

					<div className='flex flex-wrap justify-center md:justify-end gap-6 mb-6 md:mb-0'>
						<a href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
							About
						</a>
						<a href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
							Privacy
						</a>
						<a href='#' className='text-muted-foreground hover:text-foreground transition-colors'>
							Twitter/X
						</a>
					</div>
				</div>

				<div className='pt-6 mt-6 text-center'>
					<p className='text-muted-foreground'>Made with ❤️ for builders everywhere</p>
				</div>
			</div>
		</footer>
	);
}
