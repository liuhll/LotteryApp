<template>
<div class="container" id="app">
  <transition name="fade">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.login-body{
  background-image: url('./components/login/Login_Backgroud.png');
  background-repeat: repeat-y;
  background-size:100%;
  background-attachment: fixed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
