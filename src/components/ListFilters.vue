<template>
  <a-row>
    <a-col :xs="12">
      <a-select
        ref="select"
        :value="gender"
        style="width: 120px"
        :options="options"
        placeholder="Gender"
        :allowClear="true"
        @change="handleGenderChange"
      ></a-select>
    </a-col>
    <a-col :xs="12">
      <a-input 
        :value="name" 
        :allowClear="true"
        @change="handleNameChange" 
        placeholder="Name" 
      />
    </a-col>
  </a-row>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from 'vuex';

  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  const gender = computed(() => store.state.gender)
  const name = computed(() => store.state.name)

  const options = ref([{
    value: 'female',
    label: 'Female'
  }, {
    value: 'male',
    label: 'Male'
  }, {
    value: 'genderless',
    label: 'Genderless'
  }, {
    value: 'unknown',
    label: 'Unknown'
  }]);

  const handleGenderChange = value => {
    store.dispatch('setGender', value)
    router.replace({query: {...route.query, gender: value, page: 1}})
  }
  
  const handleNameChange = e => {
    store.dispatch('setName', e.target.value)
    router.replace({query: {...route.query, name: e.target.value || undefined, page: 1}})
  } 
</script>