<template>
    <div class="token">
        <div class="semilla">
            <input placeholder="Ingrese la semilla"  v-model="semilla"  type="text">
        </div>
        <div class="vigencia">
            <input placeholder="Ingrese tiempo en el que expira tu token"  v-model="tiempo"  type="text">
        </div>
        <div class="mostrarToken">
            <label for="">Token</label>
            <input  class="tokenvista" v-model="token" type="text">
            <button class="botonGrd" @click="obtenertoken">Generar</button>
        </div>
    </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/Autorizacion";

export default {
    data() {
        return {
            semilla: null,
            tiempo: null,
            token: null
        };
    },
    methods: {
        
        async obtenertoken() {
            const objeto = {
                semilla: this.semilla,
                tiempo: this.tiempo,
                token: this.token
            };

            const usuario = {
                username: "XaviX",
                password: "12345678"
            }

            const token = await obtenerTokenFachada(usuario);
            alert("Token generado con exito")
            this.token = token;
            this.semilla = "";
            this.tiempo = "";
        }
    },
}
</script>

<style>
.mostrarToken, .semilla, .vigencia{
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
}
.token{
    width: 1000px;
    margin-left: 300px;
}

input{
   padding-right: 100px;
}
.tokenvista{
    padding-bottom: 100px;
    padding-right: 100px;
    justify-content: center;
    text-align: center;
}
.botonGrd{
    padding: 20px 10px;
    margin-top: 20px;
    background-color: rgb(211, 121, 121);
}
.botonGrd:hover{
    padding: 20px 10px;
    margin-top: 20px;
    background-color:  rgb(219, 66, 66);
}


</style>