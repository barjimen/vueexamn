<template>
    <div class="container">   
        <h1>Mi Perfil (User {{ user.idUsuario }} )</h1>
        <hr>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contraseña</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ user.idUsuario }}</td>
                    <td>{{ user.nombre }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.pass }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
export default {
    name: "PerfilComponent",
    data() {
        return {
            user: {
                idUsuario: "",
                nombre: "",
                email: "",
                pass: ""
            }
        }
    },
    mounted() {
        ServiceCubos.getPerfil().then(response => {
            this.user = response;
        })
    }
}
</script>

<style>

</style>