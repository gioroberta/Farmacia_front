import { Link } from "react-router-dom";
import { Pill } from "phosphor-react";

export function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white flex justify-between items-center px-10 py-4 shadow-md">

      <div className="flex items-center gap-2">
        <Pill size={28} weight="bold" />
        <h1 className="text-2xl font-bold">Medify</h1>
      </div>

      <div className="flex gap-8 text-lg">
        <Link to="/" className="hover:opacity-80 transition">
          Home
        </Link>

        <Link to="/categorias" className="hover:opacity-80 transition">
          Categorias
        </Link>

        <Link to="/cadastrarCategoria" className="hover:opacity-80 transition">
          Cadastrar
        </Link>
      </div>

    </nav>
  );
}