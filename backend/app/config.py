import os


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", os.urandom(32))
    CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*")
    SCRYPT_N = int(os.getenv("SCRYPT_N", "8192"))
    SCRYPT_R = int(os.getenv("SCRYPT_R", "8"))
    SCRYPT_P = int(os.getenv("SCRYPT_P", "1"))
