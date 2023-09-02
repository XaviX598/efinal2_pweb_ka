<template>
    <div class="containerNavBar">
        <router-link to="/tokens">Generar Token</router-link>
        <router-link to="/estudiantes">Ingresar Estudiantes</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    color: black;
}

a {
    padding: 70px;
}

.containerNavBar {
    background: #27dbd5;
    position: fixed;
    padding: 15px;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 2px solid #00afa9;
}
</style>