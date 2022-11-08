<template>
  <a-row class="main">
    <a-col :sm="{span: 24, offset: 0}" :md="{span: 12, offset: 6}">
      <a-result title="Rick & Morty Character listing">
        <template #icon>
          <youtube-outlined />
        </template>
        <template #extra>
          <a-button @click="goToCharacters" type="primary">Characters</a-button>
        </template>
      </a-result>
    </a-col>
  </a-row>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { YoutubeOutlined } from '@ant-design/icons-vue';

  const router = useRouter()
  const goToCharacters = () => router.push('/characters')
</script>

<style scoped>
  .main {
    padding: 10px;
    height: 100%;
  }
</style>