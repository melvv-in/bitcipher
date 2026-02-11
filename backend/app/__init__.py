from flask import Flask
from flask_cors import CORS
from .config import Config
from .routes import bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Allow frontend to call API
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    app.register_blueprint(bp, url_prefix="/api")
    return app
