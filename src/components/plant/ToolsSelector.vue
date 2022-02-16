<template>
<el-card class="box-card">
  <div class="desc text">
    <b>
   {{this.$props.desc}}
    </b>
  </div>

<el-card>
  <div class="speed-card">
  <el-row>

  <span class="text"> 转速：</span>
  <el-input-number v-model="rotationSpeedData" :step="rotationSpeed.step" :min="rotationSpeed.min" :max="rotationSpeed.max" size="small" :disabled="numInputDisbled" ></el-input-number>
   <span class="text"> rpm&nbsp; </span>
  </el-row>
  <el-row>
    <span class="text">
    水流：</span>
  <el-input-number v-model="flowSpeedData" :step="flowSpeed.step" :min="flowSpeed.min" :max="flowSpeed.max"  size="small" :disabled="numInputDisbled" ></el-input-number>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </el-row>
  <el-row>
    <span class="text">
     扭矩：
    </span>
  <el-input-number v-model="torqueData" :step="torque.step" :min="torque.min" :max="torque.max" size="small" :disabled="numInputDisbled" ></el-input-number>
  <span class="text">
  Ncm
  </span>
  </el-row>
  </div>
</el-card>

<el-collapse v-model="activeName" accordion>
  <el-collapse-item name="1">
    <div class="text" slot="title">备洞</div>
    <el-checkbox-group v-model="holeMakers" :max="maxOptions.holeMakers" :disabled="maxOptions.holeMakers===0">
        <el-checkbox :label="0" class="toolSelector">
        球钻
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E7%90%83%E9%92%BB.png' />
      </el-checkbox>
      <el-checkbox :label="1" class="toolSelector">
        先锋钻
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E5%85%88%E9%94%8B%E9%92%BB.PNG' />
      </el-checkbox>
        <el-checkbox :label="2" class="toolSelector" >
        Φ2.8扩孔钻
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/28%E6%89%A9%E5%AD%94%E9%92%BB.PNG' />
      </el-checkbox>
         <el-checkbox :label="3" class="toolSelector">
        Φ3.6扩孔钻
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/36%E6%89%A9%E5%AD%94%E9%92%BB.PNG' />
      </el-checkbox>
       <el-checkbox :label="4" class="toolSelector">
        方向指示器
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E6%96%B9%E5%90%91%E6%8C%87%E7%A4%BA%E5%99%A8.PNG' />
      </el-checkbox>
    </el-checkbox-group>
  </el-collapse-item>
  <el-collapse-item name="2">
        <div class="text" slot="title">植入</div>
    <el-checkbox-group v-model="plant" :max="maxOptions.plant" :disabled="maxOptions.plant===0">
        <el-checkbox :label="0" class="toolSelector">
        种植体
        <img class="vertical" src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E7%A7%8D%E6%A4%8D%E4%BD%93.png' />
      </el-checkbox>
      <el-checkbox :label="1" class="toolSelector">
        覆盖螺丝
        <img class="vertical"  style="width:15px;" src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E8%A6%86%E7%9B%96%E8%9E%BA%E4%B8%9D.png' />
      </el-checkbox>
        <el-checkbox :label="2" class="toolSelector">
        种植夹持器
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E7%A7%8D%E6%A4%8D%E5%A4%B9%E6%8C%81%E5%99%A8.png' />
      </el-checkbox>
    </el-checkbox-group>

  </el-collapse-item>
  <el-collapse-item name="3">
  <div class="text" slot="title">修复</div>
   <el-checkbox-group v-model="fix" :max="maxOptions.fix" :disabled="maxOptions.fix===0">
        <el-checkbox :label="0" class="toolSelector">
        临时修复基台（含中央螺丝）
        <img class="vertical" src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E4%B8%B4%E6%97%B6%E4%BF%AE%E5%A4%8D%E5%9F%BA%E5%8F%B0.png' />
      </el-checkbox>
      <el-checkbox :label="1" class="toolSelector">
        临时修复体
        <img class="vertical" src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E4%B8%B4%E6%97%B6%E4%BF%AE%E5%A4%8D%E4%BD%93.png' />
      </el-checkbox>
        <el-checkbox :label="2" class="toolSelector">
         扫描杆
        <img class="vertical" src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E6%89%AB%E6%8F%8F%E6%9D%86.png' />
      </el-checkbox>
   </el-checkbox-group>

  </el-collapse-item>
  <el-collapse-item name="4">
      <div class="text" slot="title">手持器械</div>
        <el-checkbox-group v-model="handler" :max="maxOptions.handler" :disabled="maxOptions.handler===0"  >
        <el-checkbox :label="0" class="toolSelector">
        手机
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E6%89%8B%E6%9C%BA.png' />
      </el-checkbox>
      <el-checkbox :label="1" class="toolSelector">
        扭力扳手
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E6%89%AD%E5%8A%9B%E6%89%B3%E6%89%8B.png' />
      </el-checkbox>
        <el-checkbox :label="2" class="toolSelector">
        螺丝刀
        <img src='https://imgs-videos.oss-cn-beijing.aliyuncs.com/%E8%9E%BA%E4%B8%9D%E5%88%80.jpeg' />
      </el-checkbox>
    </el-checkbox-group>
  </el-collapse-item>
</el-collapse>
<br>
 <el-button @click="submit" type="primary">提交</el-button>
</el-card>

</template>

<script>
export default {
  name: 'ToolsSelector',
  props: {desc: String, rotationSpeed: Object, flowSpeed: Object, torque: Object, numInputDisbled: {type: Boolean, default: false}, maxOptions: Object},
  data () {
    return {
      rotationSpeedData: this.rotationSpeed.default,
      flowSpeedData: this.flowSpeed.default,
      torqueData: this.torque.default,
      activeName: '',
      holeMakers: [],
      plant: [],
      fix: [],
      handler: []
    }
  },
  methods: {
    submit: function () {
      this.$store.commit('changePlantMachine', {rotationSpeed: this.rotationSpeedData,
        flowSpeed: this.flowSpeedData,
        torque: this.torqueData})
      this.$emit('popRes', this.rotationSpeedData, this.flowSpeedData, this.torqueData, this.holeMakers, this.plant, this.fix, this.handler)
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
    padding-left: 5%;

  }
  .el-card__body{
    padding: 5px;
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
