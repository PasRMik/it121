import http from 'http';
const PORT = 3000;
const APP_NAME = "Mikapp";

// Creation of the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Route handler
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(`Welcome to ${APP_NAME}! This is the home page.`);
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end(`About ${APP_NAME}: My name is Pascal-Ricky Mikulu, and I am a software developer student.`);
  } else {
    res.statusCode = 404;
    res.end('404 - Page not found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`${APP_NAME} is running on http://localhost:${PORT}`);
});