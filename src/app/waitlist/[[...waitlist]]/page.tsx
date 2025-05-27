import { Waitlist } from '@clerk/nextjs';

export default function WaitlistPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div className='text-center'>
					<h2 className='mt-6 text-3xl font-extrabold text-gray-900'>Join the CreateADoc Waitlist</h2>
					<p className='mt-2 text-sm text-gray-600'>Be the first to know when we launch</p>
				</div>
				<Waitlist
					afterJoinWaitlistUrl='/'
					appearance={{
						elements: {
							formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white rounded-lg',
							card: 'shadow-lg border border-gray-200 rounded-lg',
						},
					}}
				/>
			</div>
		</div>
	);
}
