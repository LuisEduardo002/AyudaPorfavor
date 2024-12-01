import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProductos, getProductos, updateProductos } from '../services/ProductoServicio';

export const ProductoCrearComponent = () => {
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [categoria, setCategoria] = useState("");

    const [errors, setErrors] = useState({
        codigo: '',
        descripcion: '',
        precioVenta: '',
        categoria: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getProductos(id).then((response) => {
                console.log(response.data);
                setCodigo(response.data.codigo);
                setDescripcion(response.data.descripcion);
                setPrecioVenta(response.data.precioVenta);
                setCategoria(response.data.categoria.descripcion);
            }).catch(error => {
                console.error('Error al obtener el producto', error);
            });
        }
    }, [id]);

    function saveOrUpdateProducto(e) {
        e.preventDefault();

        if (validateForm()) {
            const producto = { codigo, descripcion, precioVenta, categoria };
            console.log(producto);

            if (id) {
                updateProductos(id, producto).then((response) => {
                    console.log(response.data);
                    navigate('/productos');
                }).catch(error => {
                    console.error('Error al actualizar el producto', error);
                });
            } else {
                createProductos(producto).then((response) => {
                    console.log(response.data);
                    navigate('/productos');
                }).catch(error => {
                    console.error('Error al crear el producto', error);
                });
            }
        }
    }

    function validateForm() {
        console.log("Validando el formulario");
        let isValid = true;
        const errorsCopy = { ...errors };

        if (codigo.trim()) {
            errorsCopy.codigo = '';
        } else {
            isValid = false;
            errorsCopy.codigo = "El código es requerido";
        }
        if (descripcion.trim()) {
            errorsCopy.descripcion = '';
        } else {
            isValid = false;
            errorsCopy.descripcion = "La descripción es requerida";
        }
        if (String(precioVenta).trim()) {
            errorsCopy.precioVenta = '';
        } else {
            isValid = false;
            errorsCopy.precioVenta = "El precio de venta es requerido";
        }
        if (categoria.trim()) {
            errorsCopy.categoria = '';
        } else {
            isValid = false;
            errorsCopy.categoria = "La categoría es requerida";
        }
        setErrors(errorsCopy);
        console.log(isValid);
        return isValid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Actualizar producto</h2>;
        } else {
            return <h2 className='text-center'>Añadir producto</h2>;
        }
    }

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Código Producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingresar código producto'
                                    value={codigo}
                                    className={`form-control ${errors.codigo ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCodigo(e.target.value)}
                                />
                                {errors.codigo && <div className='invalid-feedback'>{errors.codigo}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Descripción Producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingresar descripción producto'
                                    value={descripcion}
                                    className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                                {errors.descripcion && <div className='invalid-feedback'>{errors.descripcion}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Precio Venta Producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingresar precio de venta producto'
                                    value={precioVenta}
                                    className={`form-control ${errors.precioVenta ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPrecioVenta(e.target.value)}
                                />
                                {errors.precioVenta && <div className='invalid-feedback'>{errors.precioVenta}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Categoría Producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingresar categoría producto'
                                    value={categoria}
                                    className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCategoria(e.target.value)}
                                />
                                {errors.categoria && <div className='invalid-feedback'>{errors.categoria}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateProducto}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
