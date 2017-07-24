<template>
<div>
  <v-header :title="title"></v-header>
</div>
</template>

<style lang="stylus">

</style>

<script type="ecmascript-6">
import Header from 'components/header/Header';
export default {
  data() {
    return {
      title: {
        text: '基础指标设置',
        showBack: true
      }
    };
  },
  components: {
    'v-header': Header
  }
}
</script>
