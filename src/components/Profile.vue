<template>
<el-row >
  <el-col :span="12">
     <el-descriptions class="margin-top" title="病例资料" :column="1" border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
    </el-descriptions-item>
  </el-descriptions>

  </el-col>
  <el-col :span="12">

    <img src="./../assets/image.jpeg" />

  </el-col>
</el-row>

</template>

<script>
export default {
  name: 'Profile',
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
