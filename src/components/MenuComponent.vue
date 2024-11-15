<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">PONER IMAGEN</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/perfil" v-if="isLogin">Perfil</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul class="dropdown-menu">
                            <li v-for="marca in marcas" :key="marca" class="dropdown-item ">
                                <router-link :to="'/cubos/' + marca">
                                    {{ marca }}
                                </router-link>
                            </li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                Seguridad
                            </a>
                            <ul class="dropdown-menu">
                            <li class="dropdown-item ">
                                <router-link to="/login" v-if="!isLogin">
                                    Iniciar Sesión
                                </router-link>
                            </li>
                            <li class="dropdown-item " v-if="!isLogin">
                                <router-link to="/registro">
                                    Registrarse
                                </router-link>
                            </li>
                            <li class="dropdown-item " v-if="isLogin" @click="deleteToken()">
                                <router-link to="/registro" >
                                    Cerrar Sesión
                                </router-link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
export default {
    name: "MenuComponent",
    props: {
        isLogin: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            marcas: [],
        }
    },
    mounted() {
        ServiceCubos.getMarcas().then(response => {
            this.marcas = response;
        })
    },
    methods:{
        deleteToken(){
            localStorage.removeItem('bearer_token');
            this.$emit('updateLoginStatus', false); 
        }
    }
}
</script>

<style></style>