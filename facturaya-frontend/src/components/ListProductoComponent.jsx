import React, {useEffect, useState} from 'react'
import { listProductos , deleteProductos} from '../services/ProductoServicio'

import { useNavigate } from 'react-router-dom'
export const ListProductoComponent = () => {
    const [productos, setProductos] = useState([])
    const navigator = useNavigate();


    useEffect(() => {
        getAllProductos();
    
} , [])

function getAllProductos() {
    listProductos().then((response) =>{
        setProductos(response.data);
    }).catch(error=>{
        console.error('Error al listar productos', error);
    })
}
  function addNewProducto ()  {
    navigator("/add-producto")
  }

function updateProducto(id) {
    navigator(`/edit-producto/${id}`)
}

function removeProducto(id) {
    // Implementar el código para eliminar un producto
    console.log(`Producto ${id} eliminado`)
    deleteProductos(id).then((response) =>{
        getAllProductos()
    }).catch(error=>{
    console.error(error)}
    )
}
  return (
    <div className='container'>
        
        <h3 className='text-center'>Prodcutos</h3>
        <button type="button" className="btn btn-primary" onClick={addNewProducto}>Añadir Producto</button>
        <table className='table table-stripped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>codigo</th>
                    <th>Precio</th>
                    <th>Departamento</th>
                    <th>Categoria</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => (
                    
                    <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.codigo}</td>
                        <td>{producto.precio_venta}</td>
                        <td>{producto.departamento}</td>
                        <td>{producto.categoria ? producto.categoria.descripcion : "Sin categoría"}</td>
                        <td>
                            <button className='btn btn-info'onClick={() => updateProducto(producto.id)}>
                            Update
                            </button>
                            <button className='btn btn-danger'onClick={() => removeProducto(producto.id)} 
                            style={{marginLeft: '10px'}}>Delete</button>
                        </td>
                    </tr>
                    
                ))}
            </tbody>

        </table>
    </div>
  )
}
