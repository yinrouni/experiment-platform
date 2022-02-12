<template>
  <div>
  <div class="question">
    {{questions[currentIndex].id + 1}}. {{questions[currentIndex].q}}
    <br>
    <br>
    <div v-for="(option, index) in questions[currentIndex].a" class="options" :key="option">
      <el-radio :disabled="submitted" v-model="choices[currentIndex]" :label="index" @change="clickOption">
        <span>
        {{option}}
        <i  v-if="index === questions[currentIndex].k && submitted" class="el-icon-circle-check right" />
        <i  v-if="index !== questions[currentIndex].k && choices[currentIndex] === index && submitted" class="el-icon-circle-close wrong" />
        </span>
        </el-radio>
    </div>

    <br>
  <div class="center">
    <el-button v-if="currentIndex === questions.length -1 && !submitted" @click="submit"> 提交 </el-button>
  </div>
    <br>
    <br>

    <div class="pages center">
      <i v-if="currentIndex !== 0" class="el-icon-arrow-left" @click="prevQuestion"/>
      <span class="page">      {{currentIndex + 1}} / {{questions.length}}      </span>
      <i v-if="currentIndex < questions.length -1" class="el-icon-arrow-right" @click="nextQuestion" />
    </div>
  </div>

  </div>

</template>

<script>
export default {
  name: 'QuestionCard',
  data () {
    return {
      submitted: false,
      currentIndex: 0,
      choices: [],
      questions: [
        {id: 0,
          q: '可摘局部义齿的缺点:',
          a: ['A. 磨除牙体组织少', 'B. 初期佩戴异物感明显', 'C. 易于修理', 'D .制作方法简单费用较低'],
          k: 1
        },
        {
          id: 1,
          q: '固定桥的优点不包括:',
          a: ['A. 美观性高 ', 'B. 磨除牙体组织多,适用范围小 ', 'C. 稳定固位、支持良好,能充分恢复因缺牙而丧失的部分咀嚼功能 ', 'D. 与原牙列中的同名牙大小和外形相似,无异物感,不影响舌的功能活动'],
          k: 1
        },
        {
          id: 2,
          q: '即刻种植的优点不包括:',
          a: ['A. 缩短治疗时间', 'B. 能获得满意的初期稳定性', 'C. 减少患者恐惧', 'D. 前牙区域即刻恢复美观'],
          k: 1
        },
        {
          id: 3,
          q: '种植义齿的适应症:',
          a: ['A. 糖尿病患者 血糖9.0mmol/L', 'B. 缺牙区严重病变', 'C. 由于心理或生理原因不习惯可摘局部义齿者', 'D. 重度骨质疏松患者'],
          k: 2
        },
        {
          id: 4,
          q: '最终患者选择了哪种方案: ',
          a: ['A. 拔除21，早期种植', 'B. 拔除21，即刻种植、即刻修复', 'C. 拔除21，活动义齿修复', 'D. 拔除21，固定桥修复'],
          k: 1
        }

      ]
    }
  },
  methods: {
    nextQuestion () {
      this.$data.currentIndex++
    },
    prevQuestion () {
      this.$data.currentIndex--
    },
    submit () {
      this.$data.submitted = true
      let score = 0
      this.choices.forEach((choice, index) => {
        if (choice === this.questions[index].k) {
          score += 1.5
        }
      })
      this.$store.commit('addScore', {partName: 'planDiscuss', score})
      this.$emit('popRes', this.choices.map((choice, index) => { return choice === this.questions[index].k }))
    },
    clickOption: function (label) {

      // setTimeout(()=>{
      //   this.$data.choice = undefined
      //   this.$data.currentIndex ++;
      // }, 2000)

    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .question{
    margin-left: 50px;
    margin-right: 15px;
    text-align: left;
  }
  .options{
    margin-top: 5px;
    margin-bottom: 5px;
  }

  span{
    white-space: normal;
  }

  .page{
    white-space: pre;
  }

</style>
