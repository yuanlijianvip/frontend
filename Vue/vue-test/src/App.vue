<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const skeleton = document.getElementById('skeleton');
    if (skeleton) {
      document.body.removeChild(skeleton);
    }
  }
};
</script>

<style lang="scss">
@import './scss/color.scss';
@import './scss/el.scss';

html, body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*{
  box-sizing: border-box;
}

span.highlight {
  color:  #45a8cc;
  // background-color: #356176 !important;
}

.set-vertical-align {
  vertical-align: middle;
}

span.negative-height {
  color: #36c292;
}

span.positive-height {
  color: #ff5b65;
}

textarea {
  border: 1px solid transparent !important;
  &:hover {
    border: 1px solid #d1d2da !important;
  }
  &:focus {
    border: 1px solid #747990 !important;
  }
}

.el-loading-mask{
  min-height: 200px;
  background: none !important;
  .el-loading-spinner .path{
    stroke:#858284;
  }
}
.el-select .el-input__inner {
  line-height: 125%;
}

.el-input .el-input__inner {
  line-height: 125% !important;
}
</style>
