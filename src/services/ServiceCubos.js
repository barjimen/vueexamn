import Global from "../Global";
import axios from "axios";
class ServiceCubos {
    //Con esto cargamos los cubos para poder mostrarlos en home
    getCubos() {
        return new Promise(function (resolve) {
            let cubos = []; //La array de cubos
            let request = "/api/Cubos";
            let url = Global.urlCubos + request;
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })


    }

    getCompras() {
        return new Promise((resolve) => {
            let request = "/api/Compra/ComprasUsuario";
            let url = Global.urlCubos + request;
            let token = localStorage.getItem('bearer_token');
            let config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
            .get(url, config)
            .then(response => {
                this.compras = response.data;
                resolve(this.compras);   
            })
        })

    }

    getCubosMarca(marca) {
        return new Promise(function (resolve) {
            let cubos = [];
            let request = "api/Cubos/CubosMarca/" + marca;
            let url = Global.urlCubos + request;
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getMarcas() {
        return new Promise(function (resolve) {
            let marcas = []; //La array de marcas
            let request = "/api/cubos/marcas";
            let url = Global.urlCubos + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    loadCubo(id) {
        return new Promise(function (resolve) {
            let cubo = []; //La array de cubos
            let request = "/api/Cubos/" + id;
            let url = Global.urlCubos + request;
            axios.get(url).then(response => {
                cubo = response.data;
                resolve(cubo);
            })
        })

    }

    getComenterios(id) {
        return new Promise(function (resolve) {
            let comentarios = []; //La array de comentarios
            let request = "api/ComentariosCubo/GetComentariosCubo/" + id;
            let url = Global.urlCubos + request;
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }

    getToken(user) {
        return new Promise((resolve) => {
            let request = "/api/Manage/Login"
            axios.post(Global.urlCubos + request, user,
                { headers: { 'Content-Type': 'application/json' } }).then(response => {
                    resolve(response.data.response);
                })
        })
    }


    getPerfil() {
        return new Promise((resolve) => {
            let request = "api/Manage/PerfilUsuario";
            let token = localStorage.getItem('bearer_token');
            let config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };
            axios.get(Global.urlCubos + request, config)
                .then(response => {
                    resolve(response.data);
                })
        });
    }

    insertPedido(pedido) {
        return new Promise((resolve) => {
            let request = `/api/Compra/InsertarPedido/${idCubo}`;
            let token = localStorage.getItem('bearer_token');
            let config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };
            let pedido = {
                idCubo: pedido.idCubo,
                idPedido: pedido.idPedido,
                idUsuario: pedido.idUsuario,
                fechaPedido: pedido.fechaPedido
            };
            axios.post(Global.urlCubos + request, pedido, config)
                .then(response => {
                    resolve(response.data);
                })
        })
    }


}
export default new ServiceCubos();