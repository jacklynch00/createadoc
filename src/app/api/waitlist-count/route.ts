import { clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		// Get the total count of users from Clerk
		const client = await clerkClient();
		const users = await client.waitlistEntries.list();

		console.log('users', users);

		return NextResponse.json({
			count: users.totalCount,
			success: true,
		});
	} catch (error) {
		console.error('Error fetching user count:', error);
		return NextResponse.json({ error: 'Failed to fetch user count', success: false }, { status: 500 });
	}
}
