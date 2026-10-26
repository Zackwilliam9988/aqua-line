const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

const server = http.createServer((req, res) => {
    // Enable CORS and disable cache during development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath === '/') {
        reqPath = '/index.html';
    }

    let filePath = path.join(BASE_DIR, reqPath);

    // If directory, look for index.html inside it
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        const dirIndex = path.join(filePath, 'index.html');
        if (fs.existsSync(dirIndex)) {
            filePath = dirIndex;
        }
    } else if (!fs.existsSync(filePath)) {
        if (fs.existsSync(filePath + '.html')) {
            filePath += '.html';
        } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
            filePath = path.join(filePath, 'index.html');
        }
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>404 Not Found | PLUMPK.COM</title>
                    <style>
                        body { background: #000; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                        .box { text-align: center; }
                        h1 { color: #ef233c; font-size: 3rem; margin-bottom: 0.5rem; }
                        p { color: #888; }
                        a { color: #ef233c; text-decoration: none; border-bottom: 1px solid #ef233c; }
                    </style>
                </head>
                <body>
                    <div class="box">
                        <h1>404</h1>
                        <p>Page Not Found</p>
                        <p><a href="/">Return to Home</a></p>
                    </div>
                </body>
                </html>
            `);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    const localIp = getLocalIp();
    console.log(`\n==================================================`);
    console.log(`  🚀 PLUMPK.COM (Plumbers Pakistan) Server Running!`);
    console.log(`==================================================`);
    console.log(`  > Local:   http://localhost:${PORT}`);
    console.log(`  > Network: http://${localIp}:${PORT}`);
    console.log(`==================================================\n`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        const nextPort = Number(PORT) + 1;
        console.log(`Port ${PORT} in use, trying ${nextPort}...`);
        server.listen(nextPort, '0.0.0.0');
    } else {
        console.error('Server error:', err);
    }
});
