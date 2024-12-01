import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8080/api/productos";

export const listProductos = () =>{return axios.get(REST_API_BASE_URL);}

export const createProductos = (producto) => axios.post(REST_API_BASE_URL, producto);

export const getProductos = (productoId) => axios.get(REST_API_BASE_URL+'/' + productoId);

export const updateProductos = (productoId, producto) => axios.put(REST_API_BASE_URL+'/' + productoId, producto);

export const deleteProductos = (productoId) => axios.delete(REST_API_BASE_URL+'/' + productoId);