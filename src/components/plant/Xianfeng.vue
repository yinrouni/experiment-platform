<template>
  <div>
    <el-row>
      <el-col :span="16">
        <video id="video" src="../../assets/先锋钻.mp4" />
        <br>
        <ul class="type">
          <li>1. 备洞时应注意反复上下提拉。</li>
          <li>2. 使用手机时注意在邻近硬组织上寻找稳定支点。</li>
          <li>3. 为了避免备洞过程中的产热过多损伤健康组织，通常将水流开到最大。</li>

        </ul>
      </el-col>
      <el-col :span="8">

<ToolsSelector @popRes="popRes" :desc="desc" :rotationSpeed="rotationSpeed" :flowSpeed="flowSpeed" :torque="torque" :numInputDisbled="true" :maxOptions="maxOptions"/>
      </el-col>
    </el-row>

    <el-dialog
  title="提示"
  :visible.sync="showDialog"
  width="30%">
  <div><i class="el-icon-circle-close" style="color:#F56C6C" />
  回答错误
  </div>
  <br>
  <div class="type" v-for="(tip, index) in tips" :key="index">{{tip}}</div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="showDialog = false">确 定</el-button>
  </span>
</el-dialog>

  </div>

</template>

<script>
import ToolsSelector from './ToolsSelector'
export default {
  name: 'Xianfeng',
  components: {ToolsSelector},
  computed: {
  },
  data () {
    return {
      maxOptions: {
        holeMakers: 1,
        plant: 0,
        fix: 0,
        handler: 1
      },
      rotationSpeed: {default: 1000, max: 1200, min: 20, step: 200},
      flowSpeed: {default: 5, max: 5, min: 0, step: 1},
      torque: {default: 25, max: 45, min: 15, step: 5},
      desc: '请选择合适的钻',
      activeName: '',
      keys: {rotationSpeed: {max: 1000, min: 800},
        flowSpeed: 5,
        torque: 25,
        holeMakers: [1],
        plant: [],
        fix: [],
        handler: [0]
      },
      activeIndex: '1',
      showDialog: false,
      tips: [],
      submitted: false
    }
  },
  watch: {
  },
  methods: {
    popRes: function (rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler) {
      this.tips = []
      if (this.isCorrect(rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler)) return this.playVideo()

      this.showDialog = true
    },
    playVideo: function () {
      const video = document.getElementById('video')
      video.play()
    },
    isCorrect: function (rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler) {
      // const rotationSpeedGood = this.rotationSpeed >= this.keys.rotationSpeed.min && this.rotationSpeed <= this.keys.rotationSpeed.max
      // if (!rotationSpeedGood) this.tips.push('转速：备洞过程中的转速通常在800-1000rpm。')
      let score = 0
      const holeMakersGood = holeMakers.length >= 1 && holeMakers.indexOf(this.keys.holeMakers[0]) > -1
      !holeMakersGood ? this.tips.push('先锋钻：通常首先选择先锋钻进行备洞。') : score += 4

      const handlerGood = handler.length >= 1 && handler.indexOf(this.keys.handler[0]) > -1
      if (!handlerGood) this.tips.push('手机：请选择手机。')

      // const flowSpeedGood = this.flowSpeed === this.keys.flowSpeed
      // if (!flowSpeedGood) this.tips.push('水流：为了避免备洞过程中的产热过多损伤健康组织，通常将水流开到最大。')
      // const torqueGood = this.torque === this.keys.torque
      // if (!torqueGood) this.tips.push('扭矩：备洞过程中的扭矩默认值即可，不需调动。     ')

      // return rotationSpeedGood && holeMakersGood && handlerGood && flowSpeedGood && torqueGood
      if (!this.submitted) {
        this.submitted = true
        this.$store.commit('addScore', {partName: 'plantExp', score})
      }
      return holeMakersGood && handlerGood
    }

  }
}
</script>

<style scoped>
  @import "../../assets/style.css";
  video{
    width: 100%;
  }
  .speed-card{
    font-size: small;
  }
  .desc{
    text-align: left;
    font: small;
  }
  img{
    width: 50px;
  }
  .vertical{
    width:30px;
  }
</style>
