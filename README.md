BitCipher

BitCipher is a minimal, privacy-focused web application for secure text encryption, decryption, and strong password generation, built with Next.js and Flask.

It demonstrates modern cryptographic practices, secure API design, and a mobile-first user experience suitable for cybersecurity learning and portfolio presentation.

Live Deployment
Service URL
Frontend (Vercel) https://bitcipher.vercel.app

Backend API (Render) https://bitcipher.onrender.com

Android APK
Download BitCipher Android app:
https://drive.google.com/uc?export=download&id=1Zt6HWMqdYUZQZJCbdhVWx7-SSFQPIeaf
Key Features
Security

Password-based authenticated encryption

Zero plaintext storage on the server

CSRF protection, rate limiting, and security headers

Separation of frontend and backend services

Functionality

Encrypt and decrypt sensitive text

Generate strong, customizable passwords

Clipboard copy support

Responsive mobile-first interface

Technology Stack
Frontend

Next.js 14

React 18

TypeScript

Tailwind CSS

Axios

Backend

Python Flask

Flask-Limiter

Flask-CORS

cryptography

## Screenshots

Application interface screenshots demonstrating the encryption, decryption, and password generation features.

Local Development
Prerequisites

Node.js 18 or newer

Python 3.8 or newer

Clone Repository
git clone https://github.com/melvv-in/bitcipher.git
cd bitcipher

Run Backend
cd backend
python -m venv venv
venv\Scripts\activate # Windows
pip install -r requirements.txt
python run.py

Backend available at:

http://localhost:5000

Run Frontend
cd frontend
npm install
npm run dev

Frontend available at:

http://localhost:3000

Project Structure
bitcipher/
├── backend/ # Flask secure API
├── frontend/ # Next.js application
├── screenshots/ # Documentation images
├── docker-compose.yml
└── README.md

API Endpoints
Method Endpoint Description
POST /api/encrypt Encrypt plaintext
POST /api/decrypt Decrypt ciphertext
POST /api/generate-password Generate secure password
Security Design

BitCipher follows a zero-knowledge-style architecture:

Encryption keys are derived from user-provided passwords

The server does not store plaintext data

Defensive protections include:

CSRF validation

Rate limiting

Secure HTTP headers

This structure reflects secure development principles used in modern web security tools.

Deployment
Frontend (Vercel)

Set environment variable:

NEXT_PUBLIC_API_BASE=https://bitcipher.onrender.com/api

Backend (Render)

Root directory: backend

Build command:

pip install -r requirements.txt

Start command:

gunicorn run:app

Environment variables:

SECRET_KEY=your_secret_key
CORS_ORIGINS=https://bitcipher.vercel.app

Roadmap

Optional client-side Web Crypto encryption

Shareable encrypted message links

Progressive Web App (PWA) support

Security testing and audit documentation

Enhanced password strength analysis

Author

Melwin
Cybersecurity student focused on ethical hacking, penetration testing, and secure application development.

License

This project is released under the MIT License.
