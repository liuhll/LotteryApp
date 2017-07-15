<template>
 <div class="container-wrapper">
   <plan-tranck v-for="(n,index) in 100" :trackClass="trackClassMap[index%2]">
   </plan-tranck>
 </div>
</template>

<style lang="stylus">
.container-wrapper
  color :#8e8e8e !important
</style>

<script type="text/ecmascript-6">
import PlanTrack from 'components/plantrack/PlanTrack';

export default {
created() {
  this.trackClassMap = ['plan-track-odd', 'plan-track-even'];
},
components: {
  'plan-tranck': PlanTrack
}
}
</script>
