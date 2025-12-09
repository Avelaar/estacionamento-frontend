import { apiClient } from "./api";

export const UsuarioAPI = {
  criarConta: (dados: any) => apiClient.post("/usuarios/criar", dados),

  login: (email: string, senha: string) =>
    apiClient.post("/usuarios/login", { email, senha }),
};
