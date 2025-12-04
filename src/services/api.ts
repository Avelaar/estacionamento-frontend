import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
});

export const api = {
  cadastrarUsuario: (dados: any) => 
    apiClient.post("/usuarios/criar", dados),

  login: (email: string, senha: string) =>
    apiClient.post("/usuarios/login", { email, senha }),

  cadastrarVeiculo: async (dados: any) => {
    const res = await apiClient.post("/veiculos", dados);
    return res.data;
  },

  listarVeiculos: async () => {
    const res = await apiClient.get("/veiculos");
    return res.data;
  },

  buscarVeiculo: async (id: number) => {
    const res = await apiClient.get(`/veiculos/${id}`);
    return res.data;
  },

  atualizarVeiculo: async (id: number, dados: any) => {
    const res = await apiClient.put(`/veiculos/${id}`, dados);
    return res.data;
  },

  deletarVeiculo: async (id: number) => {
    const res = await apiClient.delete(`/veiculos/${id}`);
    return res.data;
  },

  calcularValor: async (id: number) => {
    const res = await apiClient.get(`/veiculos/calcular/${id}`);
    return res.data;
  },
};

export default api;
