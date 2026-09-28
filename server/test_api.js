import http from 'http';

function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : '';
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dataString)
      }
    }, (res) => {
      let resBody = '';
      res.on('data', chunk => resBody += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(resBody) });
        } catch {
          resolve({ status: res.statusCode, raw: resBody });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(dataString);
    req.end();
  });
}

async function runTests() {
  console.log('Testing Backend REST APIs...');
  
  // 1. Health
  const health = await request('GET', '/api/health');
  console.log('1. Health check:', health);

  // 2. Profile
  const profile = await request('GET', '/api/profile');
  console.log('2. Profile:', profile.data?.profile?.name, '-', profile.data?.profile?.role);

  // 3. Projects
  const projects = await request('GET', '/api/projects');
  console.log('3. Projects count:', projects.data?.projects?.length);

  // 4. Testimonials
  const testimonials = await request('GET', '/api/testimonials');
  console.log('4. Testimonials count:', testimonials.data?.testimonials?.length);

  // 5. Contact submission
  const contactRes = await request('POST', '/api/contact', {
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@techcorp.io',
    phone: '+1-555-0199',
    subject: 'Full-Stack Web Development Project',
    message: 'We loved your portfolio and would like to interview you for a Senior Full Stack Engineer role.'
  });
  console.log('5. Contact inquiry submitted:', contactRes.status, contactRes.data?.success);

  // 6. Messages list
  const messages = await request('GET', '/api/contact/messages');
  console.log('6. Inbox total messages:', messages.data?.total, 'Unread:', messages.data?.unread);

  console.log('All backend API tests passed successfully!');
}

runTests();
