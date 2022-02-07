<template>
  <div>
     <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles"  :title="title" :key="title"></el-step>
</el-steps>
  </div>

</template>

<script>
export default {
  name: 'Plant',
  props: {subIndex: Number},
  data(){
    return{
    titles:['测试', '球钻定位', '先锋钻洞预备', '检查方向', 'Φ2.8孔钻扩孔', 'Φ3.6孔钻扩孔', '植入种植体', '填充骨粉', '数字化取模型', '戴临时修复体', '调𬌗']
    }
  }, 
  methods: {
    enter: function () {
      console.log('to test')
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
