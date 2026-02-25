import axios from "axios";

export const api = axios.create({
  baseURL: "https://farmacia-js12.onrender.com",
});

export const buscarCategorias = async (setData: Function) => {
  const resposta = await api.get("/categorias");
  setData(resposta.data);
};
export const buscarCategoriaPorId = async (id: number, setData: Function) => {
  const resposta = await api.get(`/categorias/${id}`);
  setData(resposta.data);
};

export const cadastrarCategoria = async (data: any, setData: Function) => {
  const resposta = await api.post("/categorias", data);
  setData(resposta.data);
};

export const atualizarCategoria = async (data: any, setData: Function) => {
  const resposta = await api.put("/categorias", data);
  setData(resposta.data);
};
export const deletarCategoria = async (id: number) => {
  await api.delete(`/categorias/${id}`);
};