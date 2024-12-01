import React, {useEffect, useState} from 'react'
import { listimpuesto , deleteimpuesto} from '../services/ImpuestoServicio'

import { useNavigate } from 'react-router-dom'
export const ListIvaComponet = () => {
    const [impuestos, setImpuesto] = useState([])
    const navigator = useNavigate();
    
    
    useEffect(() => {
        getAllImpuestos();
    
    } , [])
    
    function getAllImpuestos() {
        listimpuesto().then((response) =>{
            setImpuesto(response.data);
        }).catch(error=>{
            console.error('Error al listar Impuesto', error);
        })
    }
      function addNewImpuesto ()  {
        navigator("/add-impuesto")
      }
    
    function updateImpuesto(id) {
        navigator(`/edit-impuesto/${id}`)    
    }
    
    function removeImpuesto(id) {
        // Implementar el código para eliminar un Impuesto
        console.log(`Impuesto ${id} eliminado`)
        deleteimpuesto(id).then((response) =>{
            getAllImpuestos()
        }).catch(error=>{
        console.error(error)}
        )
    }
    
  return (
<div className='container'>

<h3 className='text-center'>Impuestos Ivas</h3>
<button type="button" className="btn btn-primary" onClick={addNewImpuesto}>Añadir Impuesto</button>
<table className='table table-stripped table-bordered'>
    <thead>
        <tr>
            <th>ID Impuesto</th>
            <th>Nombre Impuesto</th>
            <th>Porcentaje</th>

        </tr>
    </thead>
    <tbody>
        {impuestos.map((impuesto) => (

            <tr key={impuesto.id}>
                <td>{impuesto.id}</td>
                <td>{impuesto.nombre}</td>
                <td>{impuesto.porcentaje}</td>

                <td>
                    <button className='btn btn-info'onClick={() => updateImpuesto(impuesto.id)}>
                    Update
                    </button>
                    <button className='btn btn-danger'onClick={() => removeImpuesto(impuesto.id)} 
                    style={{marginLeft: '10px'}}>Delete</button>
                </td>
            </tr>

        ))}
    </tbody>

</table>
</div>
  )
}
