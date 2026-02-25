import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { buscarCategorias } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarTodasCategorias() {
    try {
      setIsLoading(true);
      await buscarCategorias(setCategorias);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarTodasCategorias();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#7C3AED" size={15} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Categoria foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
