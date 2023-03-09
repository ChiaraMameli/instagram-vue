<template>
  <div>
    <BaseHeader />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue';
export default {
  name: 'App',
  components: {
    BaseHeader,
  }
}
</script>

<style lang="scss">
@import 'bootstrap';
@import './assets/scss/style.scss';
</style>
