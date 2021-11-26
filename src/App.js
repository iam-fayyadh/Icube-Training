import "./App.css";
import Categories from "./Category/Category";
import Categorydetail from "./Category/Categorydetail";
import Dnt from "./Category/Dnt";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Selamat Datang Di Website Ammar</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />

          <Route path="/catde/:id" element={<Categorydetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
