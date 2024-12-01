import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom'
import { createProductos, getProductos, updateProductos } from '../services/ProductoServicio'

export const ProductoCrearComponent = () => {
    const [codigo, setCodigo] = useState("")
    const [departamento, setDepartamento] = useState("")
    const [precio_venta, setPrecio_venta] = useState("")
    const [categoria, setCategoria] = useState("")

    const [errors, setErrors] =useState({
        codigo: '',
        departamento:'',
        precio_venta:'',
        categoria:''
    })

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        if(id){
            getProductos(id).then((response) =>{
                console.log(response.data);
                setCodigo(response.data.codigo);
                setDepartamento(response.data.departamento);
                setPrecio_venta(response.data.precio_venta);
                setCategoria(response.data.categoria.descripcion);
            }).catch(error =>{
                console.error('Error al obtener el producto', error);
            })
        }
    }, [id])
    function saveOrUpdateProducto(e){
        e.preventDefault();

        if(validateForm()){  
            
            const producto = {codigo, departamento, precio_venta,}
            console.log(producto);
    
            if(id){
                updateProductos(id, producto).then((response) =>{
                console.log(response.data);       
                navigator('/productos');
            }).catch(error =>{
                console.error('Error al actualizar el producto', error);
            })
            }
            else{
                createProductos(producto).then((response) =>{
                    console.log(response.data);
                    navigator('/productos');
                }).catch(error =>{
                    console.error('Error al crear el producto', error);
                })
            }
            }
        



    
        // Aquí se podría llamar a la función que guarda el producto en la base de datos
    }

    function validateForm() {
        console.log("alemnos entro a validar")
        let isValid = true;
        const errorsCopy = {...errors} 

        if(codigo.trim()) {
            errorsCopy.codigo = '';
        }   
        else{
            isValid = false;
            errorsCopy.codigo = "El codigo es requerido";
        }
        if(departamento.trim()) {
            errorsCopy.departamento = '';
        }
        else{
            isValid = false;
            errorsCopy.departamento = "El departamento es requerido";
        }
        if(String(precio_venta).trim()) {
            errorsCopy.precio_venta = '';
        }
        else{
            isValid = false;
            errorsCopy.precio_venta = "El precio de venta es requerido";
        }
        if(categoria.trim()) {
            errorsCopy.categoria = '';
        }
        else{
            isValid = false;
            errorsCopy.categoria = "La categoria es requerida";
        }
        setErrors(errorsCopy);
        console.log(isValid);
        return isValid;
    }

    function pageTitle() {
        if(id){
            return <h2 className='text-center'>Actualizar producto</h2>
        }
        else{
            return <h2 className='text-center'>Añadir producto</h2>
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
                            <label className='form-label'> Codigo Producot </label>
                            <input type='text'
                                placeholder='Ingresar codigo producto'
                                value={codigo}
                                className={`form-control ${errors.codigo ? 'is-invalid': ''}`}
                                onChange={(e) =>setCodigo(e.target.value)}>
                                
                            </input>
                            {errors.codigo && <div className='invalid-feedback'>{errors.codigo} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Departamento Producrto </label>
                            <input type='text'
                                placeholder='Ingresar Departamento producto'
                                value={departamento}
                                className={`form-control ${errors.departamento ? 'is-invalid': ''}`}
                                onChange={(e) =>setDepartamento(e.target.value)}
                                >
                                
                            </input>
                            {errors.codigo && <div className='invalid-feedback'>{errors.departamento} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Precio Venta Producrto </label>
                            <input type='text'
                                placeholder='Ingresar Departamento producto'
                                value={precio_venta}
                                className={`form-control ${errors.precio_venta ? 'is-invalid': ''}`}
                                onChange={(e) =>setPrecio_venta(e.target.value)}>
                                
                            </input>
                            {errors.codigo && <div className='invalid-feedback'>{errors.precio_venta} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Categoria Producrto </label>
                            <input type='text'
                                placeholder='Ingresar categoruia producto'
                                value={categoria}
                                className={`form-control ${errors.categoria ? 'is-invalid': ''}`}
                                onChange={(e) =>setCategoria(e.target.value)}>
                                
                            </input>
                            {errors.codigo && <div className='invalid-feedback'>{errors.categoria} </div>}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateProducto}>Crear</button>
                    </form>
                    </div>
            </div>

        </div>
    </div>
  )
}
