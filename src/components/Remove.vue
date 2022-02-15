<template>
<el-container>
  <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles" :title="title" :key="title"></el-step>
</el-steps>
<br>
<br>
<div>
  <div class="questions" v-show="subIndex===0">
    <el-row>
      <el-col :span="13">
           <div class="type">
    <span>
      <b>
      单选题
      </b>
    </span>
<br>
<div v-for="(question, index) in questions" :key="index">
<br>
    <div>
      <div>
        {{index +1}}.{{question.q}}
      </div>
      <div>
        <el-radio-group v-model="keys[question.id]" :disabled="submitted">

<div class="options">
        <el-radio  v-for="(option, indexA) in question.a" :label="indexA" :key="option" class="form">
          <span>{{option}}
            <i v-if="indexA === question.k && submitted"
            class="el-icon-circle-check right" />
            <i  v-if="indexA !== question.k && indexA === keys[question.id] && submitted" class="el-icon-circle-close wrong" />

          </span>
        </el-radio>
</div>
        </el-radio-group>
      </div>
    </div>
</div>

    </div>

      </el-col>
       <el-col :span="11">
         <img src='http://bpic.588ku.com/element_pic/17/06/27/6bdc36fe5f24ec3d28254c5c7cc1e896.jpg' />
      </el-col>
    </el-row>
<br>
<br>
  <el-button @click="submit" v-if="!submitted" type="primary">提交</el-button>
  </div>

  <div class="video" v-if="subIndex>0">
    <video :src="videoSrc" autoplay=true  controls="controls" />
  </div>

</div>
  <el-footer>
    <Footer :subIndex="subIndex" :maxSubIndex="5" :nextEnabled="nextEnabled" @goNextSubIndex="goNext"  @goPrevSubIndex="goPrev"/>

  </el-footer>

</el-container>

</template>

<script>
import Footer from './Footer'
export default {
  name: 'Remove',
  components: {Footer},

  computed: {
    videoSrc: function () {
      const i = this.titles[this.subIndex]
      return require('./../assets/' + i + '.mp4')
    }
  },

  deactivated () {
    clearTimeout(this.timeoutID)
  },

  data () {
    return {
      timeoutID: undefined,
      watched: [],
      subIndex: 0,
      keys: [],
      submitted: false,
      nextEnabled: false,
      titles: ['测试', '口外消毒', '铺巾', '口内消毒', '局部麻醉', '微创拔牙'],
      questions: [
        {id: 0,
          q: '口内消毒药物选择 ( )',
          a: ['A．0.5%碘伏', 'B．1%碘酊', 'C．75%酒精',
            'D．1%过氧乙酸'],
          k: 0
        },
        {
          id: 1,
          q: '消毒顺序 ( )',
          a: ['A．由内到外',
            'B．由外到内',
            'C．由上到下',
            'D．由左到右'],
          k: 0
        },
        {
          id: 2,
          q: '对21实施浸润麻醉应选择的麻醉位点（ ）',
          a: ['A．根尖部',
            'B．根中部',
            'C．牙颈部',
            'D．龈沟处'],
          k: 0
        }

      ]
    }
  },
  methods: {
    submit: function () {
      this.submitted = true
      this.nextEnabled = true
      let score = 0
      this.questions.forEach((question) => {
        if (question.k === this.keys[question.id]) {
          score += 1.5
        }
      })
      this.$store.commit('addScore', {partName: 'remove', score})
    },
    goNext () {
      this.nextEnabled = false
      this.subIndex++

      if (this.watched.includes(this.subIndex)) {
        this.nextEnabled = true
      } else {
        this.watched.push(this.subIndex)
        this.timeoutID = setTimeout(() => {
          this.nextEnabled = true
        }, 2000)
      }
    },

    goPrev () {
      this.subIndex--
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  .name{
    color: white;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  video{
    width: 75%
  }
</style>
