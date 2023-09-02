<template>
    <h1>Estudiante</h1>
    <div class="form">
        <label for="">Token</label>
    <input placeholder="ingrese el valor del token" v-model="token" type="text">
    <label for="">Nombre</label>
    <input placeholder="ingrese el nombre del estudiante"  v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input placeholder="ingrese el apellido del estudiante"   v-model="apellido" type="text">
    <label for="">Cedula</label>
    <input placeholder="ingrese la cedula del estudiante"  v-model="cedula" type="text">
    </div>
    
    
    

    <div class="container">
        <div class="btn_guardar">
            <button @click="agregarEstudiante">Guardar</button>
        </div>
    </div>
</template>

<script>
import { guardarEstudianteFachada } from "../helpers/EstudianteCliente";
import { obtenerTokenFachada } from "../helpers/Autorizacion";
export default {
    data() {
        return {
            token: null,
            nombre: null,
            apellido: null,
            cedula: null,
        };
    },
    methods: {
        
        async agregarEstudiante() {
            const objeto = {
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula
            };

            const usuario = {
                username: "XaviX",
                password: "12345678"
            }

            const token = await obtenerTokenFachada(usuario);
            guardarEstudianteFachada(objeto, token);
            alert("Estudiante guardado con exito")
            this.token = "";
            this.nombre = "";
            this.apellido = "";
            this.cedula = "";
        }
    },
}
</script>

<style>
.form{
    display: flex;
    flex-direction: column;
}
</style>