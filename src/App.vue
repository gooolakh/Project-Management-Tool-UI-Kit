<template>
  <div id="app">
    <router-view/>
    <router-link to="/SignUp">SignUp</router-link>
    <router-link to="/Header">Header</router-link>
    <router-link to="/Activity">Activity</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
