import app from './app.js';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`\n🚀 Backend REST API running on http://localhost:${PORT}`);
  console.log(`📡 Endpoints available at: http://localhost:${PORT}/api/profile, /api/projects, /api/testimonials, /api/contact\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n⚠️  Port ${PORT} is already in use by another process.`);
    console.error(`👉 Run this in PowerShell to free port ${PORT}:`);
    console.error(`   Get-NetTCPConnection -LocalPort ${PORT} | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }\n`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
});
