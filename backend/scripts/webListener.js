const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');
const dotenv = require('dotenv');
dotenv.config();
// Your secret token from GitHub webhook settings
const secret = process.env.WEB_HOOK;

function verifySignature(req, body) {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) return false;
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(body).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      if (!verifySignature(req, body)) {
        res.writeHead(401);
        return res.end('Invalid signature');
      }

      // Optionally parse body and check event type if you want
      exec('/home/ec2-user/deploy.sh', (error, stdout, stderr) => {
        if (error) {
          console.error(`Deploy error: ${error.message}`);
          return;
        }
        console.log(`Deploy output: ${stdout}`);
      });

      res.writeHead(200);
      res.end('Deploy triggered');
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Webhook listener running on port 3000');
});
