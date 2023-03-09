<template>
  <div>
    <BaseHeader />
    <BaseMain />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue';
import BaseMain from './components/BaseMain.vue';
export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain,
  }
}
</script>

<style lang="scss">
@import 'bootstrap';
@import './assets/scss/style.scss';
</style>
