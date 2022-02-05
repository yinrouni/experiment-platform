<template>
  <div class="container">
    <div class="header">
      <el-divider/>
      Contact Me
      <el-divider/>
    </div>
    <div class="content">
      <p>Feel free to drop a message</p>
      <el-button type="primary" plain>
        <a href="mailto:yin.ro@northeastern.edu" style="text-decoration:none; color:inherit;"> Send Email</a>
      </el-button>

      <br/>
      <br/>

      <p> Connect with me</p>
      <img class="icon" src="./../assets/icon/github.png" @click="redirect('https://github.com/yinrouni')"/>
      <img class="icon" src="./../assets/icon/linkedin.png" @click="redirect('https://www.linkedin.com/in/rouni-yin-86bb11189/')"/>

    </div>
  </div>
</template>

<script>import projectMixin from '../mixins/project'
export default {
  name: 'Contact',
  mixins: [projectMixin]
}
</script>

<style scoped>
  @import "../assets/style.css";
  .icon{
    width: 50px;
    margin-left: 10px;
  }
  .container{
    height: 500px;
  }

</style>
