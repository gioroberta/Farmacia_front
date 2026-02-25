import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import type { Categoria } from "../../../models/Categoria";
import {
  atualizarCategoria,
  buscarCategoriaPorId,
  cadastrarCategoria,
} from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
    produto: [],
  });

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscarCategoriaPorId(Number(id), setCategoria);
    } catch (error) {
      toast.error("Erro ao buscar a categoria!");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizarCategoria(categoria, setCategoria);
        toast.success("Categoria atualizada com sucesso!");
      } catch (error) {
        toast.error("Erro ao atualizar a categoria!");
      }
    } else {
      try {
        await cadastrarCategoria(categoria, setCategoria);
        toast.success("Categoria cadastrada com sucesso!");
      } catch (error) {
        toast.error("Erro ao cadastrar a categoria!");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-violet-600 hover:bg-violet-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
