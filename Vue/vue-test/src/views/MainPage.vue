<template>
  <div class="main-page">
    首页
    <div>1-{{title}}</div>
    <aaa :title.sync="title" :counta.sync="counta"/>
  </div>
</template>

<script>
import aaa from '@/components/aaa.vue';

export default {
  data() {
    return {
      title: 'test-title',
      counta: 1
    }
  },
  components: {
    aaa
  }
};
</script>
<style lang="scss" scoped>
.main-page {
  
} 
</style>
