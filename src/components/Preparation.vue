<template>
<el-container>
  <div class="type">
<h3>
  术前准备
</h3>
  </div>
<el-row>
  <el-col :span="12">
    <div class="type singles">
    <span>
      <b>
      单选题
      </b>
    </span>
<br>
<div v-for="(question, index) in questions" :key="index">
<br>
    <div>
      <div class="questionBody">
        {{index +1}}.{{question.q}}
      </div>
      <div style="text-align: start; display:block;">
        <el-radio-group v-model="keys[question.id]" :disabled="submitted" class='radioDiv'>
<div v-for="(option, indexA) in question.a"  :key="option" class="options">
        <el-radio :label="indexA" class="form">
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

  <el-col :span="12">
    <div class="type">
    <span >
      <b>
      多选题
      </b>
      </span>
      <br>
    <br>
     <div>
      <div class="questionBody">
        4.请选择本方案所需全部器械：
          <i  v-if="selectToolsRes && submitted" class="el-icon-circle-check right" />
        <i  v-if="!selectToolsRes && submitted"  class="el-icon-circle-close wrong" />
      </div>
      <div>
         <el-checkbox-group v-model="four" :disabled="submitted">
           <div class="options">
        <el-checkbox  v-for="(item, index) in tools.split(' ')" :label="item" :key="index" class="form">
          <span>
            {{item}}
          </span>
        </el-checkbox>
           </div>
         </el-checkbox-group>
         <br>
         <div>
           <img src="https://imgs-videos.oss-cn-beijing.aliyuncs.com/tools.JPG" />
         </div>
      </div>
    </div>
    </div>

  </el-col>

</el-row>


<div>
<el-button @click="submit" v-if="!submitted" type="primary">提交</el-button>
</div>


<el-footer>
  <Footer :nextEnabled="submitted"/>
</el-footer>

</el-container>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Preparation',
  components: {Footer},
  data () {
    return {
      selectToolsRes: false,
      oneChoice: [],
      tools: '一次性器械盒 金属注射器 牙龈分离器 牙钳 微创拔牙手术盒 种植体 种植工具盒 扫描杆 临时修复基台',
      keys: {
        one: undefined,
        two: undefined,
        three: undefined
      },
      four: [],
      submitted: false,
      questions: [
        {
          id: 'one',
          q: '术前（ ）周进行牙周洁治',
          a: ['A.1-2天', 'B.6-7天', 'C.6-7周', 'D.2-3周'],
          k: 3
        },
        {
          id: 'two',
          q: '对该患者患牙21，最适麻醉方式应选择 ( )',
          a: ['A．浸润麻醉', 'B．表面麻醉', 'C．阻滞麻醉', 'D．冷冻麻醉'],
          k: 0
        },
        {
          id: 'three',
          q: '麻醉药物最佳选择为 ( )',
          a: ['A．碧蓝麻', 'B．甲哌卡因', 'C．丁卡因', 'D．普鲁卡因'],
          k: 0
        }

      ]
    }
  },
  methods: {
    submit: function () {
      this.$data.submitted = true
      let score = 0

      // 单选
      this.questions.forEach((question) => {
        if (question.k === this.keys[question.id]) {
          score += 1.5
        }
      })

      if (this.$data.four.length < this.$data.tools.split(' ').length) {
        this.$data.four = this.$data.tools.split(' ')
        this.$data.selectToolsRes = false
      } else {
        // 多选
        this.$data.selectToolsRes = true
        score += 3
      }

      this.$store.commit('addScore', {partName: 'preparation', score})
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  img{
    width: 500px;
  }

   .radioDiv {
   margin: 0;
   width: auto;
   text-align: left;
   display: table;
}

.singles{
  margin-left: 10%;
}

.questionBody{
  margin-bottom: 4px;
}

</style>
