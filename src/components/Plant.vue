<template>
  <div>
     <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles"  :title="title" :key="title"></el-step>
</el-steps>

  <div class="questions" v-if="subIndex===0">
    <br>
    <br>
    <el-row>
      <el-col :span="12">
           <div class="type">
    <span>
      单选题
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

        <el-radio  v-for="(option, indexA) in question.a" :label="indexA" :key="option">
          <span>{{option}}
            <i v-if="indexA === question.k && submitted"
            class="el-icon-circle-check right" />
            <i  v-if="indexA !== question.k && indexA === keys[question.id] && submitted" class="el-icon-circle-close wrong" />

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
<br>
  <el-button @click="submit" v-if="!submitted">提交</el-button>
  </div>

  <Qiuzuan  v-if="subIndex===1"/>
    <Xianfeng  v-if="subIndex===2"/>
    <DirectionCheck v-if="subIndex===3"/>
    <Hole28 v-if="subIndex===4"/>
     <Hole36 v-if="subIndex===5"/>
     <Planting v-if="subIndex===6"/>

</div>
</template>

<script>
import DirectionCheck from './plant/DirectionCheck'
import Qiuzuan from './plant/Qiuzuan'
import Xianfeng from './plant/Xianfeng'
import Hole28 from './plant/Hole28'
import Hole36 from './plant/Hole36'
import Planting from './plant/Planting'
export default {
  name: 'Plant',
  components: {Qiuzuan, Xianfeng, DirectionCheck, Hole28, Hole36, Planting },
  props: {subIndex: Number},
  data () {
    return {
      submitted: false,
      keys: [],
      titles: ['测试', '球钻定位', '先锋钻洞预备', '检查方向', 'Φ2.8孔钻扩孔', 'Φ3.6孔钻扩孔', '植入种植体', '填充骨粉', '数字化取模型', '戴临时修复体', '调𬌗'],
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
          a: ['A．美学区即刻种植充分利用原有牙根根尖及根周壁骨量以获得好的初期稳定',
            'B．尽可能选用长植体',
            'C．间隙植入骨替代材料减少唇侧塌陷 ',
            'D．采取翻瓣术式', 'E．利于牙龈塑形,软组织美学'],
          k: 3
        },
        {
          id: 2,
          q: '即刻种植中,种植体植入时的临床状态是（ )',
          a: ['A．拔牙位点没有骨和软组织愈合',
            'B．拔牙位点软组织愈合',
            'C．拔牙位点骨愈合',
            'D．拔牙位点软组织愈合,骨未愈合',
            'E．拔牙位点完全愈合'],
          k: 0
        },
        {
          id: 3,
          q: '种植体植入的外科手术操作,以下哪项错误（ )',
          a: ['A．提拉式备洞方法',
            'B．先锋钻进行种植床制备转速800钻/分',
            'C．冷却生理盐水温度为4℃',
            'D．备洞的宽度大于种植体的宽度' ],
          k: 3
        }

      ]
    }
  },
  methods: {
    submit: function () {
      this.$data.submitted = true
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
</style>
