<template>
  <div id="left-section">
    <div>
        <StoriesSection />
        <PostsSection />
    </div>
  </div>
</template>

<script>
import StoriesSection from './StoriesSection.vue';
import PostsSection from './PostsSection.vue';

export default {
    name: 'MainSection',
    components: {StoriesSection, PostsSection},
}
</script>

<style lang="scss" scoped>

#left-section {
    height: 40rem;
    background-color: pink;
}

</style>