<template>
  <div class="container">
    <form class="container m-5 p-4 border rounded" style="max-width: 400px" @submit.prevent="login">
      <h1>Iniciar sesión</h1>
      <hr />
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Ingresa tu nombre de usuario"
          v-model="user.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Ingresa tu contraseña"
          v-model="user.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
export default {
  name: "SesionComponent",
  data() {
    return {
      user: {
        email: "user1@mail.com",
        password: "12345",
      },
    };
  },
  methods: {
    login() {
      ServiceCubos.getToken(this.user).then((response) => {
        console.log(response);
        localStorage.setItem('bearer_token', 'Bearer' + response);
        this.$emit('updateLoginStatus', true)
        this.$router.push('/');
      });
    },
  },
};
</script>

<style></style>