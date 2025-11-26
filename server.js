// server.js
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 4000;

// --- Seguridad básica ---
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "'unsafe-inline'",
          "*.googleadservices.com",
          "*.google.com",
          "pagead2.googlesyndication.com"
        ],
        "style-src": ["'self'", "'unsafe-inline'"],
        "img-src": [
          "'self'",
          "data:",
          "https://*",
          "*.google.com",
          "*.googleadservices.com",
          "*.googlesyndication.com"
        ],
        "frame-src": [
          "'self'",
          "*.google.com",
          "*.googlesyndication.com"
        ],
        "connect-src": ["'self'"],
        "frame-ancestors": ["'self'"],
      },
    },
  })
);

// Rate limiting
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 150,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Compression
app.use(compression());

app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? (process.env.ALLOWED_ORIGIN || '*') : [
      "http://localhost:4000",
      "http://127.0.0.1:4000",
    ],
  })
);

// --- Archivos estáticos ---
const staticDir = process.env.NODE_ENV === 'production'
  ? path.join(__dirname, "dist")
  : path.join(__dirname, "public");

// Ruta explícita para ads.txt (CRÍTICO para AdSense)
app.get('/ads.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(staticDir, 'ads.txt'));
});

app.use(express.static(staticDir, {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
  etag: true,
}));

app.listen(PORT, () => {
  console.log(`GTA 6 countdown corriendo en http://127.0.0.1:${PORT}`);
});
