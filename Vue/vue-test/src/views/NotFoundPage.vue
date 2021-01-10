<template>
  <div class="main-container">
    <div class="top-bar">
      <router-link to="/">
        <div class="logo-container">
          <div class="logo"></div>
          <div class="logo-text"></div>
        </div>
      </router-link>
    </div>
    <div class="body">
      <img src="../assets/img/404.svg" style="width: 556px;"/>
      <div class="warning-text">对不起，您找的页面不存在</div>
      <div class="hint-text">请确认地址准确，或者</div>
      <div class="button-group">
        <el-button class="back" @click="$router.go(-1)">返回</el-button>
        <el-button class="back-home" @click="$router.push('/')">返回主页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>


<style scoped>
.main-container {
  min-height: 100%;
  width: 100%;
  background: #e1ecf1;
  overflow: auto;
}

.button-group {
  margin-top: 16px;
}

.button-group >>> .el-button {
  width: 112px;
  background-color: #45a8cc;
  box-shadow: 0px 2px 4px 0px 
    rgba(6, 94, 114, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: normal;
}

.button-group >>> .back-home.el-button {
  width: 112px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px 
    rgba(6, 94, 114, 0.1);
  border-radius: 8px;
  border: solid 1px #45a8cc;
  color: #34afdc;
  font-size: 16px;
  font-weight: normal;
}

.top-bar {
  background-color: #ffffff;
  box-shadow: 0px 2px 5px 0px 
    rgba(6, 94, 114, 0.1);
  align-items: center;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 72px;
}

.logo-container {
  padding: 0 2.75rem 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 3rem;
  height: 3rem;
  background-image: url('../assets/img/logo.svg');
  background-size: 100% 100%;
}

.logo-text {
  width: 18rem;
  height: 1.25rem;
  margin-left: 1.5rem;
  background-image: url('../assets/img/logo-text.svg');
  background-size: 100% 100%;
}

.body {
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 48px;
  margin: auto;
  margin-top: calc(72px + 15vh);
  background-color: #f2f5f8;
  box-shadow: 0px 2px 4px 0px 
    rgba(6, 94, 114, 0.1);
  border-radius: 10px;
  border: solid 1px #ffffff;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
}

.warning-text {
  font-size: 16px;
  color: #496577;
  margin-top: 24px;
}

.hint-text {
  margin-top: 32px;
  font-size: 16px;
  color: #45a8cc;
}
</style>
