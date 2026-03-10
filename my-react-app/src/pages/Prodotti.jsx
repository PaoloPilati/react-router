import { useState, useEffect } from "react";
import axios from "axios";

export default function Prodotti() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="my-4">Prodotti</h1>
      <div className="row g-3">
        {products.map(product => (
          <div key={product.id} className="col-sm-12 col-md-4 col-lg-3">
            <div className="card h-100">
              <img 
                src={product.image} 
                className="card-img-top p-5" 
                alt={product.title} 
              />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}