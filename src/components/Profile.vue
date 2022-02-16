<template>
  <el-container>
    <el-main>
<el-row >
  <el-col :span="12">
     <el-descriptions class="margin-top" title="病例资料" :column="1" border>
       <div slot="title">
         <h3> 病例资料</h3>
       </div>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        <span class="text">姓名</span>
      </template>
     <span class="text"> 聂非</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
       <span class="text"> 性别</span>
      </template>
      <span class="text">男</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        <span class="text">年龄</span>
      </template>
     <span class="text"> 28</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        <span class="text">职业</span>
      </template>
      <el-tag size="medium">海洋摄影师</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
       <span class="text"> 联系地址</span>
      </template>
     <span class="text"> 四川省成都市武侯区一环路南段</span>
    </el-descriptions-item>
  </el-descriptions>

  </el-col>
  <el-col :span="12">

    <img src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/image.jpeg" />

  </el-col>
</el-row>
    </el-main>
    <el-footer>
<Footer />
    </el-footer>

  </el-container>

</template>

<script>
import Footer from './Footer'
export default {
  name: 'Profile',
  components: {Footer},
  methods: {

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  img{
    width: 350px;
  }
  .el-descriptions__title{
    font-size: 18px;
  }


</style>
