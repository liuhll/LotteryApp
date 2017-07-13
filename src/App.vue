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

<style  lang="stylus" rel="stylesheet/stylus">
.login-body
  background-image: url('./components/login/Login_Backgroud.png');
  background-repeat: repeat-y;
  background-size:100%;
  background-attachment: fixed;
#app
  font-family: 'MicrosoftYaHei', 'Avenir', Helvetica,   Arialsans-serif;
  font-size: 10px;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8e8e8e;
</style>
