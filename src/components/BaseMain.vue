<template>
  <main class="container">
    <div class="row">
        <MainSection class="col-8" />
        <SideSection class="col-4" />
    </div>
  </main>
</template>

<script>
import MainSection from './MainSection.vue';
import SideSection from './SideSection.vue';
export default {
    name: 'BaseMain',
    components: { MainSection, SideSection},
}
</script>

<style>

</style>