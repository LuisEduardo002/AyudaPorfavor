import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createcliente, getcliente, updatecliente } from '../services/ClienteServicio';

export const ClienteCrearComponent = () => {
    const [documento, setDocumento] = useState("")
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [cuidad, setCuidad] = useState('');
    const [departamento, setDepartamento] = useState('');

    const [errors, setErrors] = useState({
        documento:"",
                nombre: '',
        direccion: '',
        telefono: '',
        email: '',
        cuidad: '',
        departamento: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            console.log('hola')
            getcliente(id).then((response) => {
                console.log('hola')
                console.log(response.data);
                setDocumento(response.data.numero_documento);
                setNombre(response.data.nombre);
                setDireccion(response.data.direccion);
                setTelefono(response.data.telefono);
                setEmail(response.data.email);
                setCuidad(response.data.cuidad);
                setDepartamento(response.data.departamento);
            }).catch(error => {
                console.error('Error al obtener el cliente', error);
            });
        }
    }, [id]);

    function saveOrUpdateCliente(e) {
        e.preventDefault();
        console.log('leepepe')
        console.log(id);
        if (validateForm()) {
            const cliente = {documento, nombre, direccion, telefono, email, cuidad, departamento };
            console.log(cliente);
    
            if (id) {
                updatecliente(id, cliente).then((response) => {
                    console.log(response.data);
                    navigate('/cliente');
                }).catch(error => {
                    console.error('Error al actualizar el cliente', error);
                });
            } else {
                createcliente(cliente).then((response) => {
                    console.log(response.data);
                    navigate('/cliente');
                }).catch(error => {
                    console.error('Error al crear el cliente', error);
                });
            }
        }
    }

    function validateForm() {
        let isValid = true;
        const errorsCopy = { ...errors };

        if (nombre.trim()) {
            errorsCopy.nombre = '';
        } else {
            isValid = false;
            errorsCopy.nombre = 'El nombre es requerido';
        }

        if (direccion.trim()) {
            errorsCopy.direccion = '';
        } else {
            isValid = false;
            errorsCopy.direccion = 'La dirección es requerida';
        }

        if (telefono.trim()) {
            errorsCopy.telefono = '';
        } else {
            isValid = false;
            errorsCopy.telefono = 'El teléfono es requerido';
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            isValid = false;
            errorsCopy.email = 'El email es requerido';
        }

        if (cuidad.trim()) {
            errorsCopy.cuidad = '';
        } else {
            isValid = false;
            errorsCopy.cuidad = 'La ciudad es requerida';
        }

        if (departamento.trim()) {
            errorsCopy.departamento = '';
        } else {
            isValid = false;
            errorsCopy.departamento = 'El departamento es requerido';
        }

        setErrors(errorsCopy);
        console.log(isValid);
        return isValid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className="text-center">Actualizar Cliente</h2>;
        } else {
            return <h2 className="text-center">Añadir Cliente</h2>;
        }
    }

    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form>
                        <div className="form-group mb-2">
                                <label className="form-label">Id Documento</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    value={documento}
                                    className={`form-control ${errors.documento ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDocumento(e.target.value)}
                                />
                                {errors.documento && <div className="invalid-feedback">{errors.documento}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    value={nombre}
                                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Dirección</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la dirección"
                                    value={direccion}
                                    className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                                {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Teléfono</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el teléfono"
                                    value={telefono}
                                    className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    placeholder="Ingrese el email"
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Ciudad</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la ciudad"
                                    value={cuidad}
                                    className={`form-control ${errors.cuidad ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCuidad(e.target.value)}
                                />
                                {errors.cuidad && <div className="invalid-feedback">{errors.cuidad}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Departamento</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el departamento"
                                    value={departamento}
                                    className={`form-control ${errors.departamento ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDepartamento(e.target.value)}
                                />
                                {errors.departamento && <div className="invalid-feedback">{errors.departamento}</div>}
                            </div>
                            <button className="btn btn-success" onClick={saveOrUpdateCliente}>
                                {id ? 'Actualizar' : 'Crear'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};