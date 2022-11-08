<template>
  <a-row class="main">
    <a-col :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4}">
      <a-col :xs="24">
        <ListFilters />
      </a-col>
      <a-col :xs="24">
        <List />
      </a-col>
    </a-col>
  </a-row>
</template>

<script setup>
  import { onBeforeMount, onUnmounted } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from 'vuex'
  import List from "../components/List.vue";
  import ListFilters from "../components/ListFilters.vue";

  const route = useRoute()
  const store = useStore()

  onBeforeMount(() => {
    const { query } = route
    if (query.page) store.commit('setCurrent', parseInt(query.page))
    if (query.gender && ['female', 'male', 'genderless', 'unknown'].includes(query.gender)) store.commit('setGender', query.gender)
    if (query.name) store.commit('setName', query.name)
    store.dispatch('loadRecords')
  })

   onUnmounted(() => {
    store.commit('setCurrent', parseInt(1))
    store.commit('setGender', undefined)
    store.commit('setName', undefined)
  })
</script>

<style scoped>
  .main {
    padding: 10px;
    height: 100%;
  }
</style>