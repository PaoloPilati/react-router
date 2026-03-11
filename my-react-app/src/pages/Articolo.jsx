import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <h1 className="mb-4">Articolo: {product.title} - {id}</h1>
      <div className="card">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid p-5"
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title mb-3">
                ${product.price}
              </h3>
              <p className="card-text">
                {product.description}
              </p>
              <p className="card-text text-muted">
                Categoria: {product.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}