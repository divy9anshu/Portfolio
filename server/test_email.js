import 'dotenv/config';
import { sendContactEmail } from './emailService.js';

async function testEmail() {
  console.log('----------------------------------------------------');
  console.log('🧪 Testing Portfolio Email Sending Service');
  console.log('----------------------------------------------------');
  console.log('Configured Sender (EMAIL_USER):', process.env.EMAIL_USER || '(Not set)');
  console.log('Configured Recipient (CONTACT_RECEIVER_EMAIL):', process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER || 'divy9anshu@gmail.com');
  console.log('EMAIL_PASS provided?:', process.env.EMAIL_PASS ? '✅ Yes (configured)' : '❌ No (missing)');
  console.log('----------------------------------------------------');

  const sampleInquiry = {
    name: 'Recruiter Test',
    email: 'test-recruiter@example.com',
    phone: '+91-9876543210',
    subject: 'Full-Stack Developer Role Inquiry',
    message: 'Hello Divyanshu, This is a verification test message sent from your portfolio contact form.'
  };

  const result = await sendContactEmail(sampleInquiry);
  console.log('\n📬 Delivery Result:', result);

  if (result.sent) {
    console.log('\n🎉 SUCCESS! Test email has been sent directly to your email inbox.');
  } else if (result.reason === 'EMAIL_CREDENTIALS_MISSING') {
    console.log('\nℹ️ Please add your 16-character Google App Password in .env as EMAIL_PASS=xxxx xxxx xxxx xxxx to enable direct delivery.');
  } else {
    console.log('\n⚠️ Email send failed with error:', result.error);
  }
}

testEmail();
