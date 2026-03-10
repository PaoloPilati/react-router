import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Prodotti />} />

      </Routes>

    </>
  )
}

export default App
