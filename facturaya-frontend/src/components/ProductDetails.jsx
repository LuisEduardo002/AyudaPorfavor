import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/productos/${id}`) // URL del backend para obtener detalles
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>
      <p>Descripción: {product.descripcion}</p>
      <p>Precio: ${product.precioVenta}</p>
      {product.impuesto && (
        <p>
          Impuesto: {product.impuesto.nombre} ({product.impuesto.porcentaje}%)
        </p>
      )}
      {product.medida && <p>Medida: {product.medida}</p>}
      {product.categoria && <p>Categoría: {product.categoria.descripcion}</p>}
      <button onClick={() => console.log('Agregar al carrito')}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ProductDetails;
