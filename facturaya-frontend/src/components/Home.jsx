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
                    style={{marginLeft: '10px'}}>Carrito</button>

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