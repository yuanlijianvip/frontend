<template>
  <div>
    <div>{{count}}</div>
    <div>{{title}}</div>
    <div>{{counta}}</div>
    <el-button @click="onClick">click</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  props: ['title', 'counta'],
  methods: {
    onClick() {
      this.count++;
      this.$emit('update:title', this.title+this.count);
      this.$emit('update:counta',this.counta+this.count);
    }
  }
}
</script>

<style>

</style>