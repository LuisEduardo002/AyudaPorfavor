import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8080/api/clientes";

export const listcliente = () =>{return axios.get(REST_API_BASE_URL);}

export const createcliente = (cliente) => axios.post(REST_API_BASE_URL, cliente);

export const getcliente = (clienteId) => axios.get(REST_API_BASE_URL+'/' + clienteId);

export const updatecliente = (clienteId, cliente) => axios.put(REST_API_BASE_URL+'/' + clienteId, cliente);

export const deletecliente = (clienteId) => axios.delete(REST_API_BASE_URL+'/' + clienteId);