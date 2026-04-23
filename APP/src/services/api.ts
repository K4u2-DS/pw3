import axios from "axios";

export const api = axios.create({
    baseURL: "https://improved-space-guide-v6r4vj95j9v9fxxp5-3000.app.github.dev/",
});

// Interceptor de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na API:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);