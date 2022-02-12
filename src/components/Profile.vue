<template>
  <el-container>
    <el-main>
<el-row >
  <el-col :span="12">
     <el-descriptions class="margin-top" title="病例资料" :column="1" border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        姓名
      </template>
      聂非
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        性别
      </template>
      男
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        年龄
      </template>
      28
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        职业
      </template>
      <el-tag size="small">海洋摄影师</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      四川省成都市武侯区一环路南段
    </el-descriptions-item>
  </el-descriptions>

  </el-col>
  <el-col :span="12">

    <img src="./../assets/image.jpeg" />

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
</style>
