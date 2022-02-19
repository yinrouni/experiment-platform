<template>
<div>
      <Intro id="page1" class="item-content"/>
</div>
</template>

<script>
import Intro from './Intro'
export default {
  components: {Intro}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu{
  float: right;
  }
  #nav-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 5;
  }
</style>
