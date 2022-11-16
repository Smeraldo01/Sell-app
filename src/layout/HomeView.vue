<template>
  <div class="container">
    <!-- 1.0 头部商家显示 -->
    <header>
      <Header />
    </header>
    <!-- 2.0 Main的tab切换 -->
    <main>
      <Main />
    </main>
    <!-- 3.0 底部商品信息 -->
    <footer></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  components: {
    Header,
    Main
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 0 auto;
  header {
    flex: 0 0 120px;
  }
  main {
    flex: 1;
  }
  footer {
    flex: 0 0 50px;
    background-color: #ccc;
  }
}
</style>
