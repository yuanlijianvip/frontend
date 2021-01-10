<template>
  <div>

  </div>
</template>

<script>
const mixinA = {
  mounted() {
    console.log('mounted完成');
  }
}

export default {
  mixins: [mixinA]
  // mounted() {
  //   console.log("mounted完成");
  // }
}
</script>

<style lang="sass" scoped>

</style>