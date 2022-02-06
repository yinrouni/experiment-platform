<template>
  <div>
<el-steps :active="subIndex" finish-status="success" align-center>
  <el-step v-for="title in titles" :title="title" :key="title"></el-step>
</el-steps>
<br>
    <Chat v-if="subIndex === 0"/>
    <div v-if="subIndex === 1">
      <div class="left">
      <i class='el-icon-arrow-right' />请选择该患者需要做的检查项目（多选)：
      </div>
      <br>
      <div class="left options">
      <el-row>
        <div>
      <el-checkbox v-model="checked" label="1">
        口腔检查
      </el-checkbox>
      <div  class="tips" v-if="checked.indexOf('1') > -1">
        21牙冠变色，无龋坏，松动（Ⅱ°，叩痛（+），周围牙龈红肿，唇系带附着尚可。口腔内无明显炎症，无牙齿龋坏，无自发痛病史。
      </div>
        </div>
      </el-row>
      <el-row>
  <el-checkbox v-model="checked" label="2">颌面部检查</el-checkbox>
  <div  class="tips" v-if="checked.indexOf('2') > -1">
        颌面部基本对称，皮肤无红肿破溃。
      </div>

      </el-row>

<el-row>
    <el-checkbox v-model="checked" label="3">颞下颌检查</el-checkbox>
      <div  class="tips" v-if="checked.indexOf('3') > -1">
       无弹响，无压痛。开口度36mm，开口型“↓”。
      </div>
</el-row>
      </div>
    </div>
    <History v-if="subIndex === 2"/>
    <div v-if="subIndex === 3">
      <div class="left">
      <i class='el-icon-arrow-right' />为进一步了解进一步了解术区可用骨高度和宽度、唇侧骨板有无缺损及骨质情况等最好选用(单选):
      </div>
      <br>
      <div class="left" v-if="radio !=='6'">
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
           <el-radio v-model="radio" label="4">颞下颌关节侧位片</el-radio>
      </el-row>
      <el-row>
           <el-radio v-model="radio" label="5">唾液腺造影</el-radio>
      </el-row>
      <el-row>
             <el-radio v-model="radio" label="6">CBCT检查</el-radio>
      </el-row>
      </div>
            <div class="tips" v-if="radio === '6'">
              CBCT示21牙根中三分之一处见一根折线，根尖区无低密度阴影，唇侧骨板完整无缺损，厚度约1.2mm
              <img src="./../assets/CBCT.jpg">
            </div>

    </div>

      <el-dialog
  title="诊断"
  :visible.sync="dialogVisible"
  width="30%">
  <span>21牙折（根中1/3）</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="close">确 定</el-button>
  </span>
</el-dialog>

  </div>

</template>

<script>
import Chat from './Chat'
import History from './History'
export default {
  name: 'Collect',
  components: {Chat, History},
  props: {subIndex: Number},
  computed: {
    dialogVisible: function () {
      return this.$props.subIndex === 4
    }
  },

  data () {
    return {
      radio: null,
      checked: [],
      titles: ['问诊检查', '一般检查', '既往病史', '影像学检查']
    }
  },
  methods: {
    enter: function () {
      console.log('to test')
      this.$router.push('/test')
    },
    close: function () {
      this.$emit('next')
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
