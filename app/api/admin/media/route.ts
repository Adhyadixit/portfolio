import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import { setMediaAsset } from '@/lib/media';

export async function POST(req: Request) {
    try {
        const cookieStore = (await Promise.resolve(cookies())) as any;
        const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
        const session = verifyAdminToken(token);

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { key, url } = await req.json();

        if (!key || !url) {
            return NextResponse.json({ error: 'Missing key or url' }, { status: 400 });
        }

        await setMediaAsset(key, url);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving media:', error);
        return NextResponse.json({ error: 'Failed to save media' }, { status: 500 });
    }
}
