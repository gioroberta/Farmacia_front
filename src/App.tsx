import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategorias/ListaCategoria";
import Footer from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./pages/home/Home";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <NavBar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastrarCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route
                path="/deletarCategoria/:id"
                element={<DeletarCategoria />}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
