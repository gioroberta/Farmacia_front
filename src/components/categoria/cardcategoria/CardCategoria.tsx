import { Link } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      className="border-slate-900 border 
                 flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-violet-500 py-2 px-4 items-center">
          <h3 className="text-lg font-bold text-white uppercase">
            Categoria
          </h3>
        </div>

        <div className="p-4">
          <h4 className="text-xl font-semibold">
            {categoria.descricao}
          </h4>
        </div>
      </div>

      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-white bg-violet-500 
                     hover:bg-violet-700 flex items-center justify-center py-2"
        >
          Editar
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-white bg-red-500 
                     hover:bg-red-700 w-full flex items-center justify-center"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;