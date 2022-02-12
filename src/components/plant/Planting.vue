<template>
  <div>
    <el-row>
      <el-col :span="16">
        <video id="video" src="../../assets/种植体植入.mp4" controls="controls" />
        <br>
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
  name: 'Planting',
  components: {ToolsSelector},
  computed: {
  },
  data () {
    return {
      timeoutID: undefined, 
      showCorrectDialog: false,
      maxOptions: {
        holeMakers: 0,
        plant: 2,
        fix: 0,
        handler: 2
      },
      rotationSpeed: {default: 0, max: 30, min: 0, step: 10},
      flowSpeed: {default: 0, max: 5, min: 0, step: 1},
      torque: {default: 15, max: 45, min: 15, step: 5},
      desc: '请使用种植体夹持器取出种植体，并调试种植机的转速、水流、扭矩',
      activeName: '',
      keys: {rotationSpeed: 20,
        flowSpeed: 0,
        torque: {min: 35, max: 45},
        holeMakers: [],
        plant: [0, 2],
        fix: [],
        handler: [0, 1]
      },
      activeIndex: '1',
      showDialog: false,
      tips: [],
      submitted: false
    }
  },
  watch: {
  },
  deactivated() {
    clearTimeout(this.timeoutID)
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
      this.timeoutID = setTimeout(()=>{
        this.$emit('enableNext')
      }, 2000)
    },
    isCorrect: function (rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler) {
      let score = 0
      const rotationSpeedGood = rotationSpeed === this.keys.rotationSpeed
      // const rotationSpeedGood = rotationSpeed >= this.keys.rotationSpeed.min && rotationSpeed <= this.keys.rotationSpeed.max
      !rotationSpeedGood ? this.tips.push('转速：种植体植入时，通常转速调至15-25rpm') : score += 4

      const plantGood = plant.length >= 2 && this.keys.plant.every(i => {
        return plant.includes(i)
      })
      plant.includes(2) ? score += 4 : this.tips.push('种植体夹持器：植入过程中，种植体需要由种植体夹持器夹持')
      plant.includes(0) ? score += 4 : this.tips.push('种植体：植入过程中，需要种植体')
      // if (!holeMakersGood) this.tips.push('球钻：一般选择球钻或者精准钻进行种植位点的定位。')

      const handlerGood = handler.length >= 2 && handler.indexOf(this.keys.handler[0]) > -1 
      && handler.indexOf(this.keys.handler[1]) > -1 
      !handler.includes(1) ? this.tips.push('扭力扳手：需要使用扭力扳手安装种植体。') : score += 4
      
      if (!handler.includes(0)) this.tips.push('其他：需要选择手机')
      const flowSpeedGood = flowSpeed === this.keys.flowSpeed
      !flowSpeedGood ? this.tips.push('水流：水流关闭，种植时不需要出水') : score += 4
      const torqueGood = torque >= this.keys.torque.min && torque <= this.keys.torque.max
      !torqueGood ? this.tips.push('扭矩：植入种植体时一般扭矩在35~45Ncm') : score += 4

      if (!this.submitted) {
        this.submitted = true
        this.$store.commit('addScore', {partName: 'plantExp', score})
      }
      this.showCorrectDialog = rotationSpeedGood && plantGood && handlerGood && flowSpeedGood && torqueGood

      return rotationSpeedGood && plantGood && handlerGood && flowSpeedGood && torqueGood
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
