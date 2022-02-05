<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
      <el-carousel height="500px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <img :src="format('ImageProcessor',item)" style="height: 100%"/>
        </el-carousel-item>
      </el-carousel>
      </el-col>
      <el-col :span="16">
        <h3>Image Processor</h3>
        <br/>
        <ul style="text-align: left">
          <li>
            Developed OOP application in Java that can process images by filtering and toning, generate images
          </li>
          <br/>
          <li>
            Designed and built GUI with Java Swing library for displaying image according to input batch script and supporting
            user-interactive operations including open, save, undo, redo and process
          </li>
          <br/>
        </ul>
        <br/>
        <br/>
      <el-button plain type="primary" @click="redirect('https://github.com/yinrouni/Object-Oriented-Design/tree/master/image%20processor')">
        Github
      </el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import projectMixin from '../mixins/project'
export default {
  name: 'ImageProcessor',
  mixins: [projectMixin]
}
</script>

<style scoped>
  .el-carousel__item {
    background-color: #e8f2ff;
  }

</style>
