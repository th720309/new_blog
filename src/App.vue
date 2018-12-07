<template>
  <div id="app">
    <div class="body">
      <Nav></Nav>
      <Me></Me>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/nav/Nav'
import Me from '@/components/me/Me'
export default {
  components: {
    Nav,
    Me
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .body {
    width: 650px;
    margin: 0 auto;
  }
}

</style>
