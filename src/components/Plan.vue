<template>
<div>
  <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles" :title="title" :key="title"></el-step>
</el-steps>
<br>

<BeautyAssessment v-if="subIndex===0"/>
<PlanChoice v-if="subIndex===1"/>
<div v-if="subIndex === 2">
  <el-row>
    <el-col :span="6">
      <div class="left">
      <i class='el-icon-arrow-right' />术前的血液学检查应做哪些？(多选):
      </div>
      <br>
      <div class="left" v-if="radio !=='6'">
      <el-row>
        <el-checkbox v-model="radio" label="1">血常规</el-checkbox>
      </el-row>
      <el-row>
          <el-checkbox v-model="radio" label="2">血糖</el-checkbox>
      </el-row>
      <el-row>
           <el-checkbox v-model="radio" label="3">凝血四项</el-checkbox>
      </el-row>
      <el-row>
           <el-checkbox v-model="radio" label="4">传染病</el-checkbox>
      </el-row>
      </div>
    </el-col>
    <el-col ;span="18>"
            <div class="tips" v-if="radio.length === 4">
              <img src="./../assets/术前检查.jpg">
            </div>
</el-col>
  </el-row>
    </div>
</div>

</template>

<script>
import BeautyAssessment from './BeautyAssessment'
import PlanChoice from './PlanChoice'
export default {
  name: 'Plan',
  components: {BeautyAssessment, PlanChoice},
  props: {subIndex: Number},
  data () {
    return {
      titles: ['美学评估', '方案选择', '术前检查'],
      radio: []
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
  @import "../assets/style.css";
  img{width: 750px;
  margin-top: -30px;
  }

</style>
