<template>
    <div class="container">
        <h1>Detalles del cubo {{ this.$route.params.id }}</h1>
        <hr>
        <div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src=" cubo.imagen" alt="Card image cap">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Marca y Modelo</th>
                                <th scope="col">Valoracion</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ cubo.marca }}, {{ cubo.modelo }}</td>
                                <td>{{ cubo.valoracion }}</td>
                                <td>{{ cubo.precio }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <router-link to="/" type="button" class="btn btn-warning">Volver</router-link>
            </div>
            <br>
            <div v-if="comentarios && comentarios.length > 0">
                <h1>Commentarios</h1>
                <hr>
                <div >
                   <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuario</th>
                                <th scope="col">Comentario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="comentario in comentarios" :key="comentario.idComentario">
                                <td>{{ comentario.idUsuario }}</td>
                                <td>{{ comentario.comentario }}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';

export default {
    name: "DetallesComponent",
    data() {
        return {
            cubo: [],
            commentarios: []
        }
    },
    mounted() {
        ServiceCubos.loadCubo(this.$route.params.id).then(response => {
            this.cubo = response;
        })

        ServiceCubos.getComenterios(this.$route.params.id).then(response => {
            this.comentarios = response;
        })
    },

}
</script>

<style></style>