import axios from "axios"

export const buscarEstudianteFachada = async (codigo, bodyProducto, token) => {
    return await buscarEstudiante(codigo, bodyProducto, token);
}
const buscarEstudiante = async (codigo, bodyProducto, token) => {
    let value = "Bearer " + token;
    console.log("value token", value)
    const headers = {
        "Authorization": value
    }
    const data = await axios.post(`http://localhost:8081/API/V1.0/Facturacion/productos/${codigo}`, bodyProducto, { headers: headers }).then(r => r.data);
    return data;
}

export const guardarEstudianteFachada = (bodyProducto, token) => {
    guardarEstudiante(bodyProducto, token)
}

const guardarEstudiante = (bodyProducto, token) => {
    let value = "Bearer " + token;
    const headers = {
        "Authorization": value 
    }
    axios.post(`http://localhost:8081/API/V1.0/Inscripcion/estudiantes`, bodyProducto, { headers: headers }).then(r => r.data);
}
