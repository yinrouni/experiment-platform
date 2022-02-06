<template>
  <div>
<el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles" :title="title" :key="title"></el-step>
</el-steps>
<br>
    <Chat v-if="subIndex === 0"/>
    <History v-if="subIndex === 2"/>
  </div>

</template>

<script>
import Chat from './Chat'
import History from './History'
export default {
  name: 'Collect',
  components: {Chat, History},
  props: {subIndex: Number},

  data () {
    return {
      titles: ['问诊检查', '一般检查', '既往病史', '影像学检查']
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
  /* @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
</style>
