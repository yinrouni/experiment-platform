<template>
<el-container>
  <el-main>
  <div style="text-align:center">
    <img v-if="!signed" src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E7%9F%A5%E6%83%85%E5%90%8C%E6%84%8F%E6%9C%AF%E4%B9%A6.jpg"/>
     <img  v-else src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E7%AD%BE%E5%90%8D%E7%9F%A5%E6%83%85%E5%90%8C%E6%84%8F%E6%9C%AF%E4%B9%A6.jpg"/>
    <div class="center">
    <el-button v-if="!signed" @click="sign" type="primary">签名</el-button>
    </div>
  </div>
  </el-main>
  <el-footer>
    <Footer :nextEnabled="signed"/>

  </el-footer>
</el-container>

</template>

<script>
import Footer from './Footer'
export default {
  name: 'Agreement',
  components: {Footer},
  data () {
    return {
      signed: false
    }
  },
  methods: {
    sign: function () {
      this.$data.signed = true
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  img{
    width: 1050px;
  }
  .center{
    text-align: center;

  }

</style>
