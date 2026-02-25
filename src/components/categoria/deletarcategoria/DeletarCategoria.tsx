import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { buscarCategoriaPorId, deletarCategoria } from "../../../services/Service";
import { toast } from "react-toastify";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

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

  async function deletarCat() {
    setIsLoading(true);

    try {
      await deletarCategoria(Number(id));
      toast.success("Categoria apagada com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar a categoria!");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto my-8">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-violet-600 text-white font-bold text-2xl">
          Categoria
        </header>

        <div className="p-4">
          <p className="text-xl">{categoria.descricao}</p>
        </div>

        <div className="flex">
          <button
            className="text-white bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full text-white bg-violet-500 hover:bg-violet-700 flex items-center justify-center"
            onClick={deletarCat}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;