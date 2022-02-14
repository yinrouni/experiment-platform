<template>
  <div class="container">
    <img src="./../assets/IMG_5662.png" style="width: 100%; height: 100%"/>
    <div class="name">
      <h1 style="font-size: 3em">
        前牙即刻种植修复虚拟仿真实验
      </h1>

       <el-button type="primary" plain round @click="enter">马上体验</el-button>
<br>

      <h2> 华理种植小分队</h2>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Intro',
  methods: {
    enter: function () {
      this.$router.push('/test')
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
