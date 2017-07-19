<template>
 <a class="mint-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="mint-tab-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="mint-tab-item-label">
      <slot></slot>
    </div>
  </a>
</template>

<script type="ecmascript-6">
export default {
  props: {
    planTab: {
      type: Object
    }
  }
}
</script>
