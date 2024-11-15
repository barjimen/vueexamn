<template>
    <div class="container">
        <h1>Cubos de la marca {{ this.$route.params.marca }}</h1>
        <hr style="color: red;" />
        <div class="card-container">
            <div v-for="cubo in cubos" :key="cubo.idCubo" class="card">
                <img class="card-img-top" :src="cubo.imagen" alt="Card image cap">
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

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
}

.card {
  width: calc(50% - 8px); 
  margin-bottom: 16px;
}

.card-img-top {
  width: 150px;
  height: auto;
}</style>