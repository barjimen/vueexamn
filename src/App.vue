<template>
  <MenuComponent :isLogin="isLogin" @updateLoginStatus="updateLoginStatus"/>
  <router-view @updateLoginStatus="updateLoginStatus"/>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
    
  },
  data() {
    return{
      isLogin: localStorage.getItem('bearer_token') != null
    }
  },
  methods: {
    updateLoginStatus(status) {
      this.isLogin = status;
    }
  }
}
</script>

<style>

</style>
