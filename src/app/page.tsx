import { Suspense } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProductPreviewSection } from '@/components/ProductPreviewSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ExampleOutputSection } from '@/components/ExampleOutputSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { SearchParamsHandler } from '@/components/SearchParamsHandler';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Suspense fallback={null}>
				<SearchParamsHandler />
			</Suspense>
			<HeroSection />
			<ProductPreviewSection />
			<ProblemSection />
			<SolutionSection />
			<div id='how-it-works'>
				<HowItWorksSection />
			</div>
			<BenefitsSection />
			<div id='examples'>
				<ExampleOutputSection />
			</div>
			<CTASection />
			<Footer />
		</main>
	);
}
