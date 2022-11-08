<template>
  <a-row class="main">
    <a-col :sm="{span: 24, offset: 0}" :md="{span: 12, offset: 6}">
       <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
          <a-button @click="goToHome"  type="primary">Back Home</a-button>
        </template>
      </a-result>
    </a-col>
  </a-row>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { YoutubeOutlined } from '@ant-design/icons-vue';

  const router = useRouter()
  const goToHome = () => router.push('/')
</script>

<style scoped>
  .main {
    padding: 10px;
    height: 100%;
  }
</style>