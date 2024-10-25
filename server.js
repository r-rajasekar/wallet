// server.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));
app.use(express.static(join(__dirname, 'public')));

// Add this before app.get('*', ...)
app.get('/tonconnect-manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        url: 'https://wallet-3cby.onrender.com',
        name: "Your App Name",
        iconUrl: "https://ton.org/download/ton_symbol.png",
        manifestVersion: 2,
        capabilities: {
            ton_addr: {
                required: true,
                chainIds: [1]
            }
        },
        returnStrategy: "back"
    });
});

// Handle all routes by serving index.html
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});
