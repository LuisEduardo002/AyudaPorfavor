import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProductos, getProductos, updateProductos } from '../services/ProductoServicio';

export const ProductoCrearComponent = () => {
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [medida, setMedida] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [impuestos, setImpuestos] = useState([]);
    const [errors, setErrors] = useState({
        codigo: '',
        descripcion: '',
        precioVenta: '',
        categorias: '',
        medida: '',
        impuestos: ''
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
                setCategorias(response.data.categorias.id);
                setMedida(response.data.medida);
                setImpuestos(response.data.impuestos.id);
                    }).catch(error => {
                console.error('Error al obtener el producto', error);
            });
        }
    }, [id]);

    function saveOrUpdateProducto(e) {
        e.preventDefault();

        if (validateForm()) {
            const producto = { codigo, descripcion, precioVenta, categorias, medida, impuestos };
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
                                <label className='form-label'>Medida Producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingresar precio de venta producto'
                                    value={medida}
                                    className={`form-control ${errors.medida ? 'is-invalid' : ''}`}
                                    onChange={(e) => setMedida(e.target.value)}
                                />
                                {errors.medida && <div className='invalid-feedback'>{errors.medida}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Categoría Producto</label>
                                <input
                                    type='text'
                                    placeholder='Ingresar categoría producto'
                                    value={categorias}
                                    className={`form-control ${errors.categorias ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCategorias(e.target.value)}
                                />
                                {errors.categorias && <div className='invalid-feedback'>{errors.categorias}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateProducto}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
