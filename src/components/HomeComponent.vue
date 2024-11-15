<template>
    <div class="container">
        <h1>Bienvenido</h1>
        <hr style="color: red;"/>
        <div v-for="cubo in cubos" :key="cubo.idCubo">
            <div class="card" style="width: 150px;">
                <img class="card-img-top" :src="cubo.imagen" style="width: 100px;"  alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ cubo.nombre }}</h5>
                    <p class="card-text">{{ cubo.precio }}</p>
                    <router-link :to="'/detalles/' + cubo.idCubo" class="btn btn-primary">Detalles</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";

export default {
    name: "HomeComponent",
    data() {
        return {
            cubos: []
        }
    },
    mounted() {
        ServiceCubos.getCubos().then(response => {
            this.cubos = response;
        })
    }
}
</script>

<style></style>