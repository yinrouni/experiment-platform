<template>
<el-card class="box-card">
  <div class="desc">
    <b>
   {{this.$props.desc}}
    </b>
  </div>

<el-card>
  <div class="speed-card">
  <el-row>

  转速：
  <el-input-number v-model="rotationSpeedData" :step="rotationSpeed.step" :min="rotationSpeed.min" :max="rotationSpeed.max" size="small" :disabled="numInputDisbled" ></el-input-number>
   rpm&nbsp;
  </el-row>
  <el-row>
    水流：
  <el-input-number v-model="flowSpeedData" :step="flowSpeed.step" :min="flowSpeed.min" :max="flowSpeed.max"  size="small" :disabled="numInputDisbled" ></el-input-number>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </el-row>
  <el-row>
     扭矩：
  <el-input-number v-model="torqueData" :step="torque.step" :min="torque.min" :max="torque.max" size="small" :disabled="numInputDisbled" ></el-input-number>
  Ncm
  </el-row>
  </div>
</el-card>

<el-collapse v-model="activeName" accordion>
  <el-collapse-item title="备洞" name="1">
    <el-checkbox-group v-model="holeMakers" :max="maxOptions.holeMakers" :disabled="maxOptions.holeMakers===0">
        <el-checkbox :label="0">
        球钻
        <img src='../../assets/球钻.png' />
      </el-checkbox>
      <el-checkbox :label="1">
        先锋钻
        <img src='../../assets/先锋钻.png' />
      </el-checkbox>
        <el-checkbox :label="2">
        Φ2.8扩孔钻
        <img src='../../assets/28扩孔钻.png' />
      </el-checkbox>
         <el-checkbox :label="3">
        Φ3.6扩孔钻
        <img src='../../assets/36扩孔钻.png' />
      </el-checkbox>
       <el-checkbox :label="4">
        方向指示器
        <img src='../../assets/方向指示器.png' />
      </el-checkbox>
    </el-checkbox-group>
  </el-collapse-item>
  <el-collapse-item title="植入" name="2">
    <el-checkbox-group v-model="plant" :max="maxOptions.plant" :disabled="maxOptions.plant===0">
        <el-checkbox :label="0">
        种植体
        <img class="vertical" src='../../assets/种植体.png' />
      </el-checkbox>
      <el-checkbox :label="1">
        覆盖螺丝
        <img class="vertical"  style="width:15px;" src='../../assets/覆盖螺丝.png' />
      </el-checkbox>
        <el-checkbox :label="2">
        种植夹持器
        <img src='../../assets/种植夹持器.png' />
      </el-checkbox>
    </el-checkbox-group>

  </el-collapse-item>
  <el-collapse-item title="修复" name="3">
   <el-checkbox-group v-model="fix" :max="maxOptions.fix" :disabled="maxOptions.fix===0">
        <el-checkbox :label="0">
        临时修复基台（含中央螺丝）
        <img class="vertical" src='../../assets/临时修复基台.png' />
      </el-checkbox>
      <el-checkbox :label="1">
        临时修复体
        <img class="vertical" src='../../assets/临时修复体.png' />
      </el-checkbox>
        <el-checkbox :label="2">
         扫描杆
        <img class="vertical" src='../../assets/扫描杆.png' />
      </el-checkbox>
   </el-checkbox-group>

  </el-collapse-item>
  <el-collapse-item title="手持器械" name="4">
  </el-checkbox-group>
        <el-checkbox-group v-model="handler" :max="maxOptions.handler" :disabled="maxOptions.handler===0"  >
        <el-checkbox :label="0">
        手机
        <img src='../../assets/手机.png' />
      </el-checkbox>
      <el-checkbox :label="1">
        扭力扳手
        <img src='../../assets/扭力扳手.png' />
      </el-checkbox>
        <el-checkbox :label="2">
        螺丝刀
        <img src='../../assets/螺丝刀.jpeg' />
      </el-checkbox>
    </el-checkbox-group>
  </el-collapse-item>
</el-collapse>
<br>
 <el-button @click="submit">提交</el-button>
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

      // this.$emit("popRes", {rotationSpeed:this.rotationSpeed, flowSpeed: this.flowSpeed, torque: this.torque, holeMakers:this.holeMakers,plant: this.plant,
      // fix: this.fix, hanlder: this.handler
      // });
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
