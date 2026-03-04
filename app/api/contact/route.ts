import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const { fullName, organization, title, email, inquiryType, message } = body;

  if (!fullName || !organization || !email || !inquiryType || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 });
  }

  await db`
    INSERT INTO lead_submissions (full_name, organization, title, email, inquiry_type, message)
    VALUES (${fullName}, ${organization}, ${title ?? ''}, ${email}, ${inquiryType}, ${message})
  `;

  return NextResponse.json({ success: true });
}
