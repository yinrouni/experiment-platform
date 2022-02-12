<template>
<el-container>
  <el-main>
  <div style="text-align:center">
    <img v-if="!signed" id="img" src="./../assets/知情同意术书.jpg"/>
     <img v-else src="./../assets/签名知情同意术书.jpg"/>
    <div class="center">
    <el-button v-if="!signed" @click="sign">签名</el-button>
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
