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


    getPerfil(){
        return new Promise((resolve) => {
            let request = "api/Manage/PerfilUsuario";
            let headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('bearer_token'),
                'Content-Type': 'application/json'
            };
            console.log(localStorage.getItem('bearer_token'));
            axios.get(Global.urlCubos + request, {headers: headers}).then(response => {
                resolve(response.data);
            })
        })
    }

}
export default new ServiceCubos();