<template>
  <el-row>
    <el-col :span="15">
      <video src="./../assets/dialog-script.mp4"  controls="controls"/>

    </el-col>
     <el-col :span="9">
       <div style="margin-left:30px">
       <h4>
         单选题：
       </h4>
       </div>
       <div>
         <QuestionCard/>
       </div>

    </el-col>

  </el-row>

</template>

<script>
import QuestionCard from './QuestionCard'
export default {
  components: {QuestionCard},
  name: 'PlanChoice',
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
video{
  width: 100%;
}

h4{
  text-align: left;

}
</style>
