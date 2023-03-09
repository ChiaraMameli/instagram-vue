<template>
  <header>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-2">Pippo</div>
            <div class="col-2 text-center">Pippo</div>
            <div class="col-2 d-flex justify-content-between">
                <div>Ciccio</div>
                <div>Ciccio</div>
                <div>Ciccio</div>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'BaseHeader',
}
</script>

<style scoped lang="scss">

header {
    height: 5rem;
    background-color: aquamarine;
    padding: 1rem;
}

</style>