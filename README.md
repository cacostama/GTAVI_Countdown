# GTAVI Countdown

A lightweight web application that displays a live countdown to the release of **Grand Theft Auto VI**. The project is built with **Node.js**, **Express**, and vanilla front‑end assets.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Real‑time countdown timer
- Responsive design using vanilla CSS
- Basic security hardening with `helmet`, rate limiting and compression
- Ready for deployment on Vercel or any Node.js host

## Demo
A live demo is hosted at **`https://gtavitime.live`** (replace with your actual URL if different).

## Installation
```bash
# Clone the repository (if you haven't already)
git clone https://github.com/cacostama/GTAVI_Countdown.git
cd GTAVI_Countdown

# Install dependencies
npm install
```

## Running Locally
```bash
# Development mode (default port 4000)
npm run dev
# Or directly with Node
node server.js
```
Open your browser at `http://localhost:4000`.

## Deployment
The app can be deployed to **Vercel**, **Heroku**, or any platform that supports Node.js.
1. Push the repository to GitHub.
2. Connect the repo to your Vercel project.
3. Vercel will automatically run `npm install` and start the server.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes with clear messages.
4. Open a Pull Request.

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.
