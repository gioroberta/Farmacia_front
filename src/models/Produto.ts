import { Categoria } from "./Categoria";

export interface Produto {
  id: number;
  nome: string;
  detalhes: string;
  preco: number;
  foto: string;
  categoria?: Categoria;
}
