import base64
import secrets
import string
from cryptography.hazmat.primitives.kdf.scrypt import Scrypt
from cryptography.fernet import Fernet


def derive_key(password: str, salt: bytes):
    kdf = Scrypt(salt=salt, length=32, n=2**14, r=8, p=1)
    return base64.urlsafe_b64encode(kdf.derive(password.encode()))


def encrypt_text(text: str, password: str):
    salt = secrets.token_bytes(16)
    key = derive_key(password, salt)
    token = Fernet(key).encrypt(text.encode())
    encoded = base64.b64encode(salt + token).decode()

    return {
        "encoded": encoded,
        # Backward-compatible alias for older frontend code paths.
        "ciphertext": encoded,
    }


def decrypt_text(encoded: str, password: str):
    raw = base64.b64decode(encoded)
    if len(raw) <= 16:
        raise ValueError("Invalid encoded payload")
    salt = raw[:16]
    token = raw[16:]
    key = derive_key(password, salt)
    return Fernet(key).decrypt(token).decode()


def generate_password(length: int = 16, include_symbols: bool = True):
    safe_length = max(4, min(16, int(length)))
    alphabet = string.ascii_letters + string.digits
    if include_symbols:
        alphabet += "!@#$%^&*()"
    return "".join(secrets.choice(alphabet) for _ in range(safe_length))
