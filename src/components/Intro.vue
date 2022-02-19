<template>
  <div class="container">
    <img src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/IMG_6006.JPG" style="width: 100%; height: 100%"/>
    <div class="name">
      <h1 style="font-size: 3em">
        前牙即刻种植修复
      </h1>
       <h1 style="font-size: 3em">
    虚拟仿真实验
      </h1>
      <br>
      <h2> 华理种植小分队</h2>
      <br>
      <br>
      <br>
       <el-button type="primary" plain round @click="enter">马上体验</el-button>
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
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
  }
</style>
