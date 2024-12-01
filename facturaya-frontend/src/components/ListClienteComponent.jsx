import React, {useEffect, useState} from 'react'
import { listcliente , deletecliente} from '../services/ClienteServicio'

import { useNavigate } from 'react-router-dom'

export const ListClienteComponent = () => {

    const [cliente, setCliente] = useState([])
    const navigator = useNavigate();
    
    
    useEffect(() => {
        getAllCliente();
    
    } , [])
    
    function getAllCliente() {
        listcliente().then((response) =>{
            setCliente(response.data);
        }).catch(error=>{
            console.error('Error al listar Cliente', error);
        })
    }
      function addNewCliente ()  {
        navigator("/add-cliente")
      }
    
    function updateCliente(id) {
        navigator(`/edit-cliente/${id}`)    
    }
    
    function removeCliente(id) {
        // Implementar el código para eliminar un Cliente
        console.log(`Cliente ${id} eliminado`)
        deletecliente(id).then((response) =>{
            getAllCliente()
        }).catch(error=>{
        console.error(error)}
        )
    }







  return (
<div className='container'>

<h3 className='text-center'>Clientes</h3>
<button type="button" className="btn btn-primary" onClick={addNewCliente}>Añadir Cliente</button>
<table className='table table-stripped table-bordered'>
    <thead>
        <tr>
            <th>Numero Documento</th>
            <th>Nombre Cliente</th>
            <th>direccion</th>
            <th>telefono</th>
            <th>email</th>
            <th>cuidad</th>
            <th>departamento</th>
            <th>Porcentaje</th>

        </tr>
    </thead>
    <tbody>
        {cliente.map((cliente) => (

            <tr key={cliente.documento}>
                <td>{cliente.id_numero_documento}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.email}</td>
                <td>{cliente.cuidad}</td>
                <td>{cliente.departamento}</td>

                <td>
                    <button className='btn btn-info'onClick={() => updateCliente(cliente.id_numero_documento)}>
                    Update
                    </button>
                    <button className='btn btn-danger'onClick={() => removeCliente(cliente.id_numero_documento)} 
                    style={{marginLeft: '10px'}}>Delete</button>
                </td>
            </tr>

        ))}
    </tbody>

</table>
</div>

  )
}
