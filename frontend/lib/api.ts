import axios from "axios";

const API = axios.create({
  // Use Next.js rewrite (/api/* -> Flask backend) for reliable mobile access.
  baseURL: "/api",
  timeout: 12000,
});

export const encrypt = (plaintext: string, password: string) =>
  API.post("/encrypt", { plaintext, password });

export const decrypt = (encoded: string, password: string) =>
  API.post("/decrypt", { encoded, password });

export const generatePassword = (length: number, includeSymbols = true) =>
  API.post("/generate-password", { length, includeSymbols });
