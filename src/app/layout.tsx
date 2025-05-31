import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Toaster } from 'sonner';
import { PostHogProvider } from '@/components/PostHogProvider';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'CreateADoc - Turn ideas into code-ready docs',
	description: 'CreateADoc helps you generate buildable AI specs through smart, structured questions — no fluff, no bloat.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider waitlistUrl='/waitlist'>
			<html lang='en'>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<PostHogProvider>
						<Navigation />
						<div className='pt-20'>{children}</div>
						<Toaster position='top-right' />
					</PostHogProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
