<template>
 <div class="container-wrapper">
   <mt-cell v-for="(n,index) in 100" :title="'计划追号 ' + n" />
 </div>
</template>

<style lang="stylus">
.container-wrapper
  color :red
</style>
