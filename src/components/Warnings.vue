<template>
<el-container>
 <el-main>
  <el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles"  :title="title" :key="title"></el-step>
</el-steps>
<div v-show="subIndex === 0">
  <br>
  <div class="type">
    <el-row v-for="(tip, index) in warnings" :key="index" type="flex" align="middle">
      <el-col :span="3">
        <el-badge is-dot class="item" :hidden="tipsClickStatus[index]">
          <el-button type="text" @click="clickTip(index)" class="warning">
            <span class="text"> {{tip.title}} </span>
            </el-button>
        </el-badge>
      </el-col>
        <el-col :span="1">
        <el-divider direction="vertical"></el-divider>
      </el-col>
      <el-col :span="20">
        <div class="cover" v-if="!tipsClickStatus[index]">
        <el-skeleton-item v-for="(row, index) in tip.rows" variant="p" :style="'width:' + 100/index+'%'" :key="'r' + index" />
        <!-- <el-skeleton-item  variant="p" :style="'width:' + '50%'" /> -->
        </div>
        <div class="txt" v-else>
          {{tip.desc}}
          <div>
           </div>
        </div>
      </el-col>
    </el-row>
    <br>
    如果您还有任何疑问或不确定的地方，请打电话给医生。
  </div>
</div>

<div v-show="subIndex === 1">
  <el-row>
    <el-col :span="12" class="type">
      <div>
        <b>
        单选题
        </b>
      </div>
      <div v-for="(question, index) in questions.slice(0, 2)" :key="index">
<br>
    <div>
      <div>
        {{index +1}}. {{question.q}}
      </div>
      <div>
        <el-radio-group v-model="keys[question.id]" :disabled="submitted" >
          <div  v-for="(option, indexA) in question.a" :key="option" class="options">

        <el-radio :label="indexA"  class="form">
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
    </el-col>

    <el-col :span="12">
      <div class="type">
            <div>
        <b>
        多选题
        </b>
      </div>
      <br>
        <div>
      <div>
        {{questions[2].id + 1}}. {{questions[2].q}}
          <i  v-if="selectRes.length === 4 && submitted" class="el-icon-circle-check right" />
        <i  v-if="selectRes.length !== 4  && submitted"  class="el-icon-circle-close wrong" />
      </div>
      <div>
         <el-checkbox-group v-model="keys[2]" :disabled="submitted">
           <div class="options" v-for="(item, index) in questions[2].a" :key="index" >
        <el-checkbox  :label="index" class="form">
          <span>
            {{item}}
          </span>
        </el-checkbox>
           </div>
         </el-checkbox-group>
      </div>
    </div>
      </div>
      <img src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/warnings.png" />
    </el-col>
  </el-row>
  <br>
  <br>
    <el-button @click="submit" v-if="!submitted" type="primary">提交</el-button>
</div>
 </el-main>
 <el-footer>
   <Footer :subIndex="subIndex" :maxSubIndex="1" :nextEnabled="nextEnabled" @goNextSubIndex="goNext"  @goPrevSubIndex="goPrev" />

 </el-footer>
 </el-container>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Warnings',
  components: {Footer},
  watch: {
    tipsClickStatus: function (val) {
      if (val.every((i) => { return i })) {
        this.nextEnabled = true
      }
    }
  },
  data () {
    return {
      nextEnabled: false,
      subIndex: 0,
      tipsClickStatus: Array(7).fill(false),
      titles: ['术后医嘱', '测试'],
      keys: [null, null, []],
      submitted: false,
      selectRes: [],
      questions: [
        {
          id: 0,
          q: '种植义齿的术后初期维护下列哪种方法不能采用：',
          a: ['A. 漱口', 'B. 刷牙', 'C. 隙刷、纱条、牙线', 'D.超声洁牙'],
          k: 3
        },
        {
          id: 1,
          q: '以下哪个说法是正确的: ',
          a: ['A. 术后24h内唾液出现血丝必须要联系医生到医院就诊',
            'B. 术后2-3天出现的术区水肿或青紫，术后当天可使用热敷以缓解水肿',
            'C. 术后进食避免用术区咀嚼',
            'D. 术后3天内不用对术区进行清洁'],
          k: 2
        },
        {
          id: 2,
          q: '种植手术术后并发症常包括: ',
          a: ['A. 术后急性感染 ',
            'B. 种植体骨结合不良 ',
            'C. 术后出血及皮下瘀斑',
            'D. 创口裂开'],
          k: [0, 1, 2, 3]
        }

      ],
      warnings: [
        {title: '出血',
          desc: '术后24小时以内唾液中可能带有血丝。但如果有血凝块：请尽快联系手术医生或到医院就诊。通常情况下，可使用棉球压迫止血。',
          rows: 2
        },
        {title: '服药',
          desc: '按医嘱服用抗生素、止血药物。术后请勿饮酒、吸烟。',
          rows: 1},
        {title: '肿胀',
          desc: '术后2一3天会出现术区（甚至唇部和颊部）的水肿或者青紫，术后当天可使用冰袋冷敷以缓解水肿。冷敷时注意冷敷时间不宜过长，避免用术区咀嚼。',
          rows: 2},
        {title: '饮食',
          desc: '术后进软食，避免用术区咀嚼。',
          rows: 1},
        {title: '口腔卫生',
          desc: '除术区外，口腔其他区域常规清洁，从手术当天开始，每天用漱口液漱口2次。 ',
          rows: 1},
        {title: '活动义齿',
          desc: '务必在医生指导下使用修复义齿，通常情况下，义齿需要修改。',
          rows: 1},
        {title: '感染',
          desc: '如果出现疼痛加剧、术区脓性分泌物、肿胀复发或加剧以及非共他疾病引起的发烧等症状，请尽快联系手术医生。',
          rows: 2}

      ]
    }
  },
  methods: {
    clickTip (index) {
      this.$set(this.tipsClickStatus, index, true)
    },
    goNext () {
      this.nextEnabled = false
      this.subIndex++
    },
    goPrev () {
      this.nextEnabled = true
      this.subIndex--
    },
    submit: function () {
      this.submitted = true
      this.nextEnabled = true
      let score = 0
      const that = this

      // 单选
      this.questions.slice(0, 2).map((question) => {
        if (question.k === that.keys[question.id]) {
          score += 1.5
        }
      })
      // 多选题
      this.selectRes = this.keys[2]
      this.selectRes.length === this.questions[2].k.length ? score += 3 : score += 0
      this.keys[2] = this.questions[2].k

      this.$store.commit('addScore', {partName: 'warnings', score})
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
  img {
    width: 300px;
  }
  .type{
    padding: 0 100px;
  }
  /* .txt{
    margin-bottom: 1.5%;
  } */
</style>
