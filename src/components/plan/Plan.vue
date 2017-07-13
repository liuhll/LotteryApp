<template>
 <div class="container-wrapper">
   <mt-cell v-for="n in 10" :title="'餐厅 ' + n" />
 </div>
</template>

<style lang="stylus">
.container-wrapper
  color :red
  background :red
</style>
