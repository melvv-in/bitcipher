from flask import Blueprint, request, jsonify
from .crypto import CryptoError, decrypt_text, encrypt_text, generate_password, warmup_crypto

bp = Blueprint("api", __name__)


@bp.post("/encrypt")
def encrypt():
    data = request.get_json(silent=True) or {}
    try:
        return jsonify(encrypt_text(data.get("plaintext", ""), data.get("password", "")))
    except CryptoError as exc:
        return jsonify({"error": str(exc)}), 400


@bp.post("/decrypt")
def decrypt():
    data = request.get_json(silent=True) or {}
    try:
        encoded = data.get("encoded") or data.get("ciphertext")
        text = decrypt_text(encoded, data["password"])
        return jsonify({"plaintext": text})
    except (KeyError, CryptoError):
        return jsonify({"error": "Invalid password or encrypted message"}), 400


@bp.post("/generate-password")
def password():
    data = request.get_json(silent=True) or {}
    length = int(data.get("length", 12))
    include_symbols = bool(data.get("includeSymbols", True))
    return jsonify({"password": generate_password(length, include_symbols)})


@bp.get("/warmup")
def warmup():
    return jsonify({"ready": warmup_crypto()})
