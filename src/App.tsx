import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import Footer from "./components/footer/Footer";

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
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
