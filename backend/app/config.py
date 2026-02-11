import os


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", os.urandom(32))
    CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*")
