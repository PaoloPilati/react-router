import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ChiSiamo from "../pages/ChiSiamo";
import Prodotti from "../pages/Prodotti";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/prodotti" element={<Prodotti />} />
    </Routes>
  )
}