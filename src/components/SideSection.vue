<template>
  <div id="right-section">
    <PersonalSection />
    <SuggestionSection />
  </div>
</template>

<script>
import PersonalSection from './PersonalSection.vue';
import SuggestionSection from './SuggestionSection.vue';

export default {
    name: 'SideSection',
    components:{PersonalSection, SuggestionSection}
}
</script>

<style>
#right-section {
    height: 40rem;
    background-color: lightblue;
}

</style>