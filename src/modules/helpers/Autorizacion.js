import axios from 'axios'

export const obtenerTokenFachada = async (usuario) => {
    return await conseguirToken(usuario);
}

const conseguirToken = async (bodyUsuario) => {
    console.log("value token", bodyUsuario)
    const data = axios.post(`http://localhost:8080/API/V1.0/Autorizacion/tokens/obtener`, bodyUsuario).then(r => r.data);
    console.log("token " + data)
    return data;
}