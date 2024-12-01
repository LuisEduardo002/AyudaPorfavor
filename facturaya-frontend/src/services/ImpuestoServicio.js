import axios from "axios";

const REST_API_BASE_URL = "http://127.0.0.1:8080/api/impuestos";

export const listimpuesto = () =>{return axios.get(REST_API_BASE_URL);}

export const createimpuesto = (impuesto) => axios.post(REST_API_BASE_URL, impuesto);

export const getimpuesto = (impuestoId) => axios.get(REST_API_BASE_URL+'/' + impuestoId);

export const updateimpuesto = (impuestoId, impuesto) => axios.put(REST_API_BASE_URL+'/' + impuestoId, impuesto);

export const deleteimpuesto = (impuestoId) => axios.delete(REST_API_BASE_URL+'/' + impuestoId);