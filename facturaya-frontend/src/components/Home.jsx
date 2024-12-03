import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

function Home() {
  const navigator = useNavigate();
  const [products, setProducts] = useState([]);
  function abrirCarrito() {
    navigator(`/carrito`)    
}

  useEffect(() => {
    fetch('http://localhost:8080/api/productos') // URL del backend para obtener productos
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1> 

      <button className='btn btn-danger'onClick={() => abrirCarrito()} 
                    style={{marginLeft: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>    Carrito</button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h2>{product.descripcion}</h2>
            <p>Precio: ${product.precioVenta}</p>
            <Link to={`/product/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;