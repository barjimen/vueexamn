<template>
    <div class="container">
        <h1>Cubos de la marca {{ this.$route.params.marca }}</h1>
        <hr style="color: red;" />
        <div v-for="cubo in cubos" :key="cubo.idCubo">
            <div class="card" style="width: 150px;">
                <img class="card-img-top" :src="cubo.imagen" style="width: 100px;" alt="Card image cap">
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
    name: "CubosComponent",
    data() {
        return {
            cubos: []
        }
    },
    mounted() {
        let marca = this.$route.params.marca;
        ServiceCubos.getCubosMarca(marca).then(response => {
            this.cubos = response;
        })
    },
    watch: {
        '$route.params.marca'(nextValue, oldValue) {
            if (nextValue != oldValue) {
                ServiceCubos.getCubosMarca(nextValue).then(response => {
                    this.cubos = response;
                })
            }
        }
    }

}
</script>

<style></style>