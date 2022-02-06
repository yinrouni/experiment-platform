<template>
  <div style="text-align:center">
    <img v-if="!signed" id="img" src="./../assets/知情同意术书.jpg"/>
     <img v-else src="./../assets/签名知情同意术书.jpg"/>
    <div class="center">
    <el-button v-if="!signed" @click="sign">签名</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Agreement',
  data(){
    return {
      signed: false
    }
  },
  methods: {
    sign: function(){
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
