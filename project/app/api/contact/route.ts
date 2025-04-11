import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from the API' });
}

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();
    
    // メール送信のロジックは削除し、成功レスポンスを返す
    return NextResponse.json({ 
      success: true,
      message: 'お問い合わせを受け付けました'
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}