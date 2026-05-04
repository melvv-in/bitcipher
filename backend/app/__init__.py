from flask import Flask
from flask_cors import CORS
from .config import Config
from .crypto import warmup_crypto
from .routes import bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Allow frontend to call API
    CORS(app, resources={r"/api/*": {"origins": Config.CORS_ORIGINS}})

    app.register_blueprint(bp, url_prefix="/api")
    warmup_crypto()
    return app
