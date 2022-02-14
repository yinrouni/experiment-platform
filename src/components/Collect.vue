<template>
  <div>
    <el-container>
      <el-main>
<el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles" :title="title" :key="title"></el-step>
</el-steps>
<br>
<keep-alive>
    <Chat v-if="subIndex === 0" @enableNext="enableNext"/>
</keep-alive>
    <div v-if="subIndex === 1">
      <div class="left">
      <i class='el-icon-arrow-right' />请选择该患者需要做的检查项目（多选)：
          <i  v-if="normalCheckRes && submittedNormal" class="el-icon-circle-check right" />
        <i  v-if="!normalCheckRes && submittedNormal" class="el-icon-circle-close wrong" />
      </div>
      <br>
      <div class="left options">
      <el-row>
        <div>
      <el-checkbox v-model="checked" label="1" :disabled="submittedNormal">
        口腔检查
      </el-checkbox>
      <div  class="tips" v-if="checked.indexOf('1') > -1">
        21牙冠变色，无龋坏，松动Ⅱ°，叩痛（+），周围牙龈红肿，唇系带附着尚可。口腔内无明显炎症，无牙齿龋坏，无自发痛病史。
      </div>
        </div>
      </el-row>
      <el-row>
  <el-checkbox v-model="checked" label="2" :disabled="submittedNormal">颌面部检查</el-checkbox>
  <div  class="tips" v-if="checked.indexOf('2') > -1">
        颌面部基本对称，皮肤无红肿破溃。
      </div>

      </el-row>

<el-row>
    <el-checkbox v-model="checked" label="3" :disabled="submittedNormal">颞下颌检查</el-checkbox>
      <div  class="tips" v-if="checked.indexOf('3') > -1">
       无弹响，无压痛。开口度36mm，开口型“↓”。
      </div>
</el-row>
      </div>
      <br>
      <br>

      <el-button @click="submitNormal" v-if="!submittedNormal"> 提交</el-button>
    </div>
    <keep-alive>
    <History v-if="subIndex === 2" @enableNext="fillForm"/>
    </keep-alive>
    <div v-if="subIndex === 3">
      <div class="left">
      <i class='el-icon-arrow-right' />为进一步了解进一步了解术区可用骨高度和宽度、唇侧骨板有无缺损及骨质情况等最好选用(单选):
      <i  v-if="radio === '5' && submittedFilm" class="el-icon-circle-check right" />
        <i  v-if="radio !== '5' && submittedFilm" class="el-icon-circle-close wrong" />
      </div>
      <br>
      <div class="left" v-if="!submittedFilm">
      <el-row>
        <el-radio v-model="radio" label="1">根尖片</el-radio>
      </el-row>
      <el-row>
          <el-radio v-model="radio" label="2">全口曲面断层片</el-radio>
      </el-row>
      <el-row>
           <el-radio v-model="radio" label="3">颞下颌关节侧位片</el-radio>
      </el-row>
      <el-row>
           <el-radio v-model="radio" label="4">唾液腺造影</el-radio>
      </el-row>
      <el-row>
             <el-radio v-model="radio" label="5">CBCT检查</el-radio>
      </el-row>

      </div>
            <div class="tips" v-if="submittedFilm">
              CBCT示21牙根中三分之一处见一根折线，根尖区无低密度阴影，唇侧骨板完整无缺损，厚度约1.2mm
              <img src="./../assets/CBCT.jpg">
            </div>
    <br>
<br>
<el-button @click="submitFilm" v-if="!submittedFilm">提交</el-button>

    </div>

      <el-dialog
  title="诊断"
  :visible.sync="dialogVisible"
  width="30%">
  <span>21牙折（根中1/3）</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</el-main>

    <el-footer>
<Footer :subIndex="subIndex" :maxSubIndex="3" :nextEnabled="nextEnabled" @goNextSubIndex="goNext"  @goPrevSubIndex="goPrev"/>
    </el-footer>
    </el-container>
  </div>

</template>

<script>
import Chat from './collect/Chat'
import History from './collect/History'
import Footer from './Footer'
export default {
  name: 'Collect',
  components: {Chat, History, Footer},
  computed: {
    index () {
      return this.subIndex
    }
  },

  data () {
    return {
      nextEnabled: false,
      subIndex: 0,
      submittedFilm: false,
      normalCheckRes: false,
      submittedNormal: false,
      filmRes: undefined,
      radio: null,
      checked: [],
      titles: ['问诊检查', '一般检查', '既往病史', '影像学检查'],
      dialogVisible: false,
      filledForm: false
    }
  },
  watch: {
    submittedNormal: function () {
      this.nextEnabled = true
    },
    submittedFilm: function () {
      this.nextEnabled = true
    },
    normalCheckRes: function () {
      this.$store.commit('addScore', {partName: 'historyCollect', score: 3})
    },
    filmRes: function (val) {
      if (val === '5') {
        this.$store.commit('addScore', {partName: 'historyCollect', score: 1.5})
      }
    }
  },
  methods: {
    enableNext: function () {
      this.nextEnabled = true
    },
    goPrev: function () {
      this.subIndex--
      this.nextEnabled = true
    },
    goNext: function () {
      if (this.subIndex === 3) {
        this.dialogVisible = true
      } else {
        if (this.subIndex + 1 === 1 && !this.submittedNormal) {
          this.nextEnabled = false
        }
        if (this.subIndex + 1 === 2 && !this.filledForm) {
          this.nextEnabled = false
        }
        if (this.subIndex + 1 === 3 && !this.submittedFilm) {
          this.nextEnabled = false
        }
        return this.subIndex++
      } ;
    },
    enter: function () {
      this.$router.push('/test')
    },
    submitNormal () {
      this.$data.submittedNormal = true

      if (this.$data.checked.length < 3) {
        this.$data.normalCheckRes = false
        this.$data.checked = ['1', '2', '3']
        return
      }
      this.$data.normalCheckRes = true
    },
    submitFilm () {
      this.$data.submittedFilm = true
      this.filmRes = this.radio
    },
    fillForm () {
      this.filledForm = true
      this.nextEnabled = true
    }

  }
}
</script>

<style scoped>
  @import "../assets/style.css";
  span{
    word-break:break-all;
  }
  .options{
    font-size: xx-large;
  }
  .tips{
    font-size: large;
    color: cornflowerblue;

  }
  .tab{
    margin-left: 25px;
  }

  img{
    width: 500px;
  }

</style>
