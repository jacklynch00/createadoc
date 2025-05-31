import { HeroSection } from '@/components/HeroSection';
import { ProductPreviewSection } from '@/components/ProductPreviewSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ExampleOutputSection } from '@/components/ExampleOutputSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
	return (
		<main className='min-h-screen'>
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
