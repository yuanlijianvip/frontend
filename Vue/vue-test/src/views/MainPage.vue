<template>
  <div class="main-page">
    首页
    <div>1-{{title}}</div>
    <A :title.sync="title" :counta.sync="counta">
      <template v-slot:header="data">{{data.count}}-{{counta}}  header-slot</template>
      main
      <template v-slot:footer>footer-slot</template>
    </A>
    <B></B>
    <input type="text" v-focus />
  </div>
</template>

<script>
import A from '@/components/A.vue';
import B from '@/components/B.vue';

export default {
  data() {
    return {
      title: 'test-title',
      counta: 1
    };
  },
  components: {
    A,
    B
  }
};
</script>
<style lang="scss" scoped>
.main-page {
  
} 
</style>
