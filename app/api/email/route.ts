// app/api/send-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { generateAccessCode } from '../../utils/generateAccessCode';
import { sendEmail } from '../../utils/sendEmail';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();
    const accessCode = generateAccessCode();
    const message = `Olá ${name},\n\nSeu código de acesso é: ${accessCode}`;

    await sendEmail(email, 'Seu código de acesso', message);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}
