<template>
  <div class="tabs">
    <!-- tab选项 -->
    <div class="links">
      <router-link to="/">商品</router-link>
      <router-link to="/rates">评价</router-link>
      <router-link to="/shop">商家</router-link>
    </div>
    <!-- 占位的盒子 -->
    <div class="tab-con">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  height: 100%;
  .links {
    flex: 0 0 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    a {
      flex: 1;
      text-align: center;
      color: #333;
    }
  }
  .tab-con {
    flex: 1;
  }
}
.router-link-exact-active {
  color: #f80 !important;
}
</style>