<template>
  <div>
    <p><slot name="header" :count="count"></slot></p>
    
    <div>a-{{count}}</div>
    <p><slot></slot></p>
    
    <div>a-{{title}}</div>
    <div>a-{{counta}}</div>
    <el-button @click="onClick">click</el-button>
    <p><slot name="footer"></slot></p>
    
  </div>
</template>

<script>
const mixinA = {
  mounted() {
    console.log('mounted完成');
  }
}

export default {
  data() {
    return {
      count: 0
    }
  },
  mixins: [mixinA],
  props: ['title', 'counta'],
  methods: {
    onClick() {
      this.count++;
      this.$emit('update:title', this.title+this.count);
      this.$emit('update:counta',this.counta+this.count);
    }
  },
  // mounted() {
  //   console.log("mounted完成");
  // }
}
</script>

<style>

</style>