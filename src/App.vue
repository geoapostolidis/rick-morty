<template>
  <Layout class="container">
    <LayoutHeader class="header">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '40px' }"
        @click="selectMenu"
      >
        <a-menu-item key="/">Home</a-menu-item>
        <a-menu-item key="/characters">Characters</a-menu-item>
      </a-menu>
    </LayoutHeader>
    <LayoutContent>
      <RouterView />
    </LayoutContent>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, useRouter, useRoute } from "vue-router";
import { Layout, LayoutContent, LayoutHeader } from 'ant-design-vue';

const route = useRoute()
const router = useRouter()

const selectedKeys = ref([route.path])

const selectMenu = ( { key }) => {
  router.push(key)
}
</script>

<style scoped>
  .header {
    height: 40px;
  }
  .container {
    height: 100vh;
  }
</style>
