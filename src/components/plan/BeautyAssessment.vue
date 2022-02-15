<template>
  <div>
    <div class="left">
    <el-row class="row">
      <el-col :span="4">
        健康状态
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            健康、免疫功能正常
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            免疫功能低下
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>
      <el-row class="row">
      <el-col :span="4">
        吸烟习惯
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            不吸烟
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            少量吸烟（<10支/天）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              大量吸烟（>10支/天）
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
         <el-row class="row">
      <el-col :span="4">
        患者的美学期望
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            低
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            中
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
              高
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row class="row">
      <el-col :span="4">
        唇线
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            低位
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            中位
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
              高位
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row class="row">
      <el-col :span="4">
        牙龈生物型
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            低弧线形，厚龈生物型
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            中弧线形，中厚龈生物型
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              高弧线型，薄龈生物型
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row class="row">
      <el-col :span="4">
        牙冠形态
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            方圆形
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            尖圆形
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row class="row">
      <el-col :span="4">
        位点的感染情况
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            无
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            慢性
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              急性
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row class="row" >
      <el-col :span="4">
        邻牙牙槽嵴高度
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            到接触点≤5mm
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            到接触点5.5~6.5mm
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              到接触点≥7mm
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

     <el-row class="row">
      <el-col :span="4">
        邻牙修复状态
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            无修复体
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            有修复体
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>

         <el-row>
      <el-col :span="4" class="row">
        缺牙间隙的宽度
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            单颗牙（≥7mm）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            单颗牙（<7mm）
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              两颗牙或两颗牙以上
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
      <el-row class="row">
      <el-col :span="4">
        软组织解剖
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            软组织完整
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            软组织缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>

      </el-col>
    </el-row>
      <el-row class="row">
      <el-col :span="4">
        牙槽嵴解剖
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8">
            <el-checkbox v-model="filled" class="form">
            无骨缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
            水平向骨缺损
            </el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox :disabled="true" class="form">
              垂直向骨缺损
            </el-checkbox>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
    </div>

 <br>

    <el-button type="primary" @click="fill" v-if="!filled">一键填写</el-button>

    <el-dialog
  :show-close="false"
  :visible="popBeautyAssessment"
  width="30%">
  <span slot="title" class="dialogTitle"> 结论 </span>
  <span class="text">该患者美学风险为低风险。</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="close">确 定</el-button>
  </span>
</el-dialog>

  </div>

</template>

<script>
export default {
  name: 'BeautyAssessment',
  props: {popBeautyAssessment: Boolean},
  watch: {
    filled: function () {
      this.$emit('enableNext')
    }
  },

  data () {
    return {
      filled: false,
      showDialog: false
    }
  },
  methods: {
    fill: function () {
      this.filled = true
    },
    next () {
      this.$emit('next')
    },
    close () {
      this.$emit('close')
    }

  }
}
</script>

<style scoped>
  @import "../../assets/style.css";
  .left{
    text-align: left;
  }

</style>
