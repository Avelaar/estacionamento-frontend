import { apiClient } from "./api";

export const UsuarioAPI = {
  criarConta: (dados: any) => apiClient.post("/usuarios/criar", dados),
};
    