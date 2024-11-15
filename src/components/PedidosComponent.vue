<template>
    <div class="container">
        <h1>Realizar pedido</h1>
        <form @submit.prevent="newPedido()">
            <label>Elige un cubo</label>
            <select class="form-select">

                <option v-for="item in cubos" :key="item.Id" :value="item.Id">
                    {{ item.nombre }}
                </option>
            </select>
            <br>
            <button class="btn btn-primary btn-lg" type="submit" >
                Nuevo pedido
            </button>
        </form>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos'

export default {
    name: 'PedidosComponent',
    data() {
        return {
            cubos: [],
            pedido: {
                idCubo: 0,
                idPedido: 0,
                idUsuario: 0,
                fechaPedido: "2024-11-15T12:52:26.103Z"
            }
        }
    },
    mounted() {
        ServiceCubos.getCubos().then(response => {
            this.cubos = response;
        })
    },
    methods: {
        newPedido() {
            ServiceCubos.insertPedido(this.pedido);
            this.$router.push('/compras');
        }
    }
}
</script>

<style></style>