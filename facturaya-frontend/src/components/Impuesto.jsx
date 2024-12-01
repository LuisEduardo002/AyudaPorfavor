import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom'
import { createimpuesto, getimpuesto, updateimpuesto } from '../services/ImpuestoServicio'

export const Impuesto = () => {

    
    const [idImpuesto, setIdImpuesto] = useState("")
    const [nombre, setNombre] = useState("")
    const [porcentaje, setPorcentaje] = useState("")
   
  
    const [errors, setErrors] =useState({
      idImpuesto: '',
      nombre:'',
      porcentaje:'',
   
    })
  
    const navigator = useNavigate();
    const {id} = useParams();
  
    useEffect(() =>{
        if(id){
          getimpuesto(id).then((response) =>{
                console.log(response.data);
                setIdImpuesto(response.data.id);
                setNombre(response.data.nombre);
                setPorcentaje(response.data.porcentaje);
  
            }).catch(error =>{
                console.error('Error al obtener el Impuesto', error);
            })
        }
    }, [id])
    
    function saveOrUpdateImpuesto(e) {
        e.preventDefault();
        console.log("entre almenos a la funcion saveorupdate");
    
        if (validateForm()) {
            const impuesto = {
                idImpuesto: idImpuesto ? parseInt(idImpuesto, 10) : null, 
                nombre,
                porcentaje: parseFloat(porcentaje) // Convertir porcentaje a un número
            };
            console.log("Formulario válido:", impuesto);
    
            if (id) {
                console.log("entre a actualizar");
                updateimpuesto(id, impuesto).then((response) => {
                    console.log(response.data);
                    navigator('/impuesto');
                }).catch(error => {
                    console.error('Error al actualizar el Impuesto', error);
                });
            } else {
                createimpuesto(impuesto).then((response) => {
                    console.log("Respuesta del servidor:", response.data);
                    navigator('/impuesto');
                }).catch(error => {
                    console.error('Error al crear el Impuesto', error);
                    console.log("Configuración de Axios:", error.config);
                });
            }
        } else {
            console.log("Formulario inválido. Corrige los errores antes de enviar.");
        }
    }
    
  
  
    function validateForm() {
      console.log("alemnos entro a validar");
      let isValid = true;
      const errorsCopy = {
          idImpuesto: '',
          nombre: '',
          porcentaje: '',
      };
  

    if (!String(nombre).trim()) {
        isValid = false;
        errorsCopy.nombre = "El nombre es requerido";
    }
    if (!String(porcentaje).trim()) {
        isValid = false;
        errorsCopy.porcentaje = "El porcentaje es requerido";
    }
      setErrors(errorsCopy);
      console.log("Validación completada. ¿Es válido?", isValid);
      return isValid;
  }
  
    function pageTitle() {
        if(id){
            return <h2 className='text-center'>Actualizar Impuesto</h2>
        }
        else{
            return <h2 className='text-center'>Añadir Impuesto</h2>
        }
    }
  
  

  return (
    <div className='container'>
    <br></br>
    <div className='row'>
        <div className='card col-md-6 offset-md-3'>
            {
                pageTitle()
            }
            <div className='card-body'>
                <form>
                <div className='form-group mb-2'>
    <label className='form-label'> Id Impuesto</label>
    <input 
        type='text'
        placeholder='Ingresar código Impuesto'
        value={idImpuesto}
        className={`form-control ${errors.idImpuesto ? 'is-invalid': ''}`}
        onChange={(e) =>setIdImpuesto(e.target.value)}
    />
    {errors.idImpuesto && <div className='invalid-feedback'>{errors.idImpuesto}</div>}
</div>

<div className='form-group mb-2'>
    <label className='form-label'> Nombre Impuesto </label>
    <input 
        type='text'
        placeholder='Ingresar Nombre Impuesto'
        value={nombre}
        className={`form-control ${errors.nombre ? 'is-invalid': ''}`}
        onChange={(e) =>setNombre(e.target.value)}
    />
    {errors.nombre && <div className='invalid-feedback'>{errors.nombre}</div>}
</div>

<div className='form-group mb-2'>
    <label className='form-label'> Porcentaje Impuesto </label>
    <input 
        type='text'
        placeholder='Ingresar Porcentaje Impuesto'
        value={porcentaje}
        className={`form-control ${errors.porcentaje ? 'is-invalid': ''}`}
        onChange={(e) =>setPorcentaje(e.target.value)}
    />
    {errors.porcentaje && <div className='invalid-feedback'>{errors.porcentaje}</div>}
</div>



                    <button className='btn btn-success' onClick={saveOrUpdateImpuesto}>Crear</button>
                </form>
                </div>
        </div>

    </div>
</div>
  )

 
}