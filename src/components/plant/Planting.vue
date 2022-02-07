<template>
  <div>
    <el-row>
      <el-col :span="16">
        <video id="video" src="../../assets/种植体植入.mp4" />
        <br>
      </el-col>
      <el-col :span="8">

<ToolsSelector @popRes="popRes" :desc="desc" :rotationSpeed="rotationSpeed" :flowSpeed="flowSpeed" :torque="torque"/>
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
  name: 'Planting',
  components: {ToolsSelector},
  computed: {
  },
  data () {
    return {
      rotationSpeed: {default: 0, max: 30, min: 0, step: 10},
      flowSpeed: {default: 0, max: 5, min: 0, step: 1},
      torque: {default: 15, max: 45, min: 15, step: 5},
      desc:'请使用种植体夹持器取出种植体，并调试种植机的转速、水流、扭矩',
      activeName: '',
      keys: {rotationSpeed: 20,
        flowSpeed: 0,
        torque: {min: 35, max: 45},
        holeMakers: [],
        plant: [0, 2],
        fix: [],
        handler: [1],
      },
      activeIndex: '1', 
      showDialog:false,
      tips:[]
    }
  },
  watch: {
  },
  methods: {
    popRes: function (rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler) {
      this.tips = [];
      if (this.isCorrect(rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler)) return this.playVideo()

      this.showDialog = true
    },
    playVideo: function () {
      const video = document.getElementById('video')
      video.play()
    },
    isCorrect: function (rotationSpeed, flowSpeed, torque, holeMakers, plant, fix, handler) {
      const rotationSpeedGood = rotationSpeed === this.keys.rotationSpeed
      // const rotationSpeedGood = rotationSpeed >= this.keys.rotationSpeed.min && rotationSpeed <= this.keys.rotationSpeed.max
      if (!rotationSpeedGood) this.tips.push('转速：种植体植入时，通常转速调至15-25rpm')

      const plantGood = plant.length >= 2 && this.keys.plant.every(i =>{return plant.includes(i)})
      console.log(this.keys.plant, plant, this.keys.plant.every(i =>{return plant.includes(i)}))
      // if (!holeMakersGood) this.tips.push('球钻：一般选择球钻或者精准钻进行种植位点的定位。')

      const handlerGood = handler.length >= 1 && handler.indexOf(this.keys.handler[0]) > -1
      if(!handlerGood) this.tips.push('扭力扳手：需要使用扭力扳手安装种植体。')
      
      const flowSpeedGood = flowSpeed === this.keys.flowSpeed
      if (!flowSpeedGood) this.tips.push('水流：水流关闭，种植时不需要出水')
      const torqueGood = torque >= this.keys.torque.min && torque <= this.keys.torque.max
      if (!torqueGood) this.tips.push('扭矩：植入种植体时一般扭矩在35~45Ncm')

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
