import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import CubosComponent from "./components/CubosComponent.vue";
import SesionComponent from "./components/SesionComponent.vue";
import RegistroComponent from "./components/RegistroComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/detalles/:id", component: DetallesComponent
    },
    {
        path: "/cubos/:marca", component: CubosComponent
    },
    {
        path: "/login", component: SesionComponent
    },
    {
        path: "/registro", component: RegistroComponent
    },
    {
        path: "/perfil", component: PerfilComponent
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;