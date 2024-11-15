<template>
    <div>
        <h1>Compras</h1>
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nº Pedido</th>
                        <th scope="col">ID Cubo</th>
                        <th scope="col">fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="compra in compras" :key="compra.idCompra">
                        <td>{{ compra.idPedido }}</td>
                        <td>{{ compra.idCubo }}</td>
                        <td>{{ compra.fechaPedido }}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <router-link to="/perfil" class="btn btn-info" style="margin-right: 10px;">Volver al perfil</router-link>
                <router-link to="/pedidos" class="btn btn-info">Volver a pedidos</router-link>
            </div>
        </div>

    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos'
export default {
    name: "ComprasComponent",
    data() {
        return {
            compras: {
                "idCubo": 0,
                "idPedido": 0,
                "idUsuario": 0,
                "fechaPedido": "2024-11-15T12:52:26.103Z"
            }
        }
    },
    mounted() {
        ServiceCubos.getCompras().then(response => {
            this.compras = response;
        })
    }

}
</script>

<style></style>