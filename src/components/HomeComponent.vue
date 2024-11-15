<template>
    <div class="container">
        <h1>Bienvenido</h1>
        <hr style="color: red;" />
        <div class="card-container" style="display: flex; flex-wrap: wrap; gap: 16px;">
            <div v-for="cubo in cubos" :key="cubo.idCubo" class="card-item"
                style="flex: 0 0 23%; box-sizing: border-box;">
                <div class="card" style="width: 100%;">
                    <img class="card-img-top" :src="cubo.imagen" style="width: 100px;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{ cubo.nombre }}</h5>
                        <p class="card-text">{{ cubo.precio }}</p>
                        <router-link :to="'/detalles/' + cubo.idCubo" class="btn btn-primary">Detalles</router-link>
                    </div>
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