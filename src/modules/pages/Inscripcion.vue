<template>
    <GuardarEstudiante/>
    <MostrarEstudiante/>
</template>

<script>
import GuardarEstudiante from '../components/GuardarEstudiante.vue';
import MostrarEstudiante from '../components/MostrarEstudiante.vue';
export default {
    components: {
        GuardarEstudiante,
        MostrarEstudiante
  },
}
</script>

<style>
.semilla{
    background-color: rgb(0, 0, 0);
}
</style>