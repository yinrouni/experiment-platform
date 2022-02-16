<template>
<el-container>
       <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles"  :title="title" :key="title"></el-step>
</el-steps>
  <div class="questions" v-if="subIndex===0">
    <br>
    <el-row>
      <el-col :span="12">
           <div class="type">
    <span>
      <b>
      单选题
      </b>
    </span>
<br>
<br>
<div v-for="(question, index) in questions" :key="index">
    <div>
      <div class="question-body">
        {{index +1}}.{{question.q}}
      </div>
      <div>
        <el-radio-group v-model="keys[question.id]" :disabled="submitted">

        <el-radio  v-for="(option, indexA) in question.a" :label="indexA" :key="option" class="form">
           <i v-if="indexA === question.k && submitted"
            class="el-icon-circle-check right" />
            <i  v-if="indexA !== question.k && indexA === keys[question.id] && submitted" class="el-icon-circle-close wrong" />
          <span style="white-space: pre">{{option}}
          </span>
        </el-radio>
        </el-radio-group>
      </div>
    </div>
</div>

    </div>

      </el-col>
       <el-col :span="12">
         <img src='http://5b0988e595225.cdn.sohucs.com/images/20180224/f084b80f8161457b8484ef2bf979d0b8.jpeg' />
      </el-col>
    </el-row>
<br>
  <el-button @click="submit" v-if="!submitted" type="primary">提交</el-button>
  </div>
<keep-alive>
  <Qiuzuan  v-if="subIndex===1" @enableNext="enableNext"/>
    <Xianfeng  v-if="subIndex===2" @enableNext="enableNext"/>
    <DirectionCheck v-if="subIndex===3" @enableNext="enableNext"/>
    <Hole28 v-if="subIndex===4" @enableNext="enableNext"/>
     <Hole36 v-if="subIndex===5" @enableNext="enableNext"/>
     <Planting v-if="subIndex===6" @enableNext="enableNext"/>
</keep-alive>
     <div v-if="subIndex===7">
       <el-row>
         <el-col :span="4">
          &emsp;
         </el-col>
          <el-col :span="16">
           <video src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E5%A1%AB%E5%85%85%E9%AA%A8%E7%B2%89.mp4" autoplay=true controls="controls" />
           <ul class="type">
             <li> 旋上覆盖螺丝，于跳跃间隙填充骨粉。</li>
           </ul>
         </el-col>
         <el-col :span="4">
           &#13;
         </el-col>
       </el-row>
     </div>
     <div v-if="subIndex===8">
       <el-row>
         <el-col :span="4">
          &emsp;
         </el-col>
          <el-col :span="16">
           <video src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E6%95%B0%E5%AD%97%E5%8C%96%E5%8F%96%E6%A8%A1%E5%9E%8B.mp4" autoplay=true controls="controls" />
           <ul class="type">
             <li> 将覆盖螺丝替换为扫描杆，使用口腔扫描仪于患者口中进行上颌、下颌、及咬合的模型扫描。</li>
           </ul>
         </el-col>
         <el-col :span="4">
           &#13;
         </el-col>
       </el-row>
     </div>
     <keep-alive>
      <TempWear v-if="subIndex===9" @enableNext="enableNext"/>
     </keep-alive>
      <div v-if="subIndex===10">
       <el-row>
         <el-col :span="4">
          &emsp;
         </el-col>
          <el-col :span="16">
           <video src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E8%B0%83%F0%AC%8C%97.mp4" autoplay=true controls="controls" />
           <ul class="type">
             <li> 检测其前伸𬌗、侧方𬌗、正中𬌗有无早接触。</li>
           </ul>
         </el-col>
         <el-col :span="4">
           &#13;
         </el-col>
       </el-row>
     </div>

  <el-footer>
    <Footer :subIndex="subIndex" :maxSubIndex="10" :nextEnabled="nextEnabled" @goNextSubIndex="goNext"  @goPrevSubIndex="goPrev"/>
  </el-footer>
</el-container>
</template>

<script>
import DirectionCheck from './plant/DirectionCheck'
import Qiuzuan from './plant/Qiuzuan'
import Xianfeng from './plant/Xianfeng'
import Hole28 from './plant/Hole28'
import Hole36 from './plant/Hole36'
import Planting from './plant/Planting'
import TempWear from './plant/TempWear'
import Footer from './Footer'
export default {
  name: 'Plant',
  components: { Qiuzuan, Xianfeng, DirectionCheck, Hole28, Hole36, Planting, TempWear, Footer },
  data () {
    return {
      watched: [],
      nextEnabled: false,
      subIndex: 0,
      submitted: false,
      keys: [],
      titles: ['测试', '球钻定位', '先锋钻备洞', '检查方向', '逐级备洞1', '逐级备洞2', '植入种植体', '填充骨粉', '数字化取模', '戴临时修复体', '调𬌗'],
      questions: [
        {id: 0,
          q: '种植体到唇侧骨板的距离 ( )',
          a: ['A．＜1mm', 'B．1mm~2mm', 'C．2mm以上'
          ],
          k: 2
        },
        {
          id: 1,
          q: '关于即刻种植,下列说法有误的是 ( )',
          a: [
            'A．尽可能选用长植体            ',
            'B．间隙植入骨替代材料减少唇侧塌陷 ',
            'C．利于牙龈塑形,软组织美学', 'D．采取翻瓣术式，有利于提高修复满意度' ],
          k: 3
        },
        {
          id: 2,
          q: '即刻种植中,种植体植入时的临床状态是（ ）',
          a: ['A．拔牙位点没有骨和软组织愈合 ',
            'B．拔牙位点软组织愈合',
            'C．拔牙位点软组织愈合,骨未愈合',
            'D．拔牙位点骨愈合'
          ],
          k: 0
        },
        {
          id: 3,
          q: '种植体植入的外科手术操作,以下哪项错误（ ）',
          a: ['A．提拉式备洞方法             ',
            'B．先锋钻进行种植床制备转速800钻/分',
            'C．冷却生理盐水温度为4℃          ',
            'D．备洞的宽度大于种植体的宽度' ],
          k: 3
        }

      ]
    }
  },
  methods: {
    enableNext: function () {
      this.nextEnabled = true
    },
    submit: function () {
      this.$data.submitted = true
      this.nextEnabled = true
      let score = 0
      this.questions.forEach((question) => {
        if (question.k === this.keys[question.id]) score += 1.5
      })
      this.$store.commit('addScore', {partName: 'plantTest', score})
    },
    goNext () {
      if (this.watched.includes(this.subIndex + 1)) {
        this.nextEnabled = true
      } else {
        this.nextEnabled = false
      }
      this.subIndex++
      if ([7, 8, 10].includes(this.subIndex)) {
        setTimeout(() => {
          this.nextEnabled = true
        }, 2000)
      }
      this.watched.push(this.subIndex)
    },
    goPrev () {
      this.subIndex--
      this.nextEnabled = true
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
  img{
    margin-top: 100px;
    width: 300px;
  }
  video{
    width: 100%;
  }
  .question-body{
    padding-bottom: 10px;
  }

  .questions{
    margin-left: 5%;
  }
</style>
