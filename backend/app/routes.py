from flask import Blueprint, request, jsonify
from .crypto import encrypt_text, decrypt_text, generate_password

bp = Blueprint("api", __name__)


@bp.post("/encrypt")
def encrypt():
    data = request.get_json()
    return jsonify(encrypt_text(data["plaintext"], data["password"]))


@bp.post("/decrypt")
def decrypt():
    data = request.get_json()
    try:
        encoded = data.get("encoded") or data.get("ciphertext")
        if not encoded or not data.get("password"):
            return jsonify({"error": "encoded and password are required"}), 400
        text = decrypt_text(encoded, data["password"])
        return jsonify({"plaintext": text})
    except Exception:
        return jsonify({"error": "Invalid password or encrypted message"}), 400


@bp.post("/generate-password")
def password():
    data = request.get_json() or {}
    length = int(data.get("length", 12))
    include_symbols = bool(data.get("includeSymbols", True))
    return jsonify({"password": generate_password(length, include_symbols)})
