<template>
  <div>
    <el-row>
      <el-col :span="16">
        <video id="video" src="../../assets/球钻定位.mp4" />
        <br>
        <ul class="type">
          <li>定位点：腭侧骨壁距离根尖1/3处定点</li>
          <li>使用手机时，注意在邻近硬组织上寻找稳定支点。</li>

        </ul>
      </el-col>
      <el-col :span="8">

<ToolsSelector @popRes="popRes" :desc="desc" :rotationSpeed="rotationSpeed" :flowSpeed="flowSpeed" :torque="torque" :maxOptions="maxOptions"/>
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
<el-dialog
  title="提示"
  :visible.sync="showCorrectDialog"
  width="30%">
  <div><i class="el-icon-circle-check" style="color:#67C23A" />
  回答正确
  </div>
  <br>
  <div> 请观看视频</div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="showCorrectDialog = false">确 定</el-button>
  </span>
</el-dialog>

  </div>

</template>

<script>
import ToolsSelector from './ToolsSelector'
export default {
  name: 'Qiuzuan',
  components: {ToolsSelector},
  computed: {
  },
  data () {
    return {
      showCorrectDialog: false, 
      maxOptions: {
        holeMakers: 1,
        plant: 0,
        fix: 0,
        handler: 1
      },
      rotationSpeed: {default: 600, max: 1200, min: 20, step: 200},
      flowSpeed: {default: 0, max: 5, min: 0, step: 1},
      torque: {default: 25, max: 45, min: 15, step: 5},
      desc: '请选择合适的定位钻，调试种植机的转速、水流',
      activeName: '',
      keys: {rotationSpeed: {max: 1000, min: 800},
        flowSpeed: 5,
        torque: 25,
        holeMakers: [0],
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
      let score = 0
      const rotationSpeedGood = rotationSpeed >= this.keys.rotationSpeed.min && rotationSpeed <= this.keys.rotationSpeed.max
      !rotationSpeedGood ? this.tips.push('转速：备洞过程中中的转速通常在800-1000rpm。') : score += 4

      const holeMakersGood = holeMakers.length >= 1 && holeMakers.indexOf(this.keys.holeMakers[0]) > -1
      !holeMakersGood ? this.tips.push('球钻：一般选择球钻或者精准钻进行种植位点的定位。') : score += 4

      const handlerGood = handler.length >= 1 && handler.indexOf(this.keys.handler[0]) > -1
      if (!handlerGood) this.tips.push('手机：请选择手机。')

      const flowSpeedGood = flowSpeed === this.keys.flowSpeed
      !flowSpeedGood ? this.tips.push('水流：为了避免备洞过程中的产热过多损伤健康组织，通常将水流开到最大。') : score += 4
      const torqueGood = torque === this.keys.torque
      !torqueGood ? this.tips.push('扭矩：备洞过程中的扭矩默认值即可，不需调动。     ') : score += 4

      if (!this.submitted) {
        this.submitted = true
        this.$store.commit('addScore', {partName: 'plantExp', score})
      }
      this.showCorrectDialog = rotationSpeedGood && holeMakersGood && handlerGood && flowSpeedGood && torqueGood
      return rotationSpeedGood && holeMakersGood && handlerGood && flowSpeedGood && torqueGood
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
