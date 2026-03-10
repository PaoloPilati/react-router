import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element= {<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/prodotti" element={<Prodotti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}