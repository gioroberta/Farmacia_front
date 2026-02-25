import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export function Home() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        <Typewriter
          words={["Bem-vindo à Medify!"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Uma farmácia moderna, organizada e comprometida com a sua saúde.
        Controle suas categorias de produtos com eficiência.
      </p>

      <div className="flex gap-6">
        <Link
          to="/categorias"
          className="bg-violet-600 hover:bg-violet-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Ver Categorias
        </Link>

        <Link
          to="/cadastrarCategoria"
          className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Nova Categoria
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-5xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-violet-600">
            Organização
          </h3>
          <p className="text-gray-600">
            Gerencie categorias de forma estruturada e eficiente.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-violet-600">Agilidade</h3>
          <p className="text-gray-600">
            Interface simples e rápida para operações do dia a dia.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-violet-600">Controle</h3>
          <p className="text-gray-600">
            Total controle sobre suas categorias cadastradas.
          </p>
        </div>
      </div>
    </div>
  );
}
