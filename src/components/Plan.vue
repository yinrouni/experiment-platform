<template>
<el-container>
  <el-main>
  <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles" :title="title" :key="title"></el-step>
</el-steps>
<br>

<keep-alive>
<BeautyAssessment v-if="subIndex===0" @enableNext="fillForm" :popBeautyAssessment = "popBeautyAssessment" @close="closeDialog"/>
<PlanChoice v-if="subIndex===1" @enableNext="chosePlan" />
</keep-alive>
<div v-if="subIndex === 2">
  <el-row>
    <el-col :span="6">
      <div class="left">
      <i class='el-icon-arrow-right' />术前的血液学检查应做哪些？(多选):
       <i  v-if="chosenPlanIsCorrect& submitted" class="el-icon-circle-check right" />
        <i  v-if="!chosenPlanIsCorrect&& submitted" class="el-icon-circle-close wrong" />
      </div>
      <br>
      <div class="left options">
      <el-row>
        <el-checkbox v-model="radio" label="1" :disabled="submitted" class="form">血常规</el-checkbox>
      </el-row>
      <el-row>
          <el-checkbox v-model="radio" label="2" :disabled="submitted" class="form">血糖</el-checkbox>
      </el-row>
      <el-row>
           <el-checkbox v-model="radio" label="3" :disabled="submitted" class="form">凝血四项</el-checkbox>
      </el-row>
      <el-row>
           <el-checkbox v-model="radio" label="4" :disabled="submitted" class="form">传染病</el-checkbox>
      </el-row>
      </div>
    </el-col>
    <el-col :span="18">
            <div class="tips" v-if="submitted">
              <img src="./../assets/术前检查.jpg">
            </div>
</el-col>
  </el-row>
  <br>
  <br>
  <el-button @click="submit" v-if="!submitted" type="primary">提交</el-button>
    </div>
  </el-main>
  <el-footer>
    <Footer :subIndex="subIndex" :maxSubIndex="2" :nextEnabled="nextEnabled" @goNextSubIndex="goNext"  @goPrevSubIndex="goPrev"/>
  </el-footer>
</el-container>

</template>

<script>
import BeautyAssessment from './plan/BeautyAssessment'
import PlanChoice from './plan/PlanChoice'
import Footer from './Footer'
export default {
  name: 'Plan',
  components: {BeautyAssessment, PlanChoice, Footer},
  data () {
    return {
      titles: ['美学评估', '方案选择', '术前检查'],
      radio: [],
      submitted: false,
      subIndex: 0,
      nextEnabled: false,
      filledForm: false,
      popBeautyAssessment: false,
      chosePlanAlready: false,
      chosenPlanIsCorrect: false

    }
  },
  methods: {
    submit () {
      this.submitted = true
      this.nextEnabled = true
      if (this.radio.length < 4) {
        this.radio = ['1', '2', '3', '4']
        this.chosenPlanIsCorrect = false
      } else {
        this.chosenPlanIsCorrect = true
        this.$store.commit('addScore', {partName: 'planDiscuss', score: 3})
      }
    },
    goNext () {
      if (this.subIndex === 0 && this.filledForm) {
        this.popBeautyAssessment = true
        return
      }

      if (this.subIndex + 1 === 2 && !this.submitted) {
        this.nextEnabled = false
      }
      this.subIndex++
    },
    goPrev () {
      this.subIndex--
      this.nextEnabled = true
    },
    fillForm () {
      this.filledForm = true
      this.nextEnabled = true
    },
    closeDialog () {
      this.popBeautyAssessment = false
      this.$nextTick(() => {
        if (!this.chosePlanAlready) this.nextEnabled = false
        this.subIndex++
      })
    },
    chosePlan () {
      this.chosePlanAlready = true
      this.nextEnabled = true
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
