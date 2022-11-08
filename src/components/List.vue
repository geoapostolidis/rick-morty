<template>
  <a-list item-layout="vertical" size="large" class="list" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <a-list-item-meta :description="item.description">
          <template #title>
            <a-row :gutter="[2,2]" class="description">
              <a-col :xs="24">
                <a :href="item.href" class="name">{{ item.name }}</a>
              </a-col>
              <a-col :xs="24" :sm="8">
                <ItemDetail title="Gender" :value="item.gender" />
              </a-col>
              <a-col :xs="24" :sm="8">
                <ItemDetail title="Species" :value="item.species" />
              </a-col>
              <a-col :xs="24" :sm="8">
                <ItemDetail title="Status" :value="item.status" />
              </a-col>
              <a-col :xs="24" :sm="8">
                <ItemDetail title="Origin" :value="item.origin.name" />
              </a-col>
              <a-col :xs="24" :sm="8">
                <ItemDetail title="Type" :value="item.type" />
              </a-col>
              <a-col :xs="24" :sm="8">
                <ItemDetail title="Location" :value="item.location.name" />
              </a-col>
            </a-row>
          </template>
          <template #avatar><a-avatar :src="loading ? fallback : item.image" crossOrigin="anonymous" :size="70" shape="square" /></template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <a-pagination class="pagination" :current="current" :total="count" :showSizeChanger="false" :pageSize="pageSize" @change="onChange"></a-pagination>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from "vue-router";
  import { useStore } from 'vuex'
  import ItemDetail from './ItemDetail.vue';
  import { fallback } from '../utils/constants'

  const store = useStore()
  const route = useRoute()
  const router = useRouter()

  const data = computed(() => store.state.list)
  const count = computed(() => store.state.count)
  const current = computed(() => store.state.current)
  const pageSize = computed(() => store.state.pageSize)
  const loading = computed(() => store.state.loading)

  const onChange = (page) => {
    store.dispatch('setCurrent', page)
    router.replace({query: {...route.query, page}})
  }

</script>

<style scoped>
.name {
  font-weight: bold;
  font-size: 16px;
}
.pagination {
  display: flex;
  justify-content: center;
}
.list {
  margin: 10px;
  height: calc(100vh - 140px);
  overflow: auto;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gainsboro;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
} 
</style>