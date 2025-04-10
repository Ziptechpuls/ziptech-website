import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Gmailのトランスポーターを作成
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ziptech.plus@gmail.com',
    // Gmailのアプリパスワードを設定
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    const mailOptions = {
      from: 'ziptech.plus@gmail.com',
      to: 'ziptech.plus@gmail.com',
      subject: `お問い合わせ: ${name}様より`,
      text: `
名前: ${name}
メールアドレス: ${email}
会社名: ${company}

お問い合わせ内容:
${message}
      `,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'メールを送信しました' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
}