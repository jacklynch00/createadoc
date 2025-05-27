import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProductPreviewSection() {
	return (
		<section className='py-12 md:py-20 px-4 md:px-8 bg-background'>
			<div className='max-w-7xl mx-auto'>
				{/* Dashboard Mockup */}
				<div className='bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl border'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
						{/* Left Panel - Project Creation */}
						<Card className='lg:col-span-1 border-0 shadow-lg'>
							<CardHeader className='pb-4'>
								<CardTitle className='text-xl font-bold text-foreground'>What Do You Want To Build?</CardTitle>
								<p className='text-sm text-muted-foreground'>
									Describe your project in detail. The more specific you are, the better we can help you bring your vision to life.
								</p>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='space-y-2'>
									<p className='text-sm font-medium text-foreground'>Try To Include:</p>
									<div className='flex flex-wrap gap-2'>
										<Badge variant='secondary' className='text-xs'>
											Purpose
										</Badge>
										<Badge variant='secondary' className='text-xs'>
											Target Audience
										</Badge>
										<Badge variant='secondary' className='text-xs'>
											Key Features
										</Badge>
										<Badge variant='secondary' className='text-xs'>
											Design Preferences
										</Badge>
									</div>
								</div>

								<div className='bg-muted/50 p-4 rounded-lg'>
									<p className='text-sm text-muted-foreground italic'>
										&quot;I want to build a modern task management app with team collaboration features and real-time updates...&quot;
									</p>
								</div>

								<div className='flex flex-col sm:flex-row gap-2'>
									<Button variant='outline' size='sm' className='text-xs flex-1'>
										Mic
									</Button>
									<Button variant='outline' size='sm' className='text-xs flex-1'>
										Refine
									</Button>
								</div>

								<Button className='w-full bg-primary hover:bg-primary/90'>Next Step</Button>
							</CardContent>
						</Card>

						{/* Middle Panel - Stats & Progress */}
						<div className='md:col-span-1 lg:col-span-1 space-y-4 md:space-y-6'>
							<div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
								<Card className='border-0 shadow-lg'>
									<CardContent className='p-4 md:p-6'>
										<div className='text-center'>
											<p className='text-xs md:text-sm text-muted-foreground mb-1'>Time Saved</p>
											<p className='text-2xl md:text-3xl font-bold text-primary'>12.3 Hours</p>
											<p className='text-xs text-muted-foreground'>+2.1 hours from last project</p>
										</div>
									</CardContent>
								</Card>

								<Card className='border-0 shadow-lg'>
									<CardContent className='p-4 md:p-6'>
										<div className='text-center'>
											<p className='text-xs md:text-sm text-muted-foreground mb-1'>AI Prompts Generated</p>
											<p className='text-2xl md:text-3xl font-bold text-accent'>847</p>
											<p className='text-xs text-muted-foreground'>+156 from last project</p>
										</div>
									</CardContent>
								</Card>
							</div>

							<Card className='border-0 shadow-lg md:col-span-2 lg:col-span-1'>
								<CardHeader className='pb-3'>
									<CardTitle className='text-base md:text-lg font-semibold'>AI Clarity Score</CardTitle>
									<p className='text-xs md:text-sm text-muted-foreground'>How clear are your prompts to AI tools?</p>
								</CardHeader>
								<CardContent className='space-y-3 md:space-y-4'>
									<div className='flex items-center justify-between'>
										<span className='text-xs md:text-sm font-medium'>Current Project</span>
										<div className='flex items-center gap-2'>
											<div className='w-12 md:w-16 h-2 bg-muted rounded-full overflow-hidden'>
												<div className='w-3/4 h-full bg-green-500 rounded-full'></div>
											</div>
											<span className='text-xs font-bold text-green-600'>85%</span>
										</div>
									</div>

									<div className='space-y-2'>
										<div className='flex items-center justify-between text-xs'>
											<span className='text-muted-foreground'>✅ Clear requirements</span>
											<span className='text-green-600'>Good</span>
										</div>
										<div className='flex items-center justify-between text-xs'>
											<span className='text-muted-foreground'>⚠️ Missing edge cases</span>
											<span className='text-yellow-600'>Needs work</span>
										</div>
										<div className='flex items-center justify-between text-xs'>
											<span className='text-muted-foreground'>✅ Tech stack defined</span>
											<span className='text-green-600'>Good</span>
										</div>
									</div>

									<div className='pt-3 border-t border-border'>
										<div className='bg-accent/10 p-3 rounded-lg'>
											<p className='text-xs text-accent font-medium mb-1'>💡 Suggestion</p>
											<p className='text-xs text-muted-foreground'>Add user authentication flow details to improve AI accuracy by 12%</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Right Panel - Documentation Output */}
						<Card className='md:col-span-2 lg:col-span-1 border-0 shadow-lg'>
							<CardHeader className='pb-4'>
								<CardTitle className='text-lg md:text-xl font-bold text-foreground'>Download Docs</CardTitle>
							</CardHeader>
							<CardContent className='space-y-3 md:space-y-4'>
								<Button className='w-full bg-primary hover:bg-primary/90 text-white'>PRD</Button>

								<div className='space-y-2 md:space-y-3'>
									<div className='flex items-center justify-between p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/20'>
										<span className='text-xs md:text-sm font-medium text-accent'>Tech Stack</span>
										<span className='text-xs text-muted-foreground'>→</span>
									</div>

									<div className='flex items-center justify-between p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/20'>
										<span className='text-xs md:text-sm font-medium text-accent'>Project Structure</span>
										<span className='text-xs text-muted-foreground'>→</span>
									</div>

									<div className='flex items-center justify-between p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/20'>
										<span className='text-xs md:text-sm font-medium text-accent'>Schema Design</span>
										<span className='text-xs text-muted-foreground'>→</span>
									</div>

									<div className='flex items-center justify-between p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/20'>
										<span className='text-xs md:text-sm font-medium text-accent'>User Flow</span>
										<span className='text-xs text-muted-foreground'>→</span>
									</div>

									<div className='flex items-center justify-between p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/20'>
										<span className='text-xs md:text-sm font-medium text-accent'>Styling</span>
										<span className='text-xs text-muted-foreground'>→</span>
									</div>
								</div>

								<div className='pt-4 border-t border-border'>
									<Button variant='outline' className='w-full text-accent border-accent/30 hover:bg-accent/10'>
										+ Custom Doc
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
