<template>
  <div class="lottery-history-wrapper">
    <v-header :title="title"></v-header>
    <div class="lottery-history-list-wrapper"></div>
  </div>
</template>

<script type="ecmascript-6">
import Header from 'components/header/Header'
export default {
  data() {
    return {
      title: {
        text: '开奖历史',
        showBack: true
      }
    }
  },
  components: {
    'v-header': Header
  }
}
</script>