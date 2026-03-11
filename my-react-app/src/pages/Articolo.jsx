import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Articolo () {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Caricamento...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{product.title} - {id}</h1>

      <div className="row g-3">
        <div className="col-12">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  )
}