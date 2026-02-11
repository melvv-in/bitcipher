# BitCipher

A modern encryption and password management tool built with Next.js and Flask.

## Features

- **Encryption/Decryption**: Secure AES-256 encryption for your sensitive data
- **Password Generator**: Create strong, customizable passwords
- **Privacy Focused**: Client-side encryption with zero data storage on servers

## Tech Stack

### Frontend

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios for API calls

### Backend

- Python Flask
- Flask-CORS
- cryptography library

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.8+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/BitCipher.git
cd BitCipher
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../backend
pip install -r requirements.txt
```

### Running the Application

#### Development Mode

Start the backend server:

```bash
cd backend
python run.py
```

In a separate terminal, start the frontend:

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

#### Production Mode

Using Docker:

```bash
docker-compose up --build
```

## Project Structure

```
BitCipher/
├── frontend/           # Next.js frontend application
│   ├── app/           # App router pages
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── public/       # Static assets
├── backend/           # Flask backend API
│   ├── app/          # Application modules
│   └── run.py        # Entry point
└── docker-compose.yml # Docker configuration
```

## API Endpoints

- `POST /api/encrypt` - Encrypt data
- `POST /api/decrypt` - Decrypt data
- `GET /api/generate-password` - Generate secure passwords

## Security

All encryption operations are performed client-side using the Web Crypto API. The backend only serves as an API gateway and does not store any encrypted data.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
