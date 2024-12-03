import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imagen from '../assets/descarga.svg'
import { useNavigate } from 'react-router-dom'
import nevera from '../assets/nevera.png'
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
          <div key={product.id} className="card" style={{width: "18rem" }}>
              <img class="card-img-top" src={imagen} ></img>
              <div class="card-body">
            
                <p class="card-text">{product.descripcion}</p>
                <p>Precio: ${product.precioVenta}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
              </div>
            
            
           
          </div>
        ))}
      </div>
    </div>
  );
}

<div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

export default Home;